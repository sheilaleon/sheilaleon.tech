import React from 'react';
import { RecoilRoot } from 'recoil';

const init = () => {
  const getPreferredColourScheme = () => {
    const darkQuery = '(prefers-colour-scheme: dark)';
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return 'dark';
    }

    return 'default';
  };

  const colourScheme =
    sessionStorage.getItem('colour-scheme') ?? getPreferredColourScheme();

  document.documentElement.setAttribute('data-colour-scheme', colourScheme);

  sessionStorage.setItem('colour-scheme', colourScheme);
};

const InitScript = ({ script }) => (
  // eslint-disable-next-line
  <script dangerouslySetInnerHTML={{ __html: `(${script})();` }} />
);

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitScript script={init} key="init-script" />);
};

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
);
