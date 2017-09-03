

//var code = ["___age___","___ShopName___","___Name___","___ID___"];

//ユーザーデータ仮置き
export var users =[
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

export default function replace_sentence(text){
  let checktext = text;
  for(let prop in users[0]){
    checktext = checktext.replace(new RegExp(`___${prop}___`),users[0][`${prop}`]);
  }
  return checktext;
}
