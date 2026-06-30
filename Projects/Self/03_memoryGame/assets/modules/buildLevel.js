import { genrateColour, genrateSequence } from "./randomGenrators.js"
import controlTimer from "./timer.js"


function buildLevel(level) {
  localStorage.setItem('current_level', level)

  const main = document.createElement('main')
  const footer = document.createElement('footer')

  

  const levelBtn = document.createElement('button')
  const levelDiv = document.createElement('div')
  levelBtn.setAttribute('id', 'levelBtn')
  levelDiv.setAttribute('id', 'levelDiv')
  levelBtn.appendChild(document.createTextNode(`Level - ${level}`))
  levelDiv.appendChild(levelBtn)
  main.appendChild(levelDiv)
  
  
  const nodeDiv = document.createElement('div')
  nodeDiv.setAttribute('id', 'nodeDiv')
  const h1of_nodeDiv = document.createElement('h1')
  h1of_nodeDiv.appendChild(document.createTextNode('Carefully look at the sequence !'))
  nodeDiv.append(h1of_nodeDiv)
  main.appendChild(nodeDiv)


  let arrColor, sequence
  if(level >= 1 && level <=7){
    arrColor = genrateColour(2)
    sequence = genrateSequence(arrColor.length, 3+level)
  } else{
    arrColor = genrateColour(level - 5)
    sequence = genrateSequence(arrColor.length, 10)
  }
  localStorage.setItem(`${level}_colors`, JSON.stringify(arrColor))

  const nodeBox = document.createElement('div')
  nodeBox.setAttribute('id', 'nodeBox')
  const nodes = []
  for (let index = 0; index < sequence.length; index++) {
    nodes.push(document.createElement('span'))
    nodes[index].setAttribute('class', 'nodes')
    const {r, g, b} = arrColor[sequence[index]]

    nodes[index].setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`)
    nodes[index]
    nodeBox.appendChild(nodes[index])    
  }
  main.appendChild(nodeBox)


  const timerDiv = document.createElement('div')
  timerDiv.setAttribute('id', 'timerDiv')
  const timerHeading = document.createElement('h3')
  timerHeading.innerHTML = 'Timer'
  timerHeading.setAttribute('id', 'timerHeading')
  timerDiv.appendChild(timerHeading)
  timerDiv.appendChild(document.createElement('br'))
  const timer = document.createElement('div')
  timer.innerHTML = '  seconds'
  timer.setAttribute('id', 'timer')
  timerDiv.appendChild(timer)
  footer.appendChild(timerDiv)
  controlTimer(10, arrColor)


  document.querySelector('main').replaceWith(main)
  document.querySelector('footer').replaceWith(footer)
  





  



}

export default buildLevel;


 // let arrColor = genrateColour(2)
  // let sequence = genrateSequence(2, 4)




  
  // const nodeBox = document.createElement('div')
  // nodeBox.setAttribute('id', 'nodeBox')
  // const nodes = []
  // for (let index = 0; index < 4; index++) {
  //   nodes.push(document.createElement('span'))
  //   nodes[index].setAttribute('class', 'nodes')
  //   const {r, g, b} = arrColor[sequence[index]]
    
  //   nodes[index].setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`)
  //   nodes[index]
  //   nodeBox.appendChild(nodes[index])    
  // }
  // main.appendChild(nodeBox)