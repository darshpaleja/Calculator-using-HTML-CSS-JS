let currentVal = ''

let buttons = document.querySelectorAll('.button')
// console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if(e.target.innerText == '='){
            currentVal = eval(currentVal)    
            document.querySelector('input').value = currentVal 
        }
        // console.log(e.target);
        else if(e.target.innerText == 'AC'){
            currentVal = ''
            document.querySelector('input').value = currentVal  
        }
        else if(e.target.innerText == 'DEL'){
            currentVal = currentVal.substring(0, currentVal.length-1)
            document.querySelector('input').value = currentVal  
        }
        else{
            currentVal = currentVal + e.target.innerText
            // console.log(currentVal);
            document.querySelector('input').value = currentVal 
        }
    })
})