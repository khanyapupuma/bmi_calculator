function display(){
    let  weight = document.querySelector('.p1').value
    let height = document.querySelector('.p2').value
    let output = document.querySelector('.ans')

    let bmi =  weight/height/height*10000
    output.innerHTML = "Your BMI is equal to  " + bmi.toFixed(2);
    if (bmi < 18.5 ){
        output.innerHTML =  output.innerHTML + 'You are underweight'
    }
    else if(bmi >= 18.5 && bmi<25){
        output.innerHTML =  output.innerHTML + 'You have a normal bmi'
    }
    else if(bmi >25 && bmi<30){
        output.innerHTML =  output.innerHTML + 'You are overweight'
    }
    else output.innerHTML = output.innerHTML + 'You are obese'
    }