import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/decks">Decks</Link>
            </li>
          </ul>
        </div>

        {this.props.children}
      </div>
    )
  }
}