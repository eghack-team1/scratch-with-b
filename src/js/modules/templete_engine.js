

//var code = ["___age___","___ShopName___","___Name___"];


    var checktext = "___age___のたこてあき___Name___あああ___ShopName___";

    for(var i = 0; i < 3; i++){

    var checktext = checktext.replace(/___.*?___/, "Christmas");

    console.log(checktext);
  }
  console.log(checktext);
