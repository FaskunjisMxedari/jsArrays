// 4) let words = ["apple", "banana", "abacus", "kiwi", "avocado", "cat", "an", "zebra"];
// ამ მასივიდან ამოვარჩიოთ და ახალი მასივი გავაკეთოთ ყველა იმ სიტყვისთვის რომელიც იწყება a ზე და ასოების რაოდენობა 3ზე მეტია.
let words = ["apple", "banana", "abacus", "kiwi", "avocado", "cat", "an", "zebra"];
let i = 0
let newWords = []
while(i!=words.length){
	if (words[i].charAt(0) == "a" && words[i].length>3){
    	newWords.push(words[i])
    }
  i++
}

console.log(newWords)