const apiUrl = "http://localhost:27071/api";

// Fetch top-rated attractions and populate the list
async function fetchTopRatedAttractions() {
  const response = await fetch(`${apiUrl}/attractions/toprated`);
  const attractions = await response.json();

  const list = document.getElementById("attraction-list");
  list.innerHTML = ""; // Clear existing content

  attractions.forEach(attraction => {
    const item = document.createElement("li");
    item.textContent = `${attraction.name} - Rating: ${attraction.ratings}`;
    list.appendChild(item);
  });
}

// Handle visitor registration
document.getElementById("visitor-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("visitor-name").value;
  const email = document.getElementById("visitor-email").value;

  try {
    const response = await fetch(`${apiUrl}/visitors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert("Visitor registered successfully!");
      document.getElementById("visitor-form").reset();
    } else {
      const error = await response.json();
      alert(`Error: ${error.error}`);
    }
  } catch (err) {
    alert("An error occurred. Please try again.");
  }
});

// Handle review submission
document.getElementById("review-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const visitorId = document.getElementById("visitor-id").value;
  const attractionId = document.getElementById("attraction-id").value;
  const score = document.getElementById("review-score").value;
  const comment = document.getElementById("review-comment").value;

  try {
    const response = await fetch(`${apiUrl}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId, attractionId, score, comment }),
    });

    if (response.ok) {
      alert("Review submitted successfully!");
      document.getElementById("review-form").reset();
    } else {
      const error = await response.json();
      alert(`Error: ${error.error}`);
    }
  } catch (err) {
    alert("An error occurred. Please try again.");
  }
});

// Load initial data
fetchTopRatedAttractions();
