/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_ScratchBlockController__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_templete_engine__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_parseBlock2Order__ = __webpack_require__(3);





var _$_to_$_ = "";
window.onload = ()=>{

  let sbctrl = new __WEBPACK_IMPORTED_MODULE_0__modules_ScratchBlockController__["a" /* default */];
  Array.prototype.forEach.call(sbctrl.items,(item)=>{
      item.addEventListener('dragstart',sbctrl.dragStartHandler);
      item.addEventListener('dragover',sbctrl.dragOverHandler);
      item.addEventListener('drop',sbctrl.dropHandler);
  });
  document.getElementById('build-btn').addEventListener('click',()=>{
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_parseBlock2Order__["a" /* default */])();
  });
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export draggingDOM */
var draggingDOM;
class ScratchBlockController {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ScratchBlockController;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export users */
/* unused harmony export default */


//var code = ["___age___","___ShopName___","___Name___","___ID___"];

//ユーザーデータ仮置き
var users =[
        {
          id:1,
          Name:"Sudo",
          age:21,
          sex:"man",
          ShopName:"ion"
        },
        {
          id:2,
          name:"Sususu",
          age:23,
          sex:"man",
          shopname:"kinokuni"
        }
    ];

//テキスト置換操作 関数としてはテキストとuserid必要？

function replace_sentence(text){
  let checktext = text;
  for(let prop in users[0]){
    checktext = checktext.replace(new RegExp(`___${prop}___`),users[0][`${prop}`]);
  }
  return checktext;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseBlock2Order;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block2order__ = __webpack_require__(4);


function parseBlock2Order(){
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
      if(Object(__WEBPACK_IMPORTED_MODULE_0__block2order__["a" /* default */])(call_function))
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = call_state;
/**
  call_function
    |- state          <string> : block state
    |- l_side, r_side <object> : left and right side variable
    |- operator       <string> : comparison operator
    |- contable       <boolean>: is the left side variable countable?
 */
function call_state(call_function) {
  let r_side = call_function.r_side,
  l_side = call_function.l_side;

  if (call_function.state === "if") {
    switch (call_function.operator) {
      case "==":
        return (l_side === r_side ? true : false);
        break;
      case ">":
        return (l_side > r_side ? true : false);
        break;
      case "<":
        return (l_side < r_side ? true : false);
        break;
      case ">=":
        return (l_side >= r_side ? true : false);
        break;
      case "<=":
        return (l_side <= r_side ? true : false);
        break;
      default: /* just in case ... */
        console.warn("illegal operator :(");
        return false;
    }
  }

  if (call_function.state === "loop") {
    if (call_function.contable === true) {
      /* countable -> for loop */
      for (var i = 0; i < l_side.length; i++) {
        console.log(l_side[i]);
        // document.write(l_side[i]);
      }
    } else {
      /* uncountable -> while loop */
      call_function.state = "if";
      while (!call_state(call_function)) {
        call_function.l_side += 1;
        console.log(call_function.l_side);
        // document.write(l_side[i]);
      }
    }
  }
}


/***/ })
/******/ ]);