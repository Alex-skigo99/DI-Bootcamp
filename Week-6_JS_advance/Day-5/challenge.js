// Instructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help
// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams
// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

const data = ['Astronomer', 'Moon starer', 'School master', 'The classroom', 'The Morse Code', 'Here come dots', 'War', 'Bar'];

function isAnagram(s1, s2) {
    s1 = s1.replaceAll(' ', '').toLowerCase();
    s2 = s2.replaceAll(' ', '').toLowerCase();
    console.log(s1, s2)
    if (s1.length !== s2.length) return false;
    a1 = [...s1].sort();
    a2 = [...s2].sort();
    console.log(a1);
    console.log(a2);
    for (let i = a1.length-1; i > -1; i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
};

let l = data.length;
for (let i = 0; i < l; i += 2) {
    console.log(`${data[i]} & ${data[i + 1]} is an anagram? ${isAnagram(data[i], data[i + 1])}`)
};
