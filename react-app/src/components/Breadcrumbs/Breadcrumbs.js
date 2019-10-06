import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import './Breadcrumbs.scss';
import './-CurrentLocation/Breadcrumbs-CurrentLocation.scss';
import './-Link/Breadcrumbs-Link.scss';

export default class RepositoryBreadcrumbs extends Component {
  render() {
    const { items } = this.props;
    const linksArr = items.slice(0, items.length - 1);
    const currentLocation = items[items.length - 1];
    const cnBC = cn('Breadcrumbs');

    return (
      <div className={cnBC()}>
        {linksArr.map((link, idx) =>
          <NavLink
            to={link.to}
            className={cnBC('Link')}
            key={idx}
          >{link.title}</NavLink>
        )}
        {<span className={cnBC('CurrentLocation')}>{currentLocation.title}</span>}
      </div>
    )
  }
}