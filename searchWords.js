/*
დავალებები
5)let words = ["sky", "apple", "computer", "rhythm", "banana"];
შევამოწმოთ თუ არის ხმოვანი ასოები, ხმოვანიანი სიტყვები დატოვეთ მხოლოდ ერეიში. 
*/
let words = ["banana" , "apple" , "sky",  "computer", "rhythm", "killer", "yellow", "skylr"];
let i = 0
let newWords = []
const regex = /[aeiou]/;
while(i < words.length){
	if (words[i].search(regex) < 0){
    	words.splice(i, 1)
    }
  i++
}

console.log(words)