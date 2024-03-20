document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

if (isNaN(height) || isNaN(weight)) {
    document.getElementById('result').innerHTML = "Please enter valid height and weight.";
    return;
}

var bmi = calculateBMI(height, weight);
document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);

});

function calculateBMI(height, weight) {
    return weight / ((height/100) * (height/100));
}

