function minArray(numbers: number[]): number {
  let i = 0,
    j = numbers.length - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (numbers[mid] > numbers[j]) {
      i = mid + 1;
    } else if (numbers[mid] < numbers[j]) {
      j = mid;
    } else {
      j = j - 1;
    }
  }
  return numbers[i];
}
