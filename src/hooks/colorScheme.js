import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const colorSchemeState = atom({
  key: 'colorSchemeState', // unique ID (with respect to other atoms/selectors)
  default:
    typeof window !== 'undefined'
      ? sessionStorage.getItem('color-scheme') ?? 'default'
      : 'default', // default value (aka initial value)
});

const useColorScheme = () => {
  const [scheme, setScheme] = useRecoilState(colorSchemeState);

  useEffect(() => {
    sessionStorage.setItem('color-scheme', scheme);
    document.documentElement.setAttribute('data-color-scheme', scheme);
  }, [scheme]);

  return [scheme, setScheme];
};

export default useColorScheme;
