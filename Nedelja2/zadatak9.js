let n = 5;
let i = 0;

while(i <= n){
    let row = '';
    for(; i <= n;){
        for(j = 1; j <= n - i; j++){
            row += ' '
        }
        for(let k = 0; k <= n - j; k++){
            row += '#'
        }
        break;
    }

    row += ' ';

    for(; i <= n;){
        for(let j = 0; j < i; j++){
            row += '#'
        }
        break;
    }

    console.log(row);

    i++;
}