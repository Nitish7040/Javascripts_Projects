const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

if(height ==' ' || height< 0|| isNaN(height) ){
    results.innerHTML = `please give a valid height ${height}`;
}
else if(weight==' ' || weight< 0|| isNaN(weight) ){
    results.innerHTML = `please give a valid weight ${weight}`;
}
else{
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    // show the result
    results.innerHTML =`<span>BMI = ${bmi} and </span>`;
if(bmi<18.6){
    results.innerHTML +=`<span>you are underweight</span>`
} 
else if(bmi<24.9){
    results.innerHTML +=`<span>you are normal weight</span>`
    }else if(bmi<29.9){
        results.innerHTML +=`<span>you are overweight</span>`
    }


}
});