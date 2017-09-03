import ScratchBlockController from './modules/ScratchBlockController';
import replace_sentence from './modules/templete_engine';
import parseBlock2Order from './modules/parseBlock2Order'
window.onload = ()=>{
  let sbctrl = new ScratchBlockController;
  Array.prototype.forEach.call(sbctrl.items,(item)=>{
      item.addEventListener('dragstart',sbctrl.dragStartHandler);
      item.addEventListener('dragover',sbctrl.dragOverHandler);
      item.addEventListener('drop',sbctrl.dropHandler);
  });
  document.getElementById('build-btn').addEventListener('click',()=>{
    parseBlock2Order();
  });
}
