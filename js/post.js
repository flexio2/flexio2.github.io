(function(){
  let post    = document.getElementById('js-post');
  let hero    = post.querySelector('.post__hero');
  let caption = post.querySelector('.post__hero-caption');
  let image   = post.querySelector('.post__hero-background');

  const postHero = () => {
    let scroll = window.scrollY; 
    let stop = hero.offsetHeight + hero.offsetTop;

    if ( scroll <= stop ) {

      // Efectos del 'caption'
      caption.style.opacity   = 1 - ( scroll / 500 );

      // Efectos de la imagen de fondo
      /* image.style.transform = 'translateY(' + scroll / 4 + 'px)';
      image.style.filter = 'blur(' + scroll / 50 + 'px)'; */
    }
  }
  postHero();
  window.addEventListener("scroll", postHero);
  window.addEventListener("resize", postHero);
})();

/**
 * Progreso de lectura
 * 
 * Esta función muestra el progreso de lectura de un post mediante una barra 
 * horizontal que se va completando a medida que se va haciendo scroll por el
 * contenido de la entrada.
 * 
 * @since 1.0
 * 
 * @returns undefined
 */
(function(){
  let topbar   = document.getElementById('js-topbar');
  let post     = document.getElementById('js-post');
  let progress = topbar.querySelector('.topbar__reading-progress');
  let bar      = topbar.querySelector('.topbar__reading-progress-bar');

  const showProgress = () => {
    let scroll = window.scrollY;
    let content = post.querySelector('.post__content');
    let content_top = content.offsetTop;
    let offset = window.innerHeight / 2;

    // Mostrar u ocultar la barra
    ( scroll + offset ) >= content_top 
      ? fadeIn( progress ) 
      : fadeOut( progress ) 
  }
  showProgress();
  window.addEventListener("scroll", showProgress);
  window.addEventListener("resize", showProgress);

  const barProgress = () => {
    let scroll = window.scrollY;
    let content = post.querySelector('.post__content');
    let content_top = content.offsetTop;
    let content_heigth = content.offsetHeight;
    let offset = window.innerHeight / 2;
    let percent = ( ( ( scroll + offset ) - content_top ) / content_heigth ) * 100;

    bar.style.width = percent + "%";

  }
  barProgress();
  window.addEventListener("scroll", barProgress);
  window.addEventListener("resize", barProgress);

})();


/**
 * Botón de Scroll-Top 
 * 
 * @since 1.1.10
 * 
 * @returns undefined
 */
(function(){
  let scrollContainer = document.getElementById('js-scroll-top-container');
  let scrollBtn = document.getElementById('js-scroll-top');

  scrollContainer.classList.add("hidden");

  const showScroll = () => {
    let scroll = window.scrollY;
    let minScroll = window.innerHeight / 4;

    // Mostrar u ocultar la boton
    scroll >= minScroll 
      ? scrollContainer.classList.remove("hidden")
      : scrollContainer.classList.add("hidden")    
  }

  window.addEventListener("scroll", showScroll);

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollBtn.addEventListener("click", scrollTop );
})();