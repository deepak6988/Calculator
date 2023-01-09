console.log("running");
let string="";
let back="";
let buttons=document.querySelectorAll('.button');
function backspace(){
   back="i";
}
Array.from(buttons).forEach(function(element){
    element.addEventListener('click',function(e){
        console.log(e.target.innerHTML);
        if(string=='0')
        string="";
        if(e.target.innerHTML=='='){
            
            if(string.length!=0){
        string=eval(string);
        document.querySelector('input').value=string;
        console.log(typeof(string));
        }
    }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }    
        else if(back=='i'){
            console.log("call");
            if(typeof(string)== 'number'){
                string=string.toString();
            }
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
            back="";
        }    
        else if(e.target.innerHTML=='X'){
            string=string+'*';
            document.querySelector('input').value=string;
            back="";
        }    
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;

        }
    })
})