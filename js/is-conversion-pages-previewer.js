jQuery.noConflict(); (function($) { $(function() {
  /**
     * Previsualizador de ebooks
     * 
     * Este plugin genera un previsualizador de ebooks con un navegador con flechas
     * que permite pasar de páginas.
     * 
     */
    $.fn.modEbookVewer = function() {
      $("#js-ebook-preview").each(function(){
        var $this         = $(this),
            $listing      = $this.find('.ebook-preview__pages'),
            $button_left  = $this.find('.ebook-preview__actions-button--prev'),
            $button_right = $this.find('.ebook-preview__actions-button--next')
        
        /* 
         * En esta función se configuran los valores por defecto del módulo para que
         * se visualice correctamente al cargar la página.
         */
        var before = function(){
    
          // Definiendo altura por defecto del contenedor
          $listing.css({
            height: $listing.find('.active').height() + 'px'
          })
    
        }
    
        /*
         * En esta función se controla el pase de las páginas del módulo.
         */
        var turnPage = function(){
    
          $button_right.click(function(){
            $listing.find('.active').each(function(){

              var $next = $(this).next(".ebook-preview__page").length 
                ? $(this).next() 
                : $(this).next().next()

              if ($next.length) {
                $(this)
                  .removeClass('active')
                  .css({ left: '0%' })
                  .animate({ left: '-100%' }, 'fast', 'swing')
                $next
                  .addClass('active')
                  .css({ left: '100%' })
                  .animate({ left: '0%' }, 'fast', 'swing')
                }
    
              $button_left.removeClass('ebook-preview__actions-button--off"')
              
              if (! $(this).next().next().length) {
                $button_right.addClass('ebook-preview__actions-button--off"')
              }
    
            })
          })
    
          $button_left.click(function(){
            $listing.find('.active').each(function(){

              var $prev = $(this).prev(".ebook-preview__page").length 
                ? $(this).prev() 
                : $(this).prev().prev()

              if ($prev.length) {
                $(this)
                  .removeClass('active')
                  .css({ left: '0%' })
                  .animate({ left: '100%' }, 'fast', 'swing')
                $prev
                  .addClass('active')
                  .css({ left: '-100%' })
                  .animate({ left: '0%' }, 'fast', 'swing')
                }
              
              $button_right.removeClass('ic-ebook-viewer-status-off')
            
              if (! $(this).prev().prev().length) {
                $button_left.addClass('ic-ebook-viewer-status-off')
              }
    
            })
          })
    
        }
    
        /*
         * Se busca si hay una imagen siguiente, si no la hay volvemos a seleccionar
         * la primera imagen del listado.
         */
    
    
        // Llamada de funciones
        $(window).on('load resize', before)
        $(window).on('load', turnPage)     
    
      })
    
    }
    
    // Invocando la función
    $(document).modEbookVewer()
    
  });
  })(jQuery);