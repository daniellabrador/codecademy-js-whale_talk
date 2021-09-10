let input = "I can sing all day, but I can be easily tired. So, I can't literally do that."

input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let resultArray = [];

for (let i=0; i<input.length; i++){
  for (let j=0; j<vowels.length; j++){
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e'){
    resultArray.push('e');
  }
  if (input[i] === 'u'){
    resultArray.push('u');
  }
}

console.log(resultArray.join('').toUpperCase());