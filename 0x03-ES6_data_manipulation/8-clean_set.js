export default function cleanSet(set, startString) {
  let resultString = '';

  for (const item of set) {
    if (item.startsWith(startString)) {
      resultString += `${item.slice(startString.length)}-`;
    }
  }

  if (resultString.endsWith('-')) {
    resultString = resultString.slice(0, -1);
  }

  return resultString;
}
