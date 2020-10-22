import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Error404 = React.lazy(() => import('./views/pages/page404/Page404'));
const AboutMe = React.lazy(() => import('./views/about-me/AboutMe'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/aboutMe', exact: false, name: 'AboutMe', component: AboutMe },
  { path: '/404', exact: false, name: 'Error404', component: Error404 },
];

export default routes;
