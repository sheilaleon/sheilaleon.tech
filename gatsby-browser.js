import React from 'react';
import { RecoilRoot } from 'recoil';

// import './src/css/styles.css';
import './src/assets/css/global.css';

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
);
