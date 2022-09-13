
    //Obtener URL
    const url = window.location.href
    // Obtener elemento en el que se mostrará el texto
    const idioma = document.querySelector('.pll-parent-menu-item>a span')

    //Obtener elemento de la imagen previa al texto
    const worldImg = document.querySelector('.pll-parent-menu-item>a img')

    //Cambiar el contenido del texto según el idioma

    if(url.indexOf("/en/") > -1){
        idioma.innerText = "Language"
    }else if(url.indexOf("/fr/") > -1){
        idioma.innerText = "La langue"
    }else if(url.indexOf('/it/') > -1){
        idioma.innerText = "Lingua"
    }else if(url.indexOf("/de/") > -1){
        idioma.innerText = "Sprache"
    }else{
        idioma.innerText = "Idioma"
    }

    //Cambiar imagen por la del icono del mundo
    worldImg.src = "https://siliciumg5.com/blog/wp-content/uploads/2022/04/world.png";

    //Mostrar elementos
    idioma.style.display= "block";
    worldImg.style.display = "block";



