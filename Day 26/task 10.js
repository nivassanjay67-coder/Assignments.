function makeAsyncCounter() {
  let count = 0; 

  function increment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        count += 1;
        console.log(`Counter updated: ${count}`);
        resolve(count);
      }, 1000); 
    });
  }

  return increment;
}

const counter = makeAsyncCounter();

async function runCounter() {
  await counter(); 
  await counter(); 
  await counter(); 
}

runCounter();