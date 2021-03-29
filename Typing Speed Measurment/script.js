let btn1=document.getElementById('btn');
let heading=document.querySelector('#heading');
var startTime,endTime,date1,date2;
let textara=document.getElementById('texttt');
 let msg=document.getElementById('pera');

 msg.style.color='orange';
 const array=["Aesop Was one of the great witer in the world and Sikandar was the greatest wariour in The world"
,"Hellow there are fourr concent of oops first is abstraction second is inheritance third is encapsulation and last polimorphism",
"Python programming speed is less then the java progrmming speed",
"C is not a object oriented programming languge cpp is a object oriented programming language"];

var totalTime;

const function1=()=>{
     

let randomNumber=Math.floor(Math.random()*array.length);
if(btn1.innerText=="Button1")
{ textara.value=""; 
    textara.disabled=false;
 btn1.innerText="Done";
 msg.innerHTML=array[randomNumber];
 date1=new Date();
 startTime=date1.getTime();
 console.log(startTime);
heading.style.color='lightgoldenrodyellow';
heading.innerText=`${startTime}`;
}
else{
    
  textara.disabled=true;
    btn1.innerText="Button1";
    date2=new Date();
    endTime=date2.getTime();
    console.log(endTime);
startTime=heading.innerText;
     totalTime=((endTime-parseFloat(startTime))/1000);
   
     let totalStr=textara.value;
    let wordStoredStringArray1=totalStr.split(" ");
let words=wordStoredStringArray1.length;
  //   math.floor se number only intiger hi aayega
   let speed=Math.floor((words/totalTime)*60); 
  
   let wordStoredStringArray2=msg.innerText.split(" ");
   let count=0; 
   for(let i=0;i<wordStoredStringArray2.length;i++)
   {
      if(wordStoredStringArray2[i]==wordStoredStringArray1[i])
      {
     count++;
      }
  
   }
   console.log(count);
   console.log(wordStoredStringArray1);
   console.log(wordStoredStringArray2);
   heading.style.color='black';
    heading.innerText=`your typing speed is ${speed} words per minuts and ${count} words is correct from ${wordStoredStringArray2.length}`;

}


}