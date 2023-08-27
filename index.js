
let firstcard = 6
let secondcard = 7
let sum = firstcard + secondcard +4 

function abc(){
if(sum<21){
    console.log('Do u want to draw another card!')
}
else if(sum === 21){
     console.log('wohooo ! u have got balckjack')    
}
else if(sum > 21) {
    console.log('u are out of the game')
}
}
abc()
