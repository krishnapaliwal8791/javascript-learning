
function validateInput(sequence){
    console.log(sequence)
    const nodeBox = document.querySelector('#nodeBox')
    const spans = document.querySelectorAll('span')
    for(let i=0; i<sequence.length; i++){
        if(sequence[i].style.backgroundColor !== spans[i].style.backgroundColor){
            return false
        }
    }
    return true
}

export default validateInput;