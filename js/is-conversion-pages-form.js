(() => {
  const className = "is-conversion-pages";

  /**
   * Move previewer in mobile
   */
  const move_previewer = () => {
    let cover = document.getElementById("js-ebook-preview");
    let left = document.getElementById("js-main-left");
    let right = document.getElementById("js-main-right");

    if (cover != null && left != null && right != null) {
      if (window.outerWidth <= 768) {
        right.prepend(cover);
      } else {
        left.prepend(cover);
      }
    }
  }
  move_previewer();
  window.addEventListener('load', move_previewer);
  window.addEventListener('resize', move_previewer);

})();