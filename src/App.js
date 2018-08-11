/* global chrome, console */

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

import demo from './demo.json';
import ListItem from './components/listItem';

const SortableItem = SortableElement(({ value }) => (
  <Col className="p-2" md={3}>
    <ListItem {...value} />
  </Col>
));

const SortableList = SortableContainer(({ items }) => (
  <Row>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </Row>
));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: demo[0].children,
    };
  }

  componentWillMount() {
    // chrome.bookmarks.getTree((itemTree) => {
    //   this.setState({json: itemTree[0].children})
    // });
  }

  onSortEnd = () => ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      items: arrayMove(prevState.items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <Container>
        <SortableList axis="xy" items={this.state.items} onSortEnd={this.onSortEnd} />
      </Container>
    );
  }
}

export default App;
