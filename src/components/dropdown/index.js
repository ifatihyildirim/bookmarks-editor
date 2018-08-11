import React from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} size="sm" onClick={() => {}} toggle={this.toggle}>
        <DropdownToggle className="btn btn-light">
          <FontAwesomeIcon icon={faEllipsisV} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            {'Edit'}
          </DropdownItem>
          <DropdownItem>
            {'Delete'}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
