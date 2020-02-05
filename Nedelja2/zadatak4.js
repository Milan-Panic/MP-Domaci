let counter = 0;
let i = 5;
while (true) {
    if (i % 5 == 0) {
        console.log(i);
        counter += 1;
    }
    if (counter == 1000)
        break;
    i++;

}