const form = document.querySelector('.search-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita que se envíe el formulario
  const query = this.querySelector('input[type="text"]').value;
  // realizar la búsqueda utilizando la consulta de búsqueda
});
