"use strict";

/**
 * Logotipo adaptable
 * 
 * Esta función detecta el tamaño de la ventana del navegador para mostrar la 
 * versión del logotipo que mejor encaje con la dimesiones.
 * 
 * @sinde 1.0
 * 
 * @return undefined
 */
(function(){
  let logo = document.getElementById( 'js-topbar__brand-logotype' );

  if (logo !== null) {
    let desktop_src    = logo.dataset.desktop;
    let desktop_height = logo.dataset.desktop_height;
    let mobile_src     = logo.dataset.mobile;
    let mobile_height  = logo.dataset.mobile_height;
    let query          = 768;
  
    const init = () => { 
      let win = window.innerWidth;
  
      // La ventana es más ancha que el valor de 'query'
      if ( win >= query ) {
        logo.src = desktop_src;
        logo.height = desktop_height;
        logo.style.opacity = 1; 
      } 
      
      // La ventana en mas estrecha que el valor de 'query'
      else {
        logo.src = mobile_src;
        logo.height = mobile_height;
      }
  
      // Mostra el logotipo en este momento para evitar saltos
      logo.style.opacity = 1;
  
    }
  
    init();
    window.addEventListener( "resize", init );
  }

})();

/**
 * Estados del topbar
 * 
 * Esta función controla el comportamiento del topbar en base al estado que se
 * haya especificado en la configuración del módulo.
 * 
 * @since 1.0
 * 
 * @return undefined
 */
(function(){
  let trigger     = document.body.scrollHeight * 0.1;
  let topbar      = document.getElementById("js-topbar");
  let is_fixed    = topbar.classList.contains("topbar--fixed");
  let is_smart    = topbar.classList.contains("topbar--smart");
  let last_scroll = 0;

  const init = () => {

    is_fixed && (
      fixedStatus(),
      window.addEventListener("scroll", fixedStatus),
      window.addEventListener("resize", fixedStatus)

    );

    is_smart && (
      window.addEventListener("scroll", smartStatus),
      window.addEventListener("resize", smartStatus)
    );
  }

  // Función para la barra en status 'fixed'
  const fixedStatus = () => {
    window.scrollY 
      ? topbar.classList.add("is_scrolling") 
      : topbar.classList.remove("is_scrolling");
  }

  // Función para la barra en status 'smart'
  const smartStatus = () => {
    let scroll = window.scrollY;

    scroll
      ? topbar.classList.add("is_scrolling") 
      : topbar.classList.remove("is_scrolling");
 
    // Si el scroll se está deslizando hacia abajo
    if ( scroll > last_scroll && ( scroll >= trigger || scroll >= 200 ) ) {
      setTimeout(function(){
        topbar.classList.add("is_active");
      }, 500);
    } 
    
    // Si el scroll se está deslizando hacia arriba
    else {
      setTimeout(function(){
        topbar.classList.remove("is_active");
      }, 500);
    }

    // Actualizando el último dato de posición del scroll
    last_scroll = scroll;
  }

  init();

})();

/**
 * Formulario de búsqueda
 * 
 * Esta función habilita la funcionalidad de ocultar el contenido del topbar y 
 * mostrar el campo de búsqueda predictivo.
 * 
 * @since 1.0
 * 
 * @return undefined
 */
(function(){
  let topbar      = document.getElementById("js-topbar");
  let menu        = topbar.querySelector(".topbar__menu");
  let search      = topbar.querySelector(".topbar__search");
  let action_show = topbar.querySelector(".topbar__actions-button.show");
  let action_hide = topbar.querySelector(".topbar__actions-button.hide");

  // Acción de mostrar el buscador
  const show_search = () => {
    fadeOut(action_show, () => { 
      fadeIn(action_hide);
    });
    fadeOut(menu, () => { 
      fadeIn(search);
    });

    // Volver a mostrar el menú al apretar la tecla 'esc'
    document.addEventListener('keydown', (e) => {
      if ( 27 === e.keyCode ) {
        menu.style.display === 'none' 
          && hide_search();
      }
    });      
  };

  // Acción de volver al menú
  const hide_search = function() {
    fadeOut(action_hide, () => {
      fadeIn(action_show);
    });
    fadeOut(search, () => {
      fadeIn(menu);
    });
  };

  // Ejecturar la funciones
  action_show.addEventListener("click", show_search);
  action_hide.addEventListener("click", hide_search);

})();

/**
 * Menú en moble
 */
(function(){
  let body     = document.body;
  let topbar   = document.getElementById("js-topbar");
  let burger   = topbar.querySelector('.topbar__burger');
  let collapse = topbar.querySelector('.topbar__collapse');

  burger.addEventListener("click", function(){
    this.classList.toggle('is_active');
    body.classList.toggle('scroll_off');

    // Mostrar u ocultar el menú y el buscador
    "block" === collapse.style.display
      ? fadeOut(collapse)
      : fadeIn(collapse);
  });
})();