const hasDuplicate = (nums: number[]): boolean => {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};
console.log(hasDuplicate([2, 3, 4, 5, 5]));
