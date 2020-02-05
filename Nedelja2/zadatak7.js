let n = 5;
var arej = new Array();
for (let i = 1; i <= n; i++) {        
     for (let j = 1; j <= i; j++) {
         arej +=  '#' + ' ';               
     } 
     console.log(arej);
     arej = '';
     
}