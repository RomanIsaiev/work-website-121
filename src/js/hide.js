const toggleBtn = document.getElementById('toggleBtn');
const textBlock = document.getElementById('textBlock');

toggleBtn.addEventListener('click', () => {
  textBlock.classList.toggle('collapsed');
  toggleBtn.textContent = textBlock.classList.contains('collapsed')
    ? 'Читати далі'
    : 'Приховати';
});
