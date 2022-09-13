"use strict";

/**
 * Fade In
 * 
 * @param {*} element 
 * @param {...any} others 
 */
const fadeIn = (element, ...others) => {
  let e = element.style;
  let r;
  let opacity = 0;
  let speed = 200;
  let callback;

  for (let o of others)
    typeof o == "function" && 
      (callback = o),
    typeof o == "number" && (o % 1) == 0 && 
      (speed = o);
  
  const animation = () => {
    e.opacity = opacity += 10/speed;
    e.display = "block";
    if (opacity >= 1) {
      cancelAnimationFrame(r);
      opacity = 1;
      callback && callback();
    }
  }

  const play = () => {
    r = requestAnimationFrame(play);
    animation();
  }
  e.display !== "block" && play();
}

/**
 * Fade Out
 * 
 * @param {*} element 
 * @param {...any} others 
 */
const fadeOut = (element, ...others) => {
  let e = element.style;
  let r;
  let opacity = 1;
  let speed = 200;
  let callback;

  for (let o of others)
  typeof o == "function" && 
    (callback = o),
  typeof o == "number" && (o % 1) == 0 && 
    (speed = o);

  const animation = () => {
    e.opacity = opacity -= 10/speed;
    if (opacity <= 0 ) {
      cancelAnimationFrame(r);
      e.display = "none";
      opacity = 0;
      callback && callback();
    }
  }

  const play = () => {
    r = requestAnimationFrame(play);
    animation();
  }
  e.display !== "none" && play();

}