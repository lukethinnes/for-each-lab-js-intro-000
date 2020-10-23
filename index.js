var array = []

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const array = ["Exodus"]
  array.forEach(callback)
  return array
}
