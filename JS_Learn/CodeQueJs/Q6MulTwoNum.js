// Wap to multiply two number without using multiply sign in JS

function multiplay(a, b) {
  let answer = a;
  for (let i = 0; i < b - 1; i++) {
    answer += a;
  }
  return answer;
}
console.log(multiplay(5, 3));
//15
