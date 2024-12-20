// Function to create the grid of divs dynamically
function createGrid() {
    const gridContainer = document.getElementById('grid-container');
    for (let row = 1; row <= 100; row++) {
        for (let col = 1; col <= 100; col++) {
            const div = document.createElement('div');
            div.id = `R${row}C${col}`; 
            gridContainer.appendChild(div);
        }
    }
}

// Call the function to create the grid on page load
createGrid();

// Function to send the prompt to the LLM (placeholder for now)
function sendPrompt() {
    const userInput = document.getElementById('user-input').value;
    // Here you would send the 'userInput' to your LLM using a suitable method
    // For now, let's simulate a response
    const mockResponse = "R3C3,R3C4,R3C5,R3C6,R4C6,R5C6,R6C6,R6C6,R4C4,R6C3,R5C3,R4C3"; 
    drawFromResponse(mockResponse); 
}