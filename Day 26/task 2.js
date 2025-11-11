function doTask(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}
doTask(() => {
  console.log("Task Completed");
});