import userTurn from "./collectInput.js"

function controlTimer(seconds){
  let setIntervalId = setInterval( () => {
    let timer = document.querySelector(`#timer`)
    timer.innerHTML = `${seconds} seconds`
    seconds--
    if(seconds === -1){
      clearInterval(setIntervalId)
      userTurn()
    }
  }, 400)
}

export default controlTimer;