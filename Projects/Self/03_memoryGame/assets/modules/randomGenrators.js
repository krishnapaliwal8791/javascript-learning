function genrateColour(no_of_color) {
  const color_arr = []
  let r, g, b
  for (let index = 0; index < no_of_color; index++) {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    let myColor = {
      r: r,
      g: g,
      b: b
    }
    while (isPresentColor(myColor, color_arr)) {
      r = Math.floor(Math.random() * 256)
      g = Math.floor(Math.random() * 256)
      b = Math.floor(Math.random() * 256)
      let myColor = {
        r: r,
        g: g,
        b: b
      }
    }
    color_arr.push(myColor)
  }
  return color_arr
}

function isPresentColor(mainColor, arrColor) {
  const { r, g, b } = mainColor
  let isMatched = false
  for (let index = 0; index < arrColor.length; index++) {
    if (arrColor[index].r === r) {
      if (arrColor[index].b === b) {
        if (arrColor[index].g === g) {
          isMatched = true
        }
      }
    }
    if (isMatched) {
      return true
    }
  }
  return false
}

function genrateSequence(noOfColor, sequnceSize){
  const sequence = []
  for(let index = 0; index < sequnceSize; index++){
    let choice = Math.floor(Math.random()*noOfColor)
    sequence.push(choice)
  }
  return sequence
}


export {genrateColour, genrateSequence}