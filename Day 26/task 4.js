function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = true; 

      if (success) {
        resolve({ id: 1, name: "Alice", role: "Developer" });
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 2000); 
  });
}
async function getData() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error(error);
  }
}
getData();
