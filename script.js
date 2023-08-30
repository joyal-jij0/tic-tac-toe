const ClickModule = (function(){
    let click = 0;
    const Score = new Array(9);

    function handleClick(button){
        button.addEventListener("click", () => {
            if (button.innerHTML === ""){
                if(click % 2 === 0) {
                    button.innerHTML = "X";
                } else {
                    button.innerHTML = "O";
                }
                adding(button, button.id);

                console.log(Score);
                click++;
                winner(Score);
            }
        });
    }

    function initialize(){
        const buttons = document.querySelectorAll(".button");
        buttons.forEach(button => {
            handleClick(button);
        });
    }

    function adding(button,index){
        Score[index] = button.innerHTML;
    }

    function winner(Score){
      const winningPatterns = [
          [0,1,2],[3,4,5],[6,7,8],
          [0,3,6],[1,4,7],[2,5,8],
          [0,4,8],[2,4,6]
      ];

      for(const pattern of winningPatterns){
          const[a,b,c] = pattern;
          if (Score[a] != undefined && Score[a] === Score[b]&& Score[a] === Score[c]){
              alert("Winner Winner Chicken Dinner");
              return;
          }
      }

    }
    return{
        initialize: initialize
    };
})();

ClickModule.initialize();