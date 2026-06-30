import buildLevel from "./buildLevel.js"

function nextLevel(){
    const level = JSON.parse(localStorage.getItem('current_level'))
    buildLevel(level+1)
}

export default nextLevel