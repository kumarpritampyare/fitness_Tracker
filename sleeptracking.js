function trackSleep() {
    const duration = parseFloat(document.getElementById('duration').value);
    const quality = parseInt(document.getElementById('quality').value);
    
    if (duration <= 0 || quality < 1 || quality > 10) {
      alert('Please enter valid values.');
      return;
    }
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <p>Sleep Duration: ${duration} hours</p>
      <p>Sleep Quality: ${quality}/10</p>
      <p>Average Sleep Score: ${calculateSleepScore(duration, quality)}</p>
    `;
  }
  
  function calculateSleepScore(duration, quality) {
    // You can define your own algorithm to calculate the sleep score based on duration and quality.
    // This is just a simple example.
    const score = (duration * quality) / 10;
    return score.toFixed(2);
  }
  