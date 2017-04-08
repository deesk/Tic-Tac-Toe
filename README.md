# Tic-Tac-reTro
**website:** &nbsp; https://deesk.github.io/Tic-Tac-reTro

**This project was coded in jQuery, JavaScript, HTML and CSS**

## How game works

This is nine grid game. Which can be played by two players.
All nine grids are assigned with one unique value form 1 to 9. Starting from top left. In following way, <br>

  1 &nbsp;&nbsp;| &nbsp;2 &nbsp;|&nbsp; 3 <br>
----|-----|---- <br>
  4 &nbsp;&nbsp;| &nbsp;5 &nbsp;|&nbsp; 6 <br>
----|-----|---- <br>
7 &nbsp;&nbsp;| &nbsp;8 &nbsp;|&nbsp; 9 <br>


There is 8 possible combination of this unique value to win a game. Where each combination include only three non repetitive numbers such as 123, 456, 789 and so on.
So whenever players click each grid I record that value in player's array and check with each winning combination. If user combination matches with one of the value  in a particular winning combination then i give him one point. If all three values
of winner combination matches with player combination then he/she wins. If doesn't then will be draw.

### Features
- Can be played beteen two players
- 9 grids game
- Live score update
- Repaly

### GUI Design
- **Colors:** &nbsp; I have choosed retro theme for colors from where game gets its Name **Tic** **Tac** re**Tro**
- **Fonts:**  &nbsp; Two google fonts.Called Fascinate Inline, Sancreek.

### Challanges (solved)
- Some how Draw was not functioning as I expected. When game is draw in frist turn its work( by displaying the
  message and resetting game for new game) . But after winning a game by any player, if next game gets draw doesn't display     the message. Problem could be with win boolean which somehow still stays true even game is draw.

  **Status** : Still working on it (fixed).
- Once game is won by any play or its draw. Dialogue box pops out with message  player won or its draw but
  player can click grids which are in background.
  Status: Still Working (fixed).
