function rollDice(){
    let numOfDice =document.querySelector('.numOfDice').value;
    let diceResult=document.querySelector('.diceResult');
    let diceImg=document.querySelector('.diceImg');

    let values=[];
    let images=[];

    for (let i=0; i<numOfDice; i++){
        let value=Math.floor(Math.random()*6)+1
        values.push(value);
        images.push(`<img src="./dice_img/${value}.png">`);
    }
    diceResult.innerHTML = `骰子: ${values.join(', ')}`
    diceImg.innerHTML=images.join(' ')
}