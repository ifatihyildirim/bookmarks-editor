/* global chrome */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';

import demo from './demo.json';
import ListItem from './components/listItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null,
    };
  }

  componentWillMount() {
    this.setState({ json: demo });

    // chrome.bookmarks.getTree((itemTree) => {
    //   this.setState({json: itemTree[0].children})
    // });
  }

  list() {
    const SortableItem = SortableElement(({ value }) => (
      <ul>
        {value.title}
      </ul>
    ));
    const SortableList = SortableContainer(({ items }) => this.state.json[0].children.map((index, value) => (
      <Col md={3}>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      </Col>
    )));

    return (
      <Row>
        <SortableList items={this.state.json} onSortEnd={this.onSortEnd} />
      </Row>
    );
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.state.json, oldIndex, newIndex),
    });
  }

  render() {
    return (
      <Container>
        {this.list()}
      </Container>
    );
  }
}

export default App;
