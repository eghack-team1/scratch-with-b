import ScratchBlockController from './modules/ScratchBlockController';

window.onload = ()=>{
  let sbctrl = new ScratchBlockController;
  Array.prototype.forEach.call(sbctrl.items,(item)=>{
      item.addEventListener('dragstart',sbctrl.dragStartHandler);
      item.addEventListener('dragover',sbctrl.dragOverHandler);
      item.addEventListener('drop',sbctrl.dropHandler);
  });
}
