      }
​
      if (!foundMatch) return false;
    }
​
    return true;
  }
​
  if (typeof value1 === "object") {
    if (value1 === null || value2 === null) return false;
​
    let keys1 = Object.keys(value1).sort();
    let keys2 = Object.keys(value2).sort();
​
    if (keys1.length !== keys2.length) return false;
​
    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i]) return false;
    }
​
    for (let key of keys1) {
      if (!areEqual(value1[key], value2[key])) {
        return false;
      }
    }
​
    return true;
  }
​
  return false;
}