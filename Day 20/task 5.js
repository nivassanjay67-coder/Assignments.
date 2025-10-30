function getUserName(callback) {
  const name = "Alice"; 
  callback(name); 
}
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome!`);
}
getUserName(greetUser);