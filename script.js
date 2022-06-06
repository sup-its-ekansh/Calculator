let screen = document.getElementById('value');
let ext= document.getElementById('EXTrow');
let buttons = document.querySelectorAll('.keys');
let string = ""

Array.from(buttons).forEach((button)=> {
  button.addEventListener('click', function(event) {
      if(event.target.innerHTML==="="){
        try{
          string=eval(string);
          screen.value=string;
          
        }
        catch(error){
          screen.value="ERROR"
        }        
      }
      else if(event.target.innerHTML==="DEL"){
        string=screen.value.slice(0,-1)
        
        screen.value= string
        
      }
      
      else if (event.target.innerHTML==="AC"){
        string=""
        screen.value= string
      }
      else if(event.target.innerHTML==="SINE"){
        string+= Math.sin(string)
      }
      else if(event.target.innerHTML==='X'){
        string+='*'
        screen.value= string
      }
      else if (event.target.innerHTML == "SIN") {
        var x = eval(screen.value);
        x = x * Math.PI / 180;
        screen.value = Math.sin(x);
        string= screen.value
        
      }
      else if(event.target.innerHTML==="EXT"){
        if(ext.style.display==='none'){
          ext.style.display= "inline"         
        }
        else{
          ext.style.display= "none"
          
        }
        
      }
      else{
        string+=event.target.innerHTML
        screen.value= string;
        
      }

  })
})

