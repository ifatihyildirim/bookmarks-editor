/* global chrome */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
} from 'reactstrap';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';

// import demo from './demo.json';
import ListItem from './components/listItem';

const SortableItem = SortableElement(({ value }) => (
  <ListItem {...value} />
));

const SortableList = SortableContainer(({ items, handleClick }) => (
  <Row>
    {items.map((value, index) => (
      <Col className="p-2" md={3} onClick={handleClick(index)}>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      </Col>
    ))}
  </Row>
));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    chrome.bookmarks.getTree((itemTree) => {
      this.setState({ items: itemTree[0].children });
    });
  }

  onitemFolderPress = index => () => {
    this.setState(prevState => ({ items: prevState.items[index].children }));
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      items: arrayMove(prevState.items, oldIndex, newIndex),
    }), this.changeIndexes(oldIndex, newIndex));
  };

  changeIndexes = (oldIndex, newIndex) => () => {
    let initial = null;
    let end = null;

    if (oldIndex < newIndex) {
      initial = oldIndex;
      end = newIndex;
    } else {
      initial = newIndex;
      end = oldIndex;
    }

    for (initial; initial <= end; initial += 1) {
      this.state.items[initial].index = initial;
    }
  }


  render() {
    return (
      <Container>
        <SortableList axis="xy" items={this.state.items} handleClick={this.onitemFolderPress} onSortEnd={this.onSortEnd} />
      </Container>
    );
  }
}

export default App;
