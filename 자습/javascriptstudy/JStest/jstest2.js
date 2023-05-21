const meetAt = (year, month, day) => {
  const arr = [year, month, day];
  for (i = 0; i < 3; i++) {
    if (arr[i] === undefined) {
      if (i === 1) {
        return `${year}년`;
      } else if (i === 2) {
        return `${year}년 ${month}월`;
      }
    }
  }
  return `${year}/${month}/${day}`;
};

console.log(meetAt(2020, 5, 29));
