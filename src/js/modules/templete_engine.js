

//var code = ["___age___","___ShopName___","___Name___","___ID___"];


var users =[
        {
          id:1,
          name:"Sudo",
          age:21,
          sex:"man",
          shopname:"ion"
        },
        {
          id:2,
          name:"Sususu",
          age:23,
          sex:"man",
          shopname:"kinokuni"
        }
    ];

var checktext = "___Name___のたこてあき___age___あああ___ShopName___";

for(var i = 0; i < 3; i++){

  var result = checktext.match(/(___.*?___)/);

  console.log(result);
  if(result[0] === "___Name___"){
    checktext =checktext.replace(/___Name___/,users[0].name);
    console.log(checktext);
  }else if(result[0] === "___age___"){
    checktext =checktext.replace(/___age___/,users[0].age);
    console.log(checktext);
  }else if(result[0] === "___ShopName___"){
    checktext =checktext.replace(/___ShopName___/,users[0].shopname);
    console.log(checktext);
  }
}
