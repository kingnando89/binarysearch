function setMid(high,low) {
  return Math.round((high - low) / 2) + low;
}

function binarySearch(userInput) {
  let high = dataSet.length;
  let low = 0;
  let mid = setMid(high, low);
  let found;
  while(!found) {
    if(userInput === mid) {
      found = dataSet.indexOf(dataSet[mid-1]);
    }
    if(userInput > mid) {
      low = mid + 1;
      mid = setMid(high, low);
    } else {
      high = mid - 1;
      mid = setMid(high, low);
    }
  }
}
