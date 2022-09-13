'use strict';

(() =>{
  const counters = {
    twitter   : "https://public.newsharecounts.com/count.json?url=",
    facebook  : "https://graph.facebook.com/?id=",
    linkedin  : "https://www.linkedin.com/countserv/count/share?url=",
    pinterest : "https://api.pinterest.com/v1/urls/count.json?&url="
  }

  /**
   * 
   * @param {*} service 
   * @param {*} url 
   * @param {*} text 
   */
  const network = (service, url, text) => {
    const share_url = {
      twitter  : 'https://twitter.com/share?text='+text+'&url='+url,
      facebook : 'https://www.facebook.com/sharer/sharer.php?u='+url,
      linkedin : 'https://www.linkedin.com/shareArticle?mini=true&url='+url,
      pinterest: 'http://pinterest.com/pin/create/button/?url='+url,
      whatsapp : 'whatsapp://send?text='+text+':'+url,
      telegram : 'https://telegram.me/share/url?url='+url+'&text='+text
    }
    return share_url[service];
  }

  /**
   * Inicializar la función
   */
  const init = {
    share: (service, url, text) => {
      console.log("Test");
      if (service, url) window.open(
        network(service, url, text),
        '_blank',
        'toolbar    = yes,' +
        'scrollbars = yes,' +
        'resizable  = yes,' +
        'top        = 500,' +
        'left       = 500,' +
        'width      = 490,' +
        'height     = 400'    
      );
    }
  }

  window.isSocialIcons = init;
})();