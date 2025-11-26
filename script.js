function toggleTheme() {
    const html = document.documentElement;
    const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');