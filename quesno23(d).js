let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    Jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmerjoke"
};
let programming=object.assign({},programming,{isFun:'true'});
console.log(new programming);