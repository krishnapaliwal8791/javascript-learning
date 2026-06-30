import buildLevel from "./buildLevel.js"

function addEventListenerToStartGameBtn(){
    const startGameBtn = document.querySelector('#startGameBtn')
startGameBtn.addEventListener('click', () => {
  const modal = document.createElement(`dialog`)
  modal.setAttribute('open', '')
  modal.innerHTML = `<article>
    <h2>Memoy Game</h2>
    <p>
      Do you want to start the game now ?
    </p>
    <footer>
      <button id='dontStartGame'>
        No
      </button>
      <button id='startGameYes'>Yes</button>
    </footer>
  </article>`
  document.body.appendChild(modal)
  const dontStartGame = document.querySelector('#dontStartGame')
  dontStartGame.addEventListener('click', () => {
    modal.remove()
  })
  const startGameYes = document.querySelector('#startGameYes')
  startGameYes.addEventListener('click', () => {
    const header = document.querySelector('header')
    modal.remove()
    header.querySelector('nav').remove()
    buildLevel(1)
  })
})
}

export default addEventListenerToStartGameBtn;