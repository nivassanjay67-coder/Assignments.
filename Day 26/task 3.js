function doTask(callback) {
  setTimeout(() => {
    callback("Task Completed");
  }, 3000);
}
function doTaskPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 3000);
  });
}
doTaskPromise().then((message) => {
  console.log(message);
});
async function runTask() {
  const message = await doTaskPromise();
  console.log(message);
}

runTask();