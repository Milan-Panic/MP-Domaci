var br1 = 18;
var br2 = 17;
var br3 = 16;
var max;
function maxBroj(a = 0, b = 0, c = 0) {

    if (a > b && a > c) {
        console.log("Br1 je najveci broj");
        max = a;
    }
    else if (b > c && b > a) {
        console.log("Br2 je najveci broj");
        max = b;
    }
    else {
        console.log("Br3 je najveci broj");
        max = c;
    }

    console.log("Max je: " + max);

}
maxBroj(br1, br2, br3);