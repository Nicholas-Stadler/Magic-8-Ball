let userName = "Nic";

userName ? console.log(`Hello, ${userName}!`) 
: console.log(`Hello!`); 

let userQuestion = "Will I be able to fly today";

userQuestion ? console.log(`${userName}, your question is: ${userQuestion} `)
: console.log(`${userName}, there is no question :(`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eighrball = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break
}

console.log(`The magic 8-Ball says: ${eightBall}`)

