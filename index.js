let screen=document.getElementById('screen');   
//screen= input screen 
buttons=document.querySelectorAll('button');
let screenValue = '';
//screenValue= string
for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttonText = e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText=='X'){
            buttonText ='*';
            screeValue +=buttonText;
            screen.value =screenValue;
            //screen.value is the value of screen
        }
        else if(buttonText =='C'){
            screenValue ="";
            screen.value =screenValue;
        }
        else if(buttonText =='='){
            screen.value=eval(screenValue)
        }
        else{
            screenValue += buttonText;
            screen.value= screenValue;
        }

    })
}