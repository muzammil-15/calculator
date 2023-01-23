let string = '';

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            string = eval(string) + "  " + "Ans";
            document.querySelector('.input').value = string;
        }else if(e.target.innerText == 'C'){
            string = "";
            document.querySelector('.input').value = "";
        }
        else{     
        string = string + e.target.innerText;
        document.querySelector('.input').value = string;
        }
    })
})