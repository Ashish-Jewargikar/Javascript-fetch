// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the button and text elements
    const btn = document.querySelector(".btn");
    const text = document.querySelector(".txt");
    const output = document.getElementById("output");
  
    // Add a click event listener to the JSON button
    btn.addEventListener("click", () => {
      fetch("example.json")
        .then(response => response.json())
        .then(data => {
          // Clear previous output
          output.innerHTML = "";
  
          // Create an h1 element to display the JSON data
          const name = document.createElement("h1");
          name.textContent = `Name: ${data.name}`;
          output.appendChild(name);
        })
        .catch(error => {
          console.error("Error fetching JSON data:", error);
        });
    });
  
    // Add a click event listener to the Text button
    text.addEventListener("click", () => {
      fetch("example.txt")
        .then(response => response.text())
        .then(data => {
          // Clear previous output
          output.innerHTML = "";
  
          // Create a p element to display the text data
          const textDocument = document.createElement("p");
          textDocument.textContent = `Text: ${data}`;
          output.appendChild(textDocument);
        })
        .catch(error => {
          console.error("Error fetching text data:", error);
        });
    });
  });
  