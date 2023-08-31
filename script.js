const ClickModule = (function(){
    let click = 0;
    const Score = new Array(9);

    function result(content){
        const container = document.querySelector(".container");
        const dialog = document.createElement('dialog')
        const box = document.createElement('div')
        dialog.id = "dialog";
        box.classList.add('box');
        box.innerHTML=content;
        container.appendChild(dialog);
        dialog.appendChild(box);
        dialog.showModal();

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

        let hasWinner = false;

        for(const pattern of winningPatterns){
            const[a,b,c] = pattern;
            if (Score[a] !== undefined && Score[a] === Score[b]&& Score[a] === Score[c]){
                result("Winner Winner Chicken Dinner");
                hasWinner = true;
                break;
            }
        }

        if(!hasWinner){
            let isDraw = true;
            for(let i = 0; i<Score.length; i++){
                if(Score[i] === undefined){
                    isDraw = false;
                    break;
                }
            }
            if (isDraw){
                result("Its a draw");
            }
        }
    }

    function handleClick(button){
        console.log("click");
            if (button.innerHTML === ""){
                if(click % 2 === 0) {
                    button.innerHTML = "X";
                } else {
                    button.innerHTML = "O";
                }
                adding(button, button.id);
                button.removeEventListener("click",clickHandler);
                console.log(Score);
                click++;
                winner(Score);
            }
    }

    function clickHandler(){
        handleClick(this);
    }

    function initialize(){
        const buttons = document.querySelectorAll(".button");
        buttons.forEach(button => {
            button.addEventListener("click", clickHandler);
        });
    }




    return{
        initialize: initialize
    };
})();

ClickModule.initialize();