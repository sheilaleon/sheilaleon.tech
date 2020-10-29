import React from 'react';

import Layout from '../components/layout/layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location} pageTitle="404: Not Found">
    <h1 className="text-6xl">🤷🏽‍♀️ 404. Not Found.</h1>
    <p>The page you are looking for doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
