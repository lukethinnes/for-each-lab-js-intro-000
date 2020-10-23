var array = []

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["Exodus"]
  array.forEach(callback)
  return array
}
