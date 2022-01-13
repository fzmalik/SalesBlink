var button = document.getElementsByClassName("btn");

for (var i = 0 ; i < button.length; i++) {
   button[i].addEventListener('click' , response , false ) ;
}
const resp =[];
function response()
{
  if((this.value>=0 && this.value<10)||(this.value=="*"||this.value=="#"))
  {
    resp.push(this.value);
  }
  else if(this.value=="back")
  {
   resp.pop();
  }

  else if(this.value=="call")
  {
    alert("this button is for making call");
  }
  else if(this.value == "menu")
  {
    alert("this button is for menu or any other purpose");
  }


  var rep = "";
  for(var i=0;i<resp.length;i++)
  {
     rep = rep + resp[i];
  }
console.log(rep);
console.log(resp);
  document.getElementById("result").innerHTML = rep;
}
