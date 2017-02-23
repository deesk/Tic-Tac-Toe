# Tic-Tac-reTro
[website][1]

[1]: https://deesk.github.io/Tic-Tac-Toe/ "Title"

This project was coded in jQuery, JavaScript, HTML and CSS.

## How game works

This is nine grid game. Which can be played by two player. 
I have assign all nine grid with one unique value from 1 to 9. Starting from top left. In following way,
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
There is 8 possible combination of this unique value to win a game. Where each combination include only three non repetitive numbers such as 123, 456, 789 and so on. 
So whenever players click each grid I record that value in player's array and check with each winning combination. If user combination matches with one of the value  in a particular winning combination then i give him one point. If all three values 
of winner combination matches with player combination then he/she wins. If doesn't then will be draw. 

### Features
- 9 grid game
- Live score update
- Repaly

### GUI Design
- Colors: I have choosed retro colors. from where game gets its Name  **Tic** **Tac** re**Tro**
- Fonts: Beside Arial i have chosen two google fonts.Called Fascinate Inline, Sancreek.

### Current Bottleneck
- Some how Draw is not functioning as I expected. Which is in first turn game is draw i does what its work by displaying the
  message and resetting game for new game . But after winning a game by any player, if next game gets draw doesn't display the
  message. Problem is most likely with my win boolean which somehow still stays true even game is draw. 
  Status : Still working on it to fix it.
- Once game is won by any play or its draw. Dialogue box pops out with message either anyone player won or it draw but still 
  player can still click grids which are in background. 
  Status: Still Working.
  
### Credits,
- Whatever I have accomplished in this Project so far, It wouldn't be possible without help of  our instructor DT, Kusan 
  and classmates 
  Last but not least my wife who keep me feeding and leaving me alone (even cockroaches were running around....(fictional))
  , so i can struggle with my Project. Kudos...

