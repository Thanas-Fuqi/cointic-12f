document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1024; // If Desktop

  if (isDesktop) {
    document.body.classList.add('desktop-hover');
  }
});