function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColor(alphabet);
}
function handleKeyboardButtonPress(event) {
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const alphabet = currentAlphabet.toLowerCase();
    const expectedElphabet = event.key;
    const expectedAlphabet = expectedElphabet.toLowerCase();
    if (expectedAlphabet === alphabet) { 
        setBackgroundColorNone(alphabet);
         
        const currentScoreById = document.getElementById('current-score');
        currentScoreById.innerText = getInnerValueInInteger('current-score')+1; 
        continueGame();
    }
    else{
        const currentScore = getInnerValueInInteger('current-score');


        if(currentLifeInnerText > 1){
            let decreaseCurrentLife = currentLifeParse - 1 ;
            currentLife.innerText = decreaseCurrentLife;
            
        }
        else{
            hideElementById('play-ground');
            showElementById('score-section');
            const getingFinalScore = document.getElementById('current-score').innerText;
            const showingFinalScore = document.getElementById('final-score');
            showingFinalScore.innerText = getingFinalScore ; 

            document.getElementById('play-again').addEventListener('click',function(){
                showElementById('play-ground');
            })
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);