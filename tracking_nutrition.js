function trackNutrition() {
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);
    const fats = parseInt(document.getElementById('fats').value);
    
    const total = calories + protein + carbs + fats;
    
    document.getElementById('total').innerHTML = `
      <p>Total Calories: ${calories} kcal</p>
      <p>Total Protein: ${protein} g</p>
      <p>Total Carbohydrates: ${carbs} g</p>
      <p>Total Fats: ${fats} g</p>
      <p>Total: ${total} kcal</p>
    `;
  }