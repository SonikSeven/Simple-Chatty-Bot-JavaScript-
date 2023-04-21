import * as readlineSync from 'readline-sync';

let name = readlineSync.question('What is your name? ');
console.log('Hello, ' + name + '!');


function greet(bot_name: string, birth_year: string) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

function remind_name() {
    console.log("Please, remind me your name.");
    let name = readlineSync.prompt();
    console.log("What a great name you have, " + name + "!");
}

function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(readlineSync.prompt());
    let rem5 = Number(readlineSync.prompt());
    let rem7 = Number(readlineSync.prompt());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(readlineSync.prompt());
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

function test() {
    console.log("Let's test your programming knowledge.");
    console.log("Which of the following programming languages is the oldest?");
    console.log("1. Java\n2. PHP\n3. Python\n4. JavaScript");
    let userAnswer = false;
    while (userAnswer === false) {
        if (Number(readlineSync.prompt()) == 3) {
            userAnswer = true;
        } else {
            console.log("Please, try again.");
        };
    };
}

function end() {
    console.log("Congratulations, have a nice day!");
}

function main() {
    greet("Adam", "2023");
    remind_name();
    guess_age();
    count();
    test();
    end();
}

main();
