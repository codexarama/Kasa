import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../Styles/User.css';

/**
 * Render the Host component
 * @extends Component
 * @param {object} props
 * @param {object} props.name > get full name
 * @param {string} props.name.firstName > get user first name
 * @param {string} props.name.lastName > get user last name
 * @param {string} props.src > picture url (avatar)
 * @param {string} props.alt > alt text (full name)
 * @returns {Reactnode} jsx in DOM html
*/

export default class User extends React.Component {
  render() {
    const { name, src } = this.props;
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    return (
      <Fragment>
        <div className="user-infos">
          <p className="user-name">
            {firstName}
            <br />
            {lastName}
          </p>
          <img className="user-avatar" src={src} alt={name} />
        </div>
      </Fragment>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

