function myfuc()
{

let s = document.getElementById('cls').value ;
let b = document.getElementById('boards').value;
let l = document.getElementById('lang').value;
let bo1 = document.getElementById('b1').value;
let bo2 = document.getElementById('b2').value;
let bo3 = document.getElementById('b3').value;
let l1 = document.getElementById('l1').value;
let l2 = document.getElementById('l2').value;
if(s <1 || s>12)
{
    alert("No help for these classes");
}
else{
    
   if(b == bo1 && l == l1 )
   {
      // let  a = document.createElement('a');
      // a.href = "https://www.learncbse.in/";
      // a.innerText = "Click here " ;
       let i =  document.getElementById('image').setAttribute("src" , "data:image/png;base64,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")
       if( s == 12)
       { 
       document.getElementById('link').setAttribute("href" ,"https://www.learncbse.in/ncert-solutions-for-class-12/" );
       document.getElementById('link').textContent +=  "\n " + "click here" +"\n"
       document.getElementById('utkarsh').innerHTML += 
      " \n You selected " + " class = " + s + " board = "
      + b + " and language = " + l ;   
       }
       else if( s== 11)
       {
         document.getElementById('link').setAttribute("href" , "https://www.learncbse.in/ncert-solutions-for-class-11/" )  
       
        document.getElementById('link').textContent += "\n" + "Click here " ;
        document.getElementById('utkarsh').innerHTML +=
      "\n " + " You selected " + " class = " + s + " board = "
      + b + " and language = " + l ;
       }
     // document.body.append(a);
   }
}

}