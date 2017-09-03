/**
  call_function
    |- state          <string> : block state
    |- l_side, r_side <object> : left and right side variable
    |- operator       <string> : comparison operator
    |- contable       <boolean>: is the left side variable countable?
 */
function call_state(call_function) {
  r_side = call_function.r_side, l_side = call_function.l_side;

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

/* to translate <type>, if necessary */
// $.data(element, key, value); /* to get $.data */
/* assigned to the object of `call_function` */
call_function = new Object();
// $.atter(, , call_function.state);

console.log(call_state(call_function));
