import buildLevel from './buildLevel.js'
function endGame() {
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    h1.textContent = 'you lost :('
    const div = document.createElement('div')
    div.setAttribute('id', 'lostDiv')
    div.appendChild(h1)
    main.appendChild(div)
    document.querySelector('main').replaceWith(main)

    const footer = document.createElement('footer')
    const div1 = document.createElement('div')
    div1.setAttribute('id', 'lostDiv')
    const btn = document.createElement('button')
    btn.textContent = 'Re-Try'
    div1.appendChild(btn)
    footer.appendChild(div1)
    btn.addEventListener('click', adddEventListenerforRe_try)
    document.querySelector('footer').replaceWith(footer)

}



function adddEventListenerforRe_try() {
    const startGameBtn = document.querySelector('button')
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
            modal.remove()
            buildLevel(1)
        })
    })
}





export default endGame