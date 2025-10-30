function doTask(callback) {
  console.log("Performing task...");
  setTimeout(() => {
    console.log("Task finished!");
    callback(); 
  }, 2000);
}
function showCompletionMessage() {
  console.log("Task Complete");
}
doTask(showCompletionMessage);