
//3)let numbers = [4, -3, 7, -2, 0, 9, -8, 6]; ამ მასივში მოვძებნოთ ლუწი რიცხვები 
// და გავაკეთოთ ცალკე მასივი უარყოფითი ლუწებისთვის და დადებითი ლუწებისთვის. 
// ორივე დავლოგოთ.
let numbers = [4, -3, 7, -2, 0, 9, -8, 6];
let counter =0
let i = 0
let negatives=[]
let positives=[]
while(counter!=numbers.length){
	if(numbers[i]%2==0 && numbers[i]<0){
    	negatives.push(numbers[i])
    }else if(numbers[i]%2==0 && numbers[i]>0){
    	positives.push(numbers[i])
    }
  i+=1
  counter+=1
}

console.log(negatives, positives)
