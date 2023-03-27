/* Events: Events are things that happen in the system you are programming, the system produces(or"fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken(that is,some code running) when the event occurs.
   Events are fired inside the browser window, and tend to be attached to a specific item that resides in it.
   This might be a single element, a set elements, the HTML document loaded in the current tab, or the entire browser window.

   Note: Web events are not part of the core JavaScript language - they are defined as part of the APIs built into the browser.
*/
const btn = document.querySelector("button");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.background = rndCol;
});
