var img1 = document.getElementsByClassName("img1")
var img2 = document.getElementsByClassName("img2")

const generateRandomNumber = () => {
    var number = Math.random();
    number  = Math.floor(number * 6 + 1);
    return number;
}

const randomNumber1 = generateRandomNumber()
console.log(randomNumber1)

const randomNumber2 = generateRandomNumber()
console.log(randomNumber2)

const verifcateNumber = (randomNumber, img) =>{
    if(randomNumber === 1){
        img[0].setAttribute("src","./images/dice1.png") 
    }
    else if(randomNumber === 2){
        img[0].setAttribute("src","./images/dice2.png") 
    }
    else if(randomNumber === 3){
        img[0].setAttribute("src","./images/dice3.png") 
    }
    else if(randomNumber === 4){
        img[0].setAttribute("src","./images/dice4.png") 
    }
    else if(randomNumber === 5){
        img[0].setAttribute("src","./images/dice5.png") 
    }
    
}

verifcateNumber(randomNumber1, img1)
verifcateNumber(randomNumber2, img2)


var h1Text =  document.querySelector("h1")
console.log(h1Text.innerHTML )

if(randomNumber1 > randomNumber2){
    h1Text.innerHTML = "Player 1 Wins🚩"
}
else if (randomNumber1 < randomNumber2){
    h1Text.innerHTML = "🚩Player 2 Wins"
}
else{
    h1Text.innerHTML = "None wins"
}