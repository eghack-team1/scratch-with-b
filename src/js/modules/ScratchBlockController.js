export var draggingDOM;
export default class ScratchBlockController {
  constructor(){
    this.items = document.querySelectorAll('[draggable="true"]');
  }

  dragStartHandler(event) {
    let dragElement = event.target;
    
    switch(dragElement.getAttribute('data-scratch-type')) {
      case null:
        return;
        break;
      case 'workspace':
        return;
        break;
      case 'box':
        event.stopPropagation();
        return;
        break;
      default:
        break;
    }
    draggingDOM = dragElement;
  }

  dragOverHandler(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
  }

  dropHandler(event) {
      let dropElement = event.target;
      switch (dropElement.getAttribute('data-scratch-type')){
        case 'workspace':
          event.stopPropagation();
          draggingDOM.parentNode.removeChild(draggingDOM);
          break;
        case 'box':
          event.stopPropagation();
          dropElement.appendChild(draggingDOM.cloneNode(true));
          break;
        case 'command-wrapper-block':
          event.stopPropagation();
          console.error(draggingDOM);
          dropElement.appendChild(draggingDOM.cloneNode(true));
          break;
        default:
          return;
      }
  }
}
