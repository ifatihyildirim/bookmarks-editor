import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';


const App = (props) => {
  const { title, url, img } = props;

  return (
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>
        <CardSubtitle>
          <small className="text-muted">
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {url}
            </a>
          </small>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default App;
