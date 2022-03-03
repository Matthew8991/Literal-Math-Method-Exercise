let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

console.log(warmHugs.toUpperCase());

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";

beenImpaled = beenImpaled.slice(18, 36);
console.log(beenImpaled);

let dotDotDot = "...";

let skullBones = `I don't have a skull ${dotDotDot} or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber++;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

console.log(" Let It Go!".toUpperCase().repeat(3).trim());

let reindeers = "Reindeers are better than people.";

console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));

let squareRoot = Math.sqrt(2);
console.log(squareRoot);

let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);