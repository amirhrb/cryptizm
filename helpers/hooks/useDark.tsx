import { useEffect, useState } from 'react';

const useDark = () => {
  const [isDark, setDark] = useState<boolean>(false);
  const handler = (event: any) => {
    if (event.matches) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    if (window) {
      setDark(match.matches);
    }
    match.addEventListener('change', handler);
    return () => match.removeEventListener('change', handler);
  }, []);
  return isDark;
};

export default useDark;
