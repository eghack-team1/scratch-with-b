

//var code = ["___age___","___ShopName___","___Name___"];


var users =[
        {
          id:1,
          name:"Sudo",
          age:21,
          sex:"man"
        },
        {
          id:2,
          name:"Sususu",
          age:23,
          sex:"man"
        }
    ];


    var checktext = "___Name___のたこてあき___age___あああ___ShopName___";

  //  for(var i = 0; i < 3; i++){

    var result = checktext.match(/(___.*?___)/);

    console.log(result);
    if(result[0] === "___Name___"){
       checktext =checktext.replace(/___Name___/,users[0].name);
       console.log(checktext);
    }

//}
