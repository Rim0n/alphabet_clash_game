function hideElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}
function showElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}
function setBackgroundColor(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
    element.classList.add('text-black');
}
function setBackgroundColorNone(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('bg-orange-400');
    element.classList.remove('text-black');
}
function getInnerValueInInteger(elementid){
    const element = document.getElementById(elementid);
    const elementText = element.innerText;
    const elementIntoInteger = parseInt(elementText);
    return elementIntoInteger; 
}

function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    

    const randomNumber = Math.random()*25;
    const index =  Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

