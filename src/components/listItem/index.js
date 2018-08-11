import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,Button} from 'reactstrap';


class App extends Component {
  render() {
      const { title, url } = this.props;
      return (
    <Card >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{url}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}

export default App;