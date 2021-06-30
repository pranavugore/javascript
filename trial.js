function vowelsAndConsonants(s) {
    var vowels = '';
    var consonants = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/g)) {
            vowels = vowels + s[i];
        }
        else {
            consonants = consonants + s[i];
        }
    }

    console.log(vowels);
    console.log(consonants);
}

const str = 'ajavascriptloops';

// vowelsAndConsonants(str);


function getCount(objects) {
    var count = 0;
    objects.forEach(element => {
        if (element['x'] === element['y']){ count++;}
    });
    return count;
}

const objects = [
    {x: 1, y:1},
    {x: 2, y:3},
    {x: 3, y:3},
    {x: 3, y:4},
    {x: 4, y:5}
];


console.log(getCount(objects));
