let score = JSON.parse(localStorage.getItem('score'))
      

      if(!score) {
        score = {
          Wins : 0,
          Losses : 0,
          Ties : 0
        }
      }
      updateScore()
     
      function playGame(playerMove){
        const computerMove = pickComputerMove();
        
        let result = '';

        if (playerMove === 'scissors') {
          if(computerMove === 'rock')
          {
            result = 'you lose'
          }
          else if (computerMove === 'paper')
          {
            result = 'you win'
          }
          else if (computerMove === 'scissors')
          {
            result = 'tie'
          }

        }

      else if (playerMove === 'rock'){
          if(computerMove === 'rock')
          {
            result = 'tie'
          }
          else if (computerMove === 'paper')
          {
            result = 'you lose'
          }
          else if (computerMove === 'scissors')
          {
            result = 'you win'
          }
      }
      
      else if (playerMove === 'paper'){
          if(computerMove === 'rock')
          {
            result = 'you win'
          }
          else if (computerMove === 'paper')
          {
            result = 'tie'
          }
          else if (computerMove === 'scissors')
          {
            result = 'you lose'
          }
      }

        if (result === 'you win'){
            score.Wins += 1;
        }
        else if (result === 'you lose'){
            score.Losses += 1;
        }
        else if (result === 'tie'){
            score.Ties += 1;
        }

    localStorage.setItem('score',JSON.stringify(score))
    updateScore()
    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML =`<p class="js-moves">You <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">Computer
    </p>`

//     alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}
//  Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`)
    

 }
    function updateScore(){
        document.querySelector('.js-score').innerHTML =  `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`

    }
       
    function pickComputerMove(){
      const randomNumber = Math.random()
      let computerMove = ''

      if(randomNumber >= 0 && randomNumber < 1/3)
      {
        computerMove = 'rock'
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3)
      {
        computerMove =  'paper'
      }
      else if (randomNumber >= 2/3 && randomNumber < 1)
      {
        computerMove = 'scissors'
      }
      return computerMove;
    }