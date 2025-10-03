function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearchSorted(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
    target = target.toLowerCase();

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    let curr = step;

    while (curr < n && arr[curr] < target) {
        prev = curr;
        curr += step;
    }
    
    for (let i = prev; i < Math.min(curr, n); i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
