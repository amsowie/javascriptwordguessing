// Create a function that reverses a word

function reverseWord(word) {
    let newWord = [];
    let len = word.length;
    for (let i=len-1; i >= 0; i -= 1) {
        newWord.push(word[i]);
    }
    newWord = newWord.join('');
    return newWord;
}

reverseWord('banana');

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

 function reverseArray(words) {
    let newArray = [];
    for (let word of words) {
        newArray.push(reverseWord(word));
    }
    return newArray;
 }

// Create a function that returns a random word from an array

function randoWordo(words)  {
    index = Math.floor(Math.random() * (words.length));
    let randomWord = words[index];
    return randomWord;
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

arrayWords = ['silly', 'sad', 'sappy', 'snarky', 'stubby', 'stumpy'];

arrayOtherWords = reverseArray(arrayWords);
// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function mapMaker(wordArray)    {
    let wordGuesses = new Map();
    for (word of wordArray) {
        let tempWord = reverseWord(word);
        wordGuesses.set(tempWord, word);
    }
    return wordGuesses;   
}


// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.

function guessCheck(guess, word, wordGuesses)   {
    if (wordGuesses.has(guess)) {
        return word;
    }
    else    {
        console.log(`Sorry, incorrect. The word was ${word}.`);
    }
   
}

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
