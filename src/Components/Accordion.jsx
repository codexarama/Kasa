import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Accordion.css';

/**
 * Render Accordion component
 * @extends Component
 * @param {object} props
 * @param {string} props.title > item title
 * @param {string} props.content > item content
 * @param {boolean} props.isOpen > get item state (open/close)
 * @param {function} props.showContent > handle content toggle render (show/hide) by clicking on button
 * @returns {Reactnode} jsx injected in DOM
 */

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  showContent = () => {
    this.setState((prevState) => ({
      isOpen: prevState.isOpen ? false : true,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { className, id, title, content } = this.props;

    return (
      <article className={className}>
        <button className="accordion-title" onClick={this.showContent}>
          <span>{title}</span>
          <span>
            {isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </span>
        </button>

        {isOpen && typeof content !== 'string' && (
          <ul className="accordion-content">
            {content.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        )}

        {isOpen && typeof content === 'string' && (
          <p key={id} className="accordion-content">
            {content}
          </p>
        )}
      </article>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
