export default function parseBlock2Order(){
  let trg = document.getElementById('target');
  let children = trg.childNodes;
  let commands = getScratchChildNodeList(trg);
  console.log(commands);
  for(let i = 0; i < commands.length; i++){
    selectBlockAction(commands[i].block);
  }
}
function getScratchChildNodeList(parent){
  let children = parent.children;
  let commands = [];
  for(let i = 0; i < children.length; i++){
    commands.push({block:children[i]});
  }
  return commands;
}
function selectBlockAction(block,result=[]){
  let commands = [];
  switch (block.getAttribute('data-scratch-type')){
    case 'statement-block-if':
    case 'if-expression':
      commands = getScratchChildNodeList(block);
      for(let i = 0;i<commands.length;i++){
        result.push({
            if:{
              lhs:null,
              rhs:null,
              operator:null
          }
        });

        let exps = getScratchChildNodeList(commands[i].block);
        for(let j = 0;j<exps.length;j++){
          console.log(exps[j]);
          selectBlockAction(exps[j].block,result[i]);
        }
      }
      break;
    case 'if-expression-lhs':
      result.if.lhs = block.childNodes[1].value;
      console.log(result)
      break;
    case 'if-expression-rhs':
      result.if.rhs = block.childNodes[0].value;
      console.log(result)
      break;
    case 'if-exprssion-operator':
      result.if.operator = block.childNodes[1].value;
      console.log(result)
      break;
    default:
      return result;
      break;
  }
}
