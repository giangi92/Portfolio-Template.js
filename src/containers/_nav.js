import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'About Me',
    to: '/aboutMe',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'My Work',
    route: '/',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '2019',
        to: '/2019/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '2020',
        to: '/2020/',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Connect',
    to: '/',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

