export const useTheme = () => {
  const { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } = useLocalStorage();

  function toggleTheme() {
    const t = (theme() == 'dark') ? 'light' : 'dark';

    setTheme(t);
    updateTheme();
  }

  function updateTheme() {
    const dark = theme() == 'dark';

    const element = document.documentElement;
    const classes = element.classList;

    if(dark) classes.add('dark');
    else classes.remove('dark');
  }

  function theme() {
    const theme = getLocalStorageItem('theme');

    return theme || preferedTheme();
  }

  function setTheme(theme: string) {
    if(theme == preferedTheme()) removeLocalStorageItem('theme');
    else setLocalStorageItem('theme', theme);
  }

  function preferedTheme() {
    return prefersDarkMode() ? 'dark' : 'light';
  }

  function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return {
    toggleTheme, updateTheme,
    theme, setTheme, preferedTheme, prefersDarkMode
  }
}
