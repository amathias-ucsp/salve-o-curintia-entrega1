
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('ano');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
