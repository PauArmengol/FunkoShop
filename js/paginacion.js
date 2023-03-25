$(function() {
    var totalPages = 10; // Total de páginas
    var visiblePages = 5; // Páginas visibles
    var currentPage = 1; // Página activa
    
    // Actualizar la lista de páginas
    function updatePagination() {
      var paginationList = $('.pagination');
      paginationList.empty();
  
      // Agregar botón para ir a la página 1
      paginationList.append('<li class="page-item"><a class="page-link" href="#">1</a></li>');
  
      // Agregar botón para ir a la página 2
      paginationList.append('<li class="page-item"><a class="page-link" href="#">2</a></li>');
  
      // Agregar botón para los puntos suspensivos
      paginationList.append('<li class="page-item disabled"><a class="page-link" href="#">...</a></li>');
  
      // Agregar botón para ir a la página 9
      paginationList.append('<li class="page-item"><a class="page-link" href="#">9</a></li>');
  
      // Agregar botón para ir a la página 10
      paginationList.append('<li class="page-item"><a class="page-link" href="#">10</a></li>');
    }
    
    // Actualizar el estado de los botones de flecha
    function updateArrowButtons() {
      var previousButton = $('.previous-page-button');
      var nextButton = $('.next-page-button');
      
      previousButton.toggleClass('disabled', currentPage === 1);
      nextButton.toggleClass('disabled', currentPage === totalPages);
    }
    
    // Manejar clics en los botones de página
    $('.pagination').on('click', 'li.page-item:not(.disabled) a.page-link', function() {
      var pageNumber = parseInt($(this).text());
      
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
        updatePagination();
        updateArrowButtons();
      }
    });
    
    // Manejar clics en el botón de página anterior
    $('.previous-page-button').on('click', function() {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        updateArrowButtons();
      }
    });
    
    // Manejar clics en el botón de página siguiente
    $('.next-page-button').on('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        updateArrowButtons();
      }
    });
    
    // Inicializar la lista de páginas
    updatePagination();
    updateArrowButtons();
  });
  










/*$(function() {
    var totalPages = 10; // Total de páginas
    var visiblePages = 5; // Páginas visibles
    var currentPage = 1; // Página activa
    
    // Actualizar la lista de páginas
    function updatePagination() {
      var paginationList = $('.pagination');
      paginationList.empty();
  
      // Agregar botón para ir a la página 1
      paginationList.append('<li class="page-item"><a class="page-link" href="#">1</a></li>');
  
      // Agregar botón para ir a la página 2
      paginationList.append('<li class="page-item"><a class="page-link" href="#">2</a></li>');
  
      // Agregar botón para los puntos suspensivos
      paginationList.append('<li class="page-item disabled"><a class="page-link" href="#">...</a></li>');
  
      // Agregar botón para ir a la página 9
      paginationList.append('<li class="page-item"><a class="page-link" href="#">9</a></li>');
  
      // Agregar botón para ir a la página 10
      paginationList.append('<li class="page-item"><a class="page-link" href="#">10</a></li>');
    }
    
    // Manejar clics en los botones de página
    $('.pagination').on('click', 'li.page-item:not(.disabled) a.page-link', function() {
      var pageNumber = parseInt($(this).text());
      
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
        updatePagination();
      }
    });
    
    // Inicializar la lista de páginas
    updatePagination();
  });
  */
  








