// Q3. Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5

const replaceVowel = (str)=>{
    const newString = str.split('').map((word)=>{
        return word==='a'? '1':(word==='e'?'2':(word==='i'?'3':(word==='o'?'4':(word==='u'?'5':word))));
    })
   return newString.join('');
}
console.log(replaceVowel('karachi'));
console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));