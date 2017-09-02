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
          return true;
        } else {
          console.log("イコールじゃないお");
          return false;
        }
        break;
      case ">":
        if (l_side > r_side) {
          console.log("左辺のほうが大きいお(´・ω・｀)");
          return true;
        }
        break;
      case "<":
        if (l_side < r_side) {
          console.log("右辺のほうが大きいお(´・ω・｀)");
          console.log(call_function.l_side, call_function.r_side);
          return true;
        }
        break;
      case ">=":
        if (l_side >= r_side) {
          console.log(l_side, "is bigger. (>=)");
          return true;
        }
        break;
      case "<=":
        if (l_side <= r_side) {
          console.log(r_side, "is bigger. (<=)");
          return true;
        }
        break;
      default:
        console.log("そんなものはない");
    }
  }

  if (call_function.state === "loop") {  /* loop state */
    if (call_function.contable === true) {
      /* カウントできるタイプのものは for 文で回す */
      for (var i = 0; i < l_side.length; i++) {
        console.log(l_side[i]);
      }
    } else {
      /* カウントできないものは while で回す */
      call_function.state = "if";
      console.log("while入りマース");
      while (!call_state(call_function)) {
        console.log("しんどい");
        call_function.l_side += 1;
      }
    }
  }
}

age = 24;
var call_function = new Object();
// call_function.state   = "if";
// call_function.r_side  = age;
// call_function.l_side  = 10;
// call_function.command = ">";

call_function.state    = "loop";
call_function.r_side   = 5;
call_function.l_side   = 0;
call_function.l_side   = ["ヘラクレス", "清姫", "ポール・バニヤン", "ダレイオス三世", "世界"];
call_function.command  = ">";
call_function.contable = true;

call_state(call_function);
