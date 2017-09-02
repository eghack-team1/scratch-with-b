export var draggingDOM;
export default class ScratchBlockController {
  constructor(){
    this.items = document.querySelectorAll('[draggable="true"]');
  }

  dragStartHandler(event) {
    let dragElement = event.target;
    draggingDOM = dragElement.cloneNode(true);
  }

  dragOverHandler(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';

  }

  dropHandler(event) {
      let dropElement = event.target;
      event.stopPropagation();
      console.error(draggingDOM);
      dropElement.appendChild(draggingDOM);
  }
}
