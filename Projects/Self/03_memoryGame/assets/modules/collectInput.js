import validateInput from "./validateUserInput.js"
import nextLevel from "./updateLevel.js"
import endGame from "./lostGame.js"

function userTurn() {
  const message = document.querySelector(`#nodeDiv`)
  const nodeBox = document.querySelector(`#nodeBox`)
  const timerDiv = document.querySelector(`#timerDiv`)

  const newMessage = document.createElement(`div`)
  newMessage.setAttribute('id', 'nodeDiv')
  {
    const h1 = document.createElement('h1')
    newMessage.appendChild(h1).textContent = `Now replicate the sequence !`
  }
  message.replaceWith(newMessage)

  const spans = nodeBox.cloneNode(true).querySelectorAll('span')

  for (let index = 0; index < spans.length; index++) {
    nodeBox.querySelectorAll('span')[index].style.backgroundColor = ''
  }

  const level = JSON.parse(localStorage.getItem('current_level'))
  const colors = JSON.parse(localStorage.getItem(`${level}_colors`))

  const footer = document.querySelector('footer')
  const newFooter = document.createElement('footer')
  const inputBtnDiv = document.createElement(`div`)
  inputBtnDiv.setAttribute('id', 'inputBtnDiv')
  for (let i = 0; i < colors.length; i++) {
    const span = document.createElement(`span`)
    span.setAttribute('style', `background-color: rgb(${colors[i].r}, ${colors[i].g}, ${colors[i].b});`)
    span.setAttribute('class', `inputBtn`)
    span.addEventListener('click', takeInputFromUser)
    inputBtnDiv.appendChild(span)
  }
  newFooter.appendChild(inputBtnDiv)
  footer.replaceWith(newFooter)





  function takeInputFromUser(event){
    const nodeBox = document.querySelector(`#nodeBox`)
    const noOfNodes = nodeBox.querySelectorAll(`span`).length
    // console.log(`${noOfNodes}`)
    const allNodes = nodeBox.querySelectorAll(`span`)
    // console.log(allNodes)
    let notFilledFirstNode // undefined
    for(let i=0; i<noOfNodes; i++){
      if(allNodes[i].style.backgroundColor === ''){
        // console.log(`condition trrigered at ${i}`)
        notFilledFirstNode = i
        break;
      }
    }
    if(notFilledFirstNode !== allNodes.length){
      // console.log(notFilledFirstNode)
      // console.log(event.target.style.backgroundColor)
      allNodes[notFilledFirstNode].style.backgroundColor = event.target.style.backgroundColor
      
    } 
    if(notFilledFirstNode === allNodes.length - 1){
      const isInputCorrect = validateInput(spans)
      if(isInputCorrect){
        nextLevel()
      } else{
        endGame()
      }
    }
    
}
}
export default userTurn