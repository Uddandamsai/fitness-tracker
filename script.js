function submitForm(){
    const age = document.getElementById('age').value;
    const bmi = document.getElementById('bmi').value;
    const duration = document.getElementById('duration').value;
    const heartRate = document.getElementById('heartRate').value;
    const bodyTemperature = document.getElementById('bodyTemperature').value;
    const gender = document.getElementById('gender').value;
    const caloriesBurnt =  (duration * heartRate) / 100;
    const table = document.getElementById('parametersTable');

    table.innerHTML = `
        <tr>
            <th>Parameter</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Age</td>
            <td>${age}</td>
        </tr>
        <tr>
            <td>BMI</td>
            <td>${bmi}</td>
        </tr>
        <tr>
            <td>Duration</td>
            <td>${duration} min</td>
        </tr>
        <tr>
            <td>Heart Rate</td>
            <td>${heartRate}</td>
        </tr>
        <tr>
            <td>Body Temperature</td>
            <td>${bodyTemperature} °C</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
    `;

    // Update calories burnt display
    document.getElementById('caloriesValue').innerText = caloriesBurnt.toFixed(2);
}