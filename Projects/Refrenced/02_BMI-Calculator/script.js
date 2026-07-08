const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    const heightcm = Number(document.getElementById('height').value)
    const height = heightcm/100
    const weight = Number(document.getElementById('weight').value)
    const resultDiv = document.querySelector('.results')
    const newResultDiv = document.createElement('div')
    newResultDiv.setAttribute('class', 'results')
    if(Number.isNaN(height) || Number.isNaN(weight) || height === 0 || weight === 0){
        newResultDiv.appendChild(document.createTextNode('Invalid Input'))
        resultDiv.replaceWith(newResultDiv)        
    } else{
        const bmi = weight / (height * height)
        const bmiPrime = bmi / 25
        console.log(bmi)
        newResultDiv.appendChild(document.createTextNode(`Body mass index (BMI) = ${bmi.toFixed(2)}`))
        newResultDiv.appendChild(document.createElement('br'))
        newResultDiv.appendChild(document.createTextNode(`Body mass index prime = ${bmiPrime.toFixed(2)}`))
        resultDiv.replaceWith(newResultDiv)
    }
})