function fibonacci(limit, index, array) {
  const result = array;

  if (index === limit) {
    return result;
  }

  if (result.length < 2) {
    result.push(1);
  } else {
    const lastAdded = result[result.length - 1];
    const previousLastAdded = result[result.length - 2];
    result.push(lastAdded + previousLastAdded);
  }

  return fibonacci(limit, index + 1, result);
}

const result = fibonacci(7, 0, []);
console.log(result);
