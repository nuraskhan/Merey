const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Function to set up factorial counter
export function setupCounter(element) {
  let counter = 0;

  const setCounter = () => {
    const factValue = factorial(counter);
    element.innerHTML = `Factorial of ${counter} is ${factValue}`;
  };

  element.addEventListener('click', () => {
    counter += 1;
    setCounter();
  });

  setCounter();
}
