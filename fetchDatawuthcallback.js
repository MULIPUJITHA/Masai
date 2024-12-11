
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const shouldFail = Math.random() < 0.5; 
    if (shouldFail) {
      callback("Error fetching data", null); 
    } else {
      const data = { id: 1, name: "Sample Data" };
      callback(null, data); 
    }
  }, 1000);
}

fetchDataWithCallback((error, data) => {
  if (error) {
    console.log(error); 
  } else {
    console.log("Data fetched successfully:", data); 
  }
});
