/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/
var button = document.getElementsByTagName("button")[0];
var start = 0;
var player = 0;
var clicked1= 0;
var clicked2= 0;
var clicked3= 0;
var clicked4= 0;
var clicked5= 0;
var clicked6= 0;
var clicked7= 0;
var clicked8= 0;
var clicked9= 0;
var inner1= 0;
var inner2= 0;
var inner3= 0;
var inner4= 0;
var inner5= 0;
var inner6= 0;
var inner7= 0;
var inner8= 0;
var inner9= 0;
var winner= 0;
var counter = 0;
var speler1wins= 0;
var speler2wins= 0;

function Start(){
  if (start==0) {
    start=1;
    button.innerHTML = 'Reset spel';
    var audio = new Audio('audio/start.mp3');
audio.play();
  } else {
    start=0;
    inner1= 0
    inner2= 0
    inner3= 0
    inner4= 0
    inner5= 0
    inner6= 0
    inner7= 0
    inner8= 0
    inner9= 0
    winner= 0
    var audio = new Audio('audio/reset.mp3');
audio.play();
      button.innerHTML = 'Start spel'
      document.getElementById("1").src = "img/empty.png";
      clicked1=0
      document.getElementById("2").src = "img/empty.png";
      clicked2=0
      document.getElementById("3").src = "img/empty.png";
      clicked3=0
      document.getElementById("4").src = "img/empty.png";
      clicked4=0
      document.getElementById("5").src = "img/empty.png";
      clicked5=0
      document.getElementById("6").src = "img/empty.png";
      clicked6=0
      document.getElementById("7").src = "img/empty.png";
      clicked7=0
      document.getElementById("8").src = "img/empty.png";
      clicked8=0
      document.getElementById("9").src = "img/empty.png";
      clicked9=0
  }
}

var checkwinner = setInterval (function() {
  if (inner1==1 && inner2==1 && inner3==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  speler1wins+=1
  winner=1
  counter+=1
  changeText()
} else if (inner1==2 && inner2==2 && inner3==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  speler2wins+=1
  changeText()
}  else if (inner4==1 && inner5==1 && inner6==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  counter+=1
  speler1wins+=1
  changeText()
} else if (inner4==2 && inner5==2 && inner6==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner7==1 && inner8==1 && inner9==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner7==2 && inner8==2 && inner9==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner1==1 && inner4==1 && inner7==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner1==2 && inner4==2 && inner7==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner2==1 && inner5==1 && inner8==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner2==2 && inner5==2 && inner8==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner3==1 && inner6==1 && inner9==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner3==2 && inner6==2 && inner9==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner1==1 && inner5==1 && inner9==1 && winner==0) {
  alert("Speler 1 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner1==2 && inner5==2 && inner9==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler2wins+=1
  counter+=1
  changeText()
} else if (inner3==1 && inner5==1 && inner7==1 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  speler1wins+=1
  counter+=1
  changeText()
} else if (inner3==2 && inner5==2 && inner7==2 && winner==0) {
  alert("Speler 2 wint");
  var audio = new Audio('audio/winner.mp3');
audio.play();
  winner=1
  counter+=1
  changeText()
} else if ( clicked1==1 && clicked2==1 && clicked3==1 && clicked4==1 && clicked5==1 && clicked6==1 && clicked7==1 && clicked8==1 && clicked9==1 && winner==0) {
  alert("Gelijkspel");
  winner=1
  counter+=1
  changeText()

}
}, 150);
var checkturn = setInterval(function() {
  if (player==1) {
  document.getElementById("playerturn").innerHTML = "2";
  document.getElementById("turnplayer").src = "img/circle.png";
 } else {
  document.getElementById("playerturn").innerHTML = "1";
  document.getElementById("turnplayer").src = "img/cross.png";
}
})

function changeText(){
document.getElementById("aantalrondes").innerHTML = counter;
document.getElementById("speler1rondes").innerHTML = speler1wins;
document.getElementById("speler2rondes").innerHTML = speler2wins;
}

function klik1() {
 if (start==1 && clicked1==0 && player==0) {
    document.getElementById("1").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner1=1 ;
    player=1 ;
    clicked1=1;

     }
else if (start==1 && clicked1==0 && player==1) {
  document.getElementById("1").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner1=2 ;
  player=0 ;
  clicked1=1;
  }
}

function klik2() {
 if (start==1 && clicked2==0 && player==0) {
    document.getElementById("2").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner2=1 ;
    player=1 ;
    clicked2=1;
     }
else if (start==1 && clicked2==0 && player==1) {
  document.getElementById("2").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner2=2 ;
  player=0 ;
  clicked2=1;
  }
}

function klik3() {
 if (start==1 && clicked3==0 && player==0) {
    document.getElementById("3").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner3=1 ;
    player=1 ;
    clicked3=1;
     }
else if (start==1 && clicked3==0 && player==1) {
  document.getElementById("3").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner3=2 ;
  player=0 ;
  clicked3=1;
  }
}

function klik4() {
 if (start==1 && clicked4==0 && player==0) {
    document.getElementById("4").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner4=1 ;
    player=1 ;
    clicked4=1;
     }
else if (start==1 && clicked4==0 && player==1) {
  document.getElementById("4").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner4=2 ;
  player=0 ;
  clicked4=1;
  }
}

function klik5() {
 if (start==1 && clicked5==0 && player==0) {
    document.getElementById("5").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner5=1 ;
    player=1 ;
    clicked5=1;
     }
else if (start==1 && clicked5==0 && player==1) {
  document.getElementById("5").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner5=2 ;
  player=0 ;
  clicked5=1;
  }
}

function klik6() {
 if (start==1 && clicked6==0 && player==0) {
    document.getElementById("6").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner6=1 ;
    player=1 ;
    clicked6=1;
     }
else if (start==1 && clicked6==0 && player==1) {
  document.getElementById("6").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner6=2 ;
  player=0 ;
  clicked6=1;
  }
}

function klik7() {
 if (start==1 && clicked7==0 && player==0) {
    document.getElementById("7").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner7=1 ;
    player=1 ;
    clicked7=1;
     }
else if (start==1 && clicked7==0 && player==1) {
  document.getElementById("7").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner7=2 ;
  player=0 ;
  clicked7=1;
  }
}

function klik8() {
 if (start==1 && clicked8==0 && player==0) {
    document.getElementById("8").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner8=1 ;
    player=1 ;
    clicked8=1;
     }
else if (start==1 && clicked8==0 && player==1) {
  document.getElementById("8").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner8=2 ;
  player=0 ;
  clicked8=1;
  }
}

function klik9() {
 if (start==1 && clicked9==0 && player==0) {
    document.getElementById("9").src = "img/cross.png";
    var audio = new Audio('audio/wood.mp3');
audio.play();
    inner9=1 ;
    player=1 ;
    clicked9=1;
     }
else if (start==1 && clicked9==0 && player==1) {
  document.getElementById("9").src = "img/circle.png";
  var audio = new Audio('audio/wood.mp3');
audio.play();
  inner9=2 ;
  player=0 ;
  clicked9=1;
  }
}
