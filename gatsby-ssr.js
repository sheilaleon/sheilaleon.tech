import React from 'react';
import { RecoilRoot } from 'recoil';

const init = () => {
  const getPreferredColorScheme = () => {
    const darkQuery = '(prefers-color-scheme: dark)';
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return 'dark';
    }

    return 'default';
  };

  const colorScheme =
    sessionStorage.getItem('color-scheme') ?? getPreferredColorScheme();

  document.documentElement.setAttribute('data-color-scheme', colorScheme);

  sessionStorage.setItem('color-scheme', colorScheme);
};

const InitScript = ({ script }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${script})();` }} />
);

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitScript script={init} key="init-script" />);
};

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
);
