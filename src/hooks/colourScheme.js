import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const colourSchemeState = atom({
  key: 'colourSchemeState',
  default:
    typeof window !== 'undefined'
      ? sessionStorage.getItem('colour-scheme') ?? 'default'
      : 'default',
});

const useColourScheme = () => {
  const [scheme, setScheme] = useRecoilState(colourSchemeState);

  useEffect(() => {
    sessionStorage.setItem('colour-scheme', scheme);
    document.documentElement.setAttribute('data-colour-scheme', scheme);
  }, [scheme]);

  return [scheme, setScheme];
};

export default useColourScheme;
