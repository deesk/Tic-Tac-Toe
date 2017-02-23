console.log("Tic Tac Toe");

var allPatterns = [
  {winningPatterns : [
    [1,2,3] , [4,5,6] , [7,8,9] , [1,4,7] , [2,5,8] , [3,6,9] , [1,5,9] , [3,5,7] ]},
  {patterns : [] , name: "Player One" },
  {patterns : [] , name: "Player Two" }
]
var winPattern = allPatterns[0].winningPatterns;
var playerOne = allPatterns[1];
var playerTwo = allPatterns[2];
var win = false;

// this adds value form 1 to 9 to all 9 grids
var setPatternToGrid = function (){

  var grid = $('.grid');

      for(var i = 0 ; i < grid.length ; i++){
      grid[i].value = i + 1 ;
    }
}

var playAgainDilogBox = function(win , player){

    var resetGame = function(){

    playerOne.patterns.splice(0 , playerOne.patterns.length -1 );
    playerOne.patterns.pop();
    playerTwo.patterns.splice(0 , playerTwo.patterns.length -1);
    playerTwo.patterns.pop();

    $('.grid').removeClass('playerOne playerTwo');
    $('.playAgain').remove();

  }

    $('<div/>', {
      class: 'playAgain'
    }).appendTo('.main');

    $('.playAgain').fadeIn('slow');

    $('.playAgain').append('<p>' , $('<button class="playAgain-btn"/>').html('Play Again'));


    $('.playAgain-btn').on('click' , function(event){
        resetGame();
        $('.playAgain').fadeOut('slow');

    });


    if (win === true){
          $('.playAgain > p').html(player.name + ' Wins');

    }else {
          $('.playAgain > p').html('Draw');
    }

}

var checkWinPatternMatch = function(player){

    $.each(winPattern, function(index, element){

        var count = 0;

        $.each(element, function(index, element){

            for(var i = 0; i < player.patterns.length; i++){
  console.log("P: " + player.patterns[i] + "--" + "E: " + element);
                if(player.patterns[i] === element){

                    count++;

                    if(count >= 3){

                      win = true;
                      playAgainDilogBox(win, player );

  console.log("              count inside win" + count)
                      break;

                    }
  console.log("-----------count: " + count);
                }
            }

          })
  console.log("OUT OF  3------------------ ");

      })

}

var draw = function(playerOne, playerTwo, player){

  var  totalPlayersPatterns = playerOne.patterns.length + playerTwo.patterns.length

    if( (totalPlayersPatterns === 9 ) && (win === false)){
            playAgainDilogBox(win, player);
    }
}

var playGame = function(){

   setPatternToGrid();

    var currentPlayer = playerOne;  //player one first turn

    $('.grid').on('click' , function(event){
    // alert('grid clicked');

    var currentGrid = $(this);

    if(currentGrid.hasClass('playerOne') || currentGrid.hasClass('playerTwo')){
      // do nothing as current grid has already been selected

    }else {
      if(currentPlayer === playerOne){

        currentGrid.addClass('playerOne');
        // recording patterns of each player
        currentPlayer.patterns.push(this.value);

        checkWinPatternMatch(currentPlayer);
        draw(playerOne, playerTwo, currentPlayer);

        currentPlayer = playerTwo;

      }else {

        currentGrid.addClass('playerTwo');

        // recording patterns of each player
        currentPlayer.patterns.push(this.value);

        checkWinPatternMatch(currentPlayer);
        draw(playerOne, playerTwo, currentPlayer);

        currentPlayer = playerOne;


      }

    }


  })
}

playGame();
