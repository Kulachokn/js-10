'use strict'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const saveTheme = localStorage.getItem('theme');

inputTheme.checked = saveTheme === Theme.DARK;
bodyRef.classList.toggle(Theme.DARK, saveTheme === Theme.DARK);
bodyRef.classList.toggle(Theme.LIGHT, saveTheme === Theme.LIGHT);

const handleToggleTheme = () => {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  localStorage.setItem('theme', inputTheme.checked ? Theme.DARK : Theme.LIGHT);
};

inputTheme.addEventListener('change', handleToggleTheme);
