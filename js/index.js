$(document).ready(function() {
  var elems = document.getElementsByClassName("hole");
  var check = jQuery.makeArray(elems);

  var playerWin = 0;
  var computerWin = 0;
  var tie = 0;
  var win = false;
  var loss = false;
  var madeMove = false;

  var elemsOne = document.getElementById("row-one").getElementsByClassName("hole");
  var rowOne = jQuery.makeArray(elemsOne);

  var elemsTwo = document.getElementById("row-two").getElementsByClassName("hole");
  var rowTwo = jQuery.makeArray(elemsTwo);

  var elemsThree = document.getElementById("row-three").getElementsByClassName("hole");
  var rowThree = jQuery.makeArray(elemsThree);

  var elemsFour = document.getElementById("row-four").getElementsByClassName("hole");
  var rowFour = jQuery.makeArray(elemsFour);

  var elemsFive = document.getElementById("row-five").getElementsByClassName("hole");
  var rowFive = jQuery.makeArray(elemsFive);

  var elemsSix = document.getElementById("row-six").getElementsByClassName("hole");
  var rowSix = jQuery.makeArray(elemsSix);

  var elemsSeven = document.getElementById("row-seven").getElementsByClassName("hole");
  var rowSeven = jQuery.makeArray(elemsSeven);

  $("#row-one").on("click", function() {
    if (rowOne.length > 0) {
      $(rowOne[rowOne.length - 1]).addClass("black");
      rowOne.splice(rowOne.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-two").on("click", function() {
    if (rowTwo.length > 0) {
      $(rowTwo[rowTwo.length - 1]).addClass("black");
      rowTwo.splice(rowTwo.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-three").on("click", function() {
    if (rowThree.length > 0) {
      $(rowThree[rowThree.length - 1]).addClass("black");
      rowThree.splice(rowThree.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-four").on("click", function() {
    if (rowFour.length > 0) {
      $(rowFour[rowFour.length - 1]).addClass("black");
      rowFour.splice(rowFour.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-five").on("click", function() {
    if (rowFive.length > 0) {
      $(rowFive[rowFive.length - 1]).addClass("black");
      rowFive.splice(rowFive.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-six").on("click", function() {
    if (rowSix.length > 0) {
      $(rowSix[rowSix.length - 1]).addClass("black");
      rowSix.splice(rowSix.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  $("#row-seven").on("click", function() {
    if (rowSeven.length > 0) {
      $(rowSeven[rowSeven.length - 1]).addClass("black");
      rowSeven.splice(rowSeven.indexOf(this), 1);
      checkForWin();
      checkForTie();
      setTimeout(computerMove(), 100);
    }
  })

  function computerMove() {
    
    smartMove();
    if (madeMove === false) {
      var rowArr = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven]
        //removing full columns
      if (rowOne.length < 1) {
        rowArr.splice(rowArr.indexOf(rowOne), 1);
      }
      if (rowTwo.length < 1) {
        rowArr.splice(rowArr.indexOf(rowTwo), 1);
      }
      if (rowThree.length < 1) {
        rowArr.splice(rowArr.indexOf(rowThree), 1);
      }
      if (rowFour.length < 1) {
        rowArr.splice(rowArr.indexOf(rowFour), 1);
      }
      if (rowFive.length < 1) {
        rowArr.splice(rowArr.indexOf(rowFive), 1);
      }
      if (rowSix.length < 1) {
        rowArr.splice(rowArr.indexOf(rowSix), 1);
      }
      if (rowSeven.length < 1) {
        rowArr.splice(rowArr.indexOf(rowSeven), 1);
      }

      var randRow = Math.floor(Math.random() * rowArr.length)

      //where the computer places its chip
      if (rowArr[randRow] === rowOne) {
        if (rowOne.length > 0) {
          $(rowOne[rowOne.length - 1]).addClass("red");
          rowOne.splice(rowOne.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowTwo) {
        if (rowTwo.length > 0) {
          $(rowTwo[rowTwo.length - 1]).addClass("red");
          rowTwo.splice(rowTwo.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowThree) {
        if (rowThree.length > 0) {
          $(rowThree[rowThree.length - 1]).addClass("red");
          rowThree.splice(rowThree.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowFour) {
        if (rowFour.length > 0) {
          $(rowFour[rowFour.length - 1]).addClass("red");
          rowFour.splice(rowFour.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowFive) {
        if (rowFive.length > 0) {
          $(rowFive[rowFive.length - 1]).addClass("red");
          rowFive.splice(rowFive.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowSix) {
        if (rowSix.length > 0) {
          $(rowSix[rowSix.length - 1]).addClass("red");
          rowSix.splice(rowSix.indexOf(this), 1);
        }
      } else if (rowArr[randRow] === rowSeven) {
        if (rowSeven.length > 0) {
          $(rowSeven[rowSeven.length - 1]).addClass("red");
          rowSeven.splice(rowSeven.indexOf(this), 1);
        }
      }
      madeMove = true;
    }
    checkForLoss();
    checkForTie();
  };

  function checkForWin() {

    for (var i = 0; i < 42; i++) {

      if ($(check[i]).hasClass("black") && $(check[(i + 5)]).hasClass("black") && $(check[(i + 10)]).hasClass("black") && $(check[(i + 15)]).hasClass("black")) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          win = true;
          console.log("forward")
        }
      } else if ($(check[i]).hasClass("black") && $(check[(i + 7)]).hasClass("black") && $(check[(i + 14)]).hasClass("black") && $(check[(i + 21)]).hasClass("black")) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          win = true;
          console.log("back")
        }
      } else if ($(check[i]).hasClass("black") && $(check[(i + 6)]).hasClass("black") && $(check[(i + 12)]).hasClass("black") && $(check[(i + 18)]).hasClass("black")) {
        win = true;
        console.log("horizontal")
      } else if ($(check[i]).hasClass("black") && $(check[(i + 1)]).hasClass("black") && $(check[(i + 2)]).hasClass("black") && $(check[(i + 3)]).hasClass("black")) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          win = true;
          console.log("vertical")
        }
      }
      madeMove = false;
    }

    if (win === true) {
      alert("win");
      clearBoard();
      playerWin++;
      $(".player").addClass("number");
      $(".player").text(playerWin);
    }

  };

  function checkForLoss() {

    for (var i = 0; i < 42; i++) {

      if ($(check[i]).hasClass("red") && $(check[(i + 5)]).hasClass("red") && $(check[(i + 10)]).hasClass("red") && $(check[(i + 15)]).hasClass("red")) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          loss = true;
          console.log("forward")
        }
      } else if ($(check[i]).hasClass("red") && $(check[(i + 7)]).hasClass("red") && $(check[(i + 14)]).hasClass("red") && $(check[(i + 21)]).hasClass("red")) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          loss = true;
          console.log("back")
        }
      } else if ($(check[i]).hasClass("red") && $(check[(i + 6)]).hasClass("red") && $(check[(i + 12)]).hasClass("red") && $(check[(i + 18)]).hasClass("red")) {
        loss = true;
        console.log("horizontal")
      } else if ($(check[i]).hasClass("red") && $(check[(i + 1)]).hasClass("red") && $(check[(i + 2)]).hasClass("red") && $(check[(i + 3)]).hasClass("red")) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          loss = true;
          console.log("vertical")
        }
      }
    }

    if (loss === true) {
      alert("You Lose");
      clearBoard();
      computerWin++;
      $(".computer").addClass("number");
      $(".computer").text(computerWin);
    }

  };

  function checkForTie() {
    if (win === false && loss === false && rowOne.length === 0 && rowTwo.length === 0 && rowThree.length === 0 && rowFour.length === 0 && rowFive.length === 0 && rowSix.length === 0 && rowSeven.length === 0) {
      alert("Try Again!");
      tie++;
      clearBoard();
      $(".ties").addClass("number");
      $(".ties").text(tie);
    }

  };

  function clearBoard() {
    $(".hole").removeClass("black");
    $(".hole").removeClass("red");
    win = false;
    loss = false;
    rowOne = jQuery.makeArray(elemsOne);
    rowTwo = jQuery.makeArray(elemsTwo);
    rowThree = jQuery.makeArray(elemsThree);
    rowFour = jQuery.makeArray(elemsFour);
    rowFive = jQuery.makeArray(elemsFive);
    rowSix = jQuery.makeArray(elemsSix);
    rowSeven = jQuery.makeArray(elemsSeven);

  };

  function smartMove() {
    for (var i = 0; i < 42; i++) {
      //forward slash
      if ($(check[i]).hasClass("black") && $(check[(i + 5)]).hasClass("black") && $(check[(i + 10)]).hasClass("black") && !$(check[(i + 15)]).hasClass("black") && !$(check[(i + 15)]).hasClass("red") && madeMove === false) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          if ($(check[(i + 15) + 1]).hasClass("black") || $(check[(i + 15) + 1]).hasClass("red")) {
            $(check[(i + 15)]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 5)]).hasClass("black") && $(check[(i + 15)]).hasClass("black") && !$(check[(i + 10)]).hasClass("black") && !$(check[(i + 10)]).hasClass("red") && madeMove === false) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          if ($(check[(i + 10) + 1]).hasClass("black") || $(check[(i + 10) + 1]).hasClass("red")) {
            $(check[(i + 10)]).addClass("red")
            spliceIt();
            madeMove = true;
          }
        }
      }
      if ($(check[i]).hasClass("black") && !$(check[(i + 5)]).hasClass("black") && !$(check[(i + 5)]).hasClass("red") && $(check[(i + 10)]).hasClass("black") && $(check[(i + 15)]).hasClass("black") && madeMove === false) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          if ($(check[(i + 5) + 1]).hasClass("black") || $(check[(i + 5) + 1]).hasClass("red")) {
            $(check[(i + 5)]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      if (!$(check[i]).hasClass("black") && !$(check[i]).hasClass("red") && $(check[(i + 5)]).hasClass("black") && $(check[(i + 10)]).hasClass("black") && $(check[(i + 15)]).hasClass("black") && madeMove === false) {
        if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 && i !== 12 && i !== 13 && i !== 14 && i !== 18 && i !== 19 && i !== 20 && i !== 24 && i !== 25 && i !== 26) {
          if ($(check[(i) + 1]).hasClass("black") || $(check[(i) + 1]).hasClass("red")) {
            $(check[i]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      //back slash
      if (!$(check[i]).hasClass("black") && !$(check[i]).hasClass("red") && $(check[(i + 7)]).hasClass("black") && $(check[(i + 14)]).hasClass("black") && $(check[(i + 21)]).hasClass("black") && madeMove === false) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          if ($(check[(i) + 1]).hasClass("black") || $(check[(i) + 1]).hasClass("red")) {
            $(check[i]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      if ($(check[i]).hasClass("black") && !$(check[(i + 7)]).hasClass("black") && !$(check[(i + 7)]).hasClass("red") && $(check[(i + 14)]).hasClass("black") && $(check[(i + 21)]).hasClass("black") && madeMove === false) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          if ($(check[(i + 7) + 1]).hasClass("black") || $(check[(i + 7) + 1]).hasClass("red")) {
            $(check[(i + 7)]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 7)]).hasClass("black") && !$(check[(i + 14)]).hasClass("black") && !$(check[(i + 14)]).hasClass("red") && $(check[(i + 21)]).hasClass("black") && madeMove === false) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          if ($(check[(i + 14) + 1]).hasClass("black") || $(check[(i + 14) + 1]).hasClass("red")) {
            $(check[(i + 14)]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 7)]).hasClass("black") && $(check[(i + 14)]).hasClass("black") && !$(check[(i + 21)]).hasClass("black") && !$(check[(i + 21)]).hasClass("red") && madeMove === false) {
        if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !== 10 && i !== 11 && i !== 15 && i !== 16 && i !== 17 && i !== 21 && i !== 22 && i !== 23) {
          if ($(check[(i + 21) + 1]).hasClass("black") || $(check[(i + 21) + 1]).hasClass("red")) {
            $(check[(i + 21)]).addClass("red");
            spliceIt();
            madeMove = true;
          }
        }
      }
      //horizontal
      if (!$(check[i]).hasClass("black") && !$(check[i]).hasClass("red") && $(check[(i + 6)]).hasClass("black") && $(check[(i + 12)]).hasClass("black") && $(check[(i + 18)]).hasClass("black") && madeMove === false) {
        if(i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35 || i == 41){
            $(check[i]).addClass("red");
            spliceIt();
            madeMove = true;
          }else if ($(check[(i) + 1]).hasClass("black") || $(check[(i) + 1]).hasClass("red")){
           $(check[i]).addClass("red");
           spliceIt();
           madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && !$(check[(i + 6)]).hasClass("black") && !$(check[(i + 6)]).hasClass("red") && $(check[(i + 12)]).hasClass("black") && $(check[(i + 18)]).hasClass("black") && madeMove === false) {
        if(i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35 || i == 41){
          $(check[i + 6]).addClass("red");
          spliceIt();
          madeMove = true;
        }
        else if ($(check[(i + 6) + 1]).hasClass("black") || $(check[(i + 6) + 1]).hasClass("red")) {
          $(check[(i + 6)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 6)]).hasClass("black") && !$(check[(i + 12)]).hasClass("black") && !$(check[(i + 12)]).hasClass("red") && $(check[(i + 18)]).hasClass("black") && madeMove === false) {
        if(i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35 || i == 41){
          $(check[i + 12]).addClass("red");
          spliceIt();
          madeMove = true;
        }
        else if ($(check[(i + 12) + 1]).hasClass("black") || $(check[(i + 12) + 1]).hasClass("red")) {
          $(check[(i + 12)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 6)]).hasClass("black") && $(check[(i + 12)]).hasClass("black") && !$(check[(i + 18)]).hasClass("black") && !$(check[(i + 18)]).hasClass("red") && madeMove === false) {
        if(i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35 || i == 41){
          $(check[i + 18]).addClass("red");
          spliceIt();
          madeMove = true;
        }
        else if ($(check[(i + 18) + 1]).hasClass("black") || $(check[(i + 18) + 1]).hasClass("red")) {
          $(check[(i + 18)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      //vertical
      if (!$(check[i]).hasClass("black") && !$(check[i]).hasClass("red") && $(check[(i + 1)]).hasClass("black") && $(check[(i + 2)]).hasClass("black") && $(check[(i + 3)]).hasClass("black") && madeMove === false) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          $(check[i]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && !$(check[(i + 1)]).hasClass("black") && !$(check[(i + 1)]).hasClass("red") && $(check[(i + 2)]).hasClass("black") && $(check[(i + 3)]).hasClass("black") && madeMove === false) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          $(check[(i + 1)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 1)]).hasClass("black") && !$(check[(i + 2)]).hasClass("black") && !$(check[(i + 2)]).hasClass("red") && $(check[(i + 3)]).hasClass("black") && madeMove === false) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          $(check[(i + 2)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
      if ($(check[i]).hasClass("black") && $(check[(i + 1)]).hasClass("black") && $(check[(i + 2)]).hasClass("black") && !$(check[(i + 3)]).hasClass("black") && !$(check[(i + 3)]).hasClass("red") && madeMove === false) {
        if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && i != 15 && i != 16 && i != 17 && i != 21 && i != 22 && i != 23 && i != 27 && i != 28 && i != 29 && i != 33 && i != 34 && i != 35) {
          $(check[(i + 3)]).addClass("red");
          spliceIt();
          madeMove = true;
        }
      }
    }
  };

 function spliceIt() {

  if ($(rowOne[rowOne.length-1]).hasClass("red")) {
      rowOne.splice(rowOne.indexOf(this), 1);
    };
  if ($(rowTwo[rowTwo.length-1]).hasClass("red")) {
      rowTwo.splice(rowTwo.indexOf(this), 1);
    };
  if ($(rowThree[rowThree.length-1]).hasClass("red")) {
      rowThree.splice(rowThree.indexOf(this), 1);
    };
  if ($(rowFour[rowFour.length-1]).hasClass("red")) {
      rowFour.splice(rowFour.indexOf(this), 1);
    };
  if ($(rowFive[rowFive.length-1]).hasClass("red")) {
      rowFive.splice(rowFive.indexOf(this), 1);
    };
  if ($(rowSix[rowSix.length-1]).hasClass("red")) {
      rowSix.splice(rowSix.indexOf(this), 1);
    };
  if ($(rowSeven[rowSeven.length-1]).hasClass("red")) {
      rowSeven.splice(rowSeven.indexOf(this), 1);
    };
     
};

});