function solve(words) {

    console.log(words.match(/[A-z0-9]+/g).join(", ").toUpperCase());

}
solve('Hi, how are you?');
solve('hello');