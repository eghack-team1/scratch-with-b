import call_state from './block2order';

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
      let call_function = new Object();
      call_function.state = 'if';
      call_function.l_side = result.if.lhs;
      call_function.r_side = result.if.rhs;
      call_function.operator = result.if.operator;
      console.log("if expression")
      console.log(block.parentNode.parentNode.children[1])
      if(call_state(call_function))
        selectBlockAction(block.parentNode.parentNode.children[1],result);
      break;
    case 'command-wrapper-block':
      //console.log(block.children[0].children[0].children[0].value);
      if(block.children[0].children[0].children[0].value == 'body'){
          _$_body_$_ = document.getElementsByClassName('summer-container')[0].innerHTML;
        }else if(block.children[0].children[0].children[0].value == '_body'){
          _$_body_$_ = $(".scratch-block-if-commands #detail").val()+_$_body_$_;
        }else if(block.children[0].children[0].children[0].value == 'body_'){
          _$_body_$_ = _$_body_$_ + $(".scratch-block-if-commands .summernote").val();
        }else if(block.children[0].children[0].children[0].value == 'sub'){
          _$_subject_$_ = document.getElementsByClassName('summer-container')[0].innerHTML;
        }else{
          console.error("unmatch option value");
      }
      console.log("Execute!");
      $.ajax({
        url:'http://localhost:8888/scratch-with-b/server/mail.php',
        type:'post',
        data:{to:"test.scratch..with.b@gmail.com",subject:_$_subject_$_,body:_$_body_$_}
      }).done(()=>{
        console.log("success")
      })
      break;
    default:
      return result;
      break;
  }
}
