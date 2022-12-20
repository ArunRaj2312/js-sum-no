let a=parseInt(prompt("enter the length"));
let l=a.toString().length;
let b;
let c=0;
let i=1;
while(i<=l){
   b=a%10;
   a=(a-b)/10;
   c=c+b;
   i++;
}

document.write(c);