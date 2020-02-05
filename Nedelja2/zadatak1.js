let a = 3;
let b = 2;
let znak = 'pow'; //+, -, *, /, %, pow
switch (znak) {
    case '+':
        console.log(`Rezultat sabiranja je: ${a + b}`);
        break;
    case '-':
        console.log(`Rezultat oduzimanja je: ${a - b}`);
        break;
    case '*':
        console.log(`Rezultat mnozenja je: ${a * b}`);
        break;
    case '/':
        console.log(`Rezultat deljenja je: ${a / b}`);
        break;
    case '%':
        console.log(`Moduo je: ${a % b}`);
        break;
    case 'pow':
        console.log(`Rezultat stepenovanja je: ${a ** b}`);
        break;

    default:
        console.log('Niste uneli znak operacije!');

        break;
}