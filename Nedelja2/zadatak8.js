let str = "";

for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        if (i + j >= 6) {
            str = str.concat("#");
        } else {
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}

console.log(str)

