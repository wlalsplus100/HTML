function solution(price) {
  let answer;
  if (price >= 500000) answer = Math.floor(price - price * 0.2);
  else if (price >= 300000) answer = Math.floor(price - price * 0.1);
  else if (price >= 100000) answer = Math.floor(price - price * 0.05);
  return answer;
}

console.log(solution(580000));
