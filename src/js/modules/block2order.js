/* DOMから送られてきたオブジェクトの state 属性で関数呼び出し */
function call_state(call_function) {
  /* 右辺・左辺の値をローカル変数に落としておく */
  r_side = call_function.r_side;
  l_side = call_function.l_side;

  /* 各 state ごとに命令呼び出し */
  if (call_function.state === "if") { /* if state */
    /* 各比較演算子ごとに見てみる */
    switch (call_function.command) {
      case "==":
        if (l_side === r_side) {
          console.log("イコールだお");
        } else {
          console.log("イコールじゃないお");
        }
        break;
      case ">":
      case "<":
        if (l_side > r_side) {
          console.log("左辺のほうが大きいお(´・ω・｀)");
        } else {
          console.log("右辺のほうが大きいお(´・ω・｀)");
        }
        break;
      case ">=":
      case "<=":
        if (l_side >= r_side) {
          console.log(l_side, "is bigger. (>=)");
        } else {
          console.log(r_side, "is bigger. (<=)");
        }
        break;
      default:
        console.log("そんなものはない");
    }
  }

  if (call_function.state === "loop") {  /* loop state */
    if (call_function.contable === true) {
      for (var i = 0; i < l_side.length; i++) {
        console.log(l_side[i]);
      }
    }
  }
}

age = 24;

var call_function = new Object();
call_function.state   = "if";
call_function.r_side  = age;
call_function.l_side  = 10;
call_function.command = ">";

call_state(call_function);
