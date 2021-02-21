'use strict';

let maxRound = 25;
let Round = 0;
let displaybutton = document.getElementById('button');

let leftImageElement = document.getElementById('leftImage');
let middleImageElement = document.getElementById('middleImg');
let rightImageElement = document.getElementById('rightImage');


let arrOfObjects = [];

function BusMall(name, source){
    this.name = name;
    this.source = source;
    this.numOfclicks = 0;
    this.seens = 0;
    arrOfObjects.push(this);
}


new BusMall('bag','img/bag.jpg');
new BusMall('banana','img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots','img/boots.jpg');
new BusMall('breakfast','img/breakfast.jpg');
new BusMall('bubblegum','img/bubblegum.jpg');
new BusMall('chair','img/chair.jpg');
new BusMall('cthulhu','img/cthulhu.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon','img/dragon.jpg');
new BusMall('pen','img/pen.jpg');
new BusMall('pet-sweep','img/pet-sweep.jpg');
new BusMall('scissors','img/scissors.jpg');
new BusMall('shark','img/shark.jpg');
new BusMall('sweep','img/sweep.png');
new BusMall('tauntaun','img/tauntaun.jpg');
new BusMall('unicorn','img/unicorn.jpg');
new BusMall('usb','img/usb.gif');
new BusMall('water-can','img/water-can.jpg');
new BusMall('wine-glass','img/wine-glass.jpg');

// console.log(arrOfObjects);

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
function renderTwoRandomImages(){
    leftImageIndex = generateRandomIndex(); 
    rightImageIndex = generateRandomIndex(); 
    middleImageIndex =  generateRandomIndex();  

    
    while(leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || middleImageIndex===rightImageIndex){
        leftImageIndex = generateRandomIndex(); 
        middleImageIndex =  generateRandomIndex();  

    }

    arrOfObjects[rightImageIndex].seens++ ;
    
    arrOfObjects[leftImageIndex].seens++ ;

    arrOfObjects[middleImageIndex].seens++ ;
                                         
    leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source); 
    middleImageElement.setAttribute('src', arrOfObjects[middleImageIndex].source);
    rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);

                                              
}


renderTwoRandomImages();


function generateRandomIndex(){


     let randomIndex = Math.floor(Math.random() * arrOfObjects.length); 
     return randomIndex;
}


displaybutton.addEventListener('click',displaylist)
leftImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);
middleImageElement.addEventListener('click', handleClicking);




function handleClicking(event){
    Round++;
    
       
    if(Round <= maxRound){
        if(event.target.id === 'leftImage'){
            arrOfObjects[leftImageIndex].numOfclicks++;

        }
        else if(event.target.id === 'rightImage' ){
            arrOfObjects[rightImageIndex].numOfclicks++;
           
        }
        else if (event.target.id === 'middleImg' ) {
            arrOfObjects[middleImageIndex].numOfclicks++;
           
        }

        renderTwoRandomImages();
        console.log(arrOfObjects);
    }
    else{

        leftImageElement.removeEventListener('click', handleClicking);
        middleImageElement.removeEventListener('click', handleClicking);  
        rightImageElement.removeEventListener('click', handleClicking);  
    }

}


let button = document.getElementById('button');
button.addEventListener('submit', displaylist)


function displaylist (event) {

if(Round >= 25){

    let unorderdList = document.getElementById('report');
    let li;
    for(let i = 0 ; i < arrOfObjects.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);
        li.textContent = ` ${arrOfObjects[i].name} had ${arrOfObjects[i].numOfclicks} Votes and was seen ${arrOfObjects[i].seens} times..`

        button.removeEventListener('click', displaylist);  

}

    }
}