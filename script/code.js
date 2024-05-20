function display(){


let  weight = document.querySelector('.p1')
let height = document.querySelector('.p2')
let output = document.querySelector('.output')


let bmi = weight/height**2

output.innerHTML = "Your BMI is equal to : "+ bmi.toFixed(2);
if (bmi < 18.5 ){
    output.innerHTML =  output.innerHTML + 'You are underweight'    
}
else if(bmi >= 18.5 && bmi<25){
    output.innerHTML =  output.innerHTML + 'You have a normal weight'
}
else if(bmi >25 && bmi<30){
    output.innerHTML =  output.innerHTML + 'You are overweight'
}
else output.innerHTML = output.innerHTML + 'You are obese'
}
