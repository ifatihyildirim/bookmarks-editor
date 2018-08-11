import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import PropTypes from 'prop-types';


const ListItem = (props) => {
  const { title, url } = props;

  return (
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>
        {url && (
        <CardSubtitle>
          <small className="text-muted">
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {url}
            </a>
          </small>
        </CardSubtitle>
        )}
      </CardBody>
    </Card>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ListItem.defaultProps = {
  url: '',
};

export default ListItem;
