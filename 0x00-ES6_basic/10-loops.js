export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx of array) {
    newArray.push(idx = appendString + idx);
  }
  return newArray;
}
