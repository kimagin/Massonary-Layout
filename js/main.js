'use strict'
//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

// Setup before DOM loads
const initApp = async () => {
  // Fetch Data base
  const request = await fetch('../src/database.json')
  const data = await request.json()

  //Fetch Image Blob Asynchronously
  const fetchImage = async (source) => {
    const request = await fetch(source)
    const blob = await request.blob()
    const url = URL.createObjectURL(blob)
    return url
  }

  function createMassonary(column, post) {
    const columns = []
    for (let i = 0; i < column; i++) {
      columns[`column${i}`] = []
    }

    console.log(columns)

    for (let i = 1; i < post.images.length; i++) {
      const clm = i % column
      columns[`column${clm}`].push(post.images[i])
    }
  }

  createMassonary(4, data)

  // Adding images to DOM
  data.images.forEach(async (image) => {
    // Fetching the image
    const imageBlob = await fetchImage(image.src)

    // Adding Styles to the Unit

    // Image DOM element
    const img = document.createElement('img')
    img.src = imageBlob
    img.classList.add('image')
    // Image container DOM element
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('grid-unit')

    // Adding Image to it's container
    imgContainer.appendChild(img)
    //Appending element inside the browser's massonary container
    select('.massonary').appendChild(imgContainer)
  })
}

document.addEventListener('DOMContentLoaded', initApp)

// 🚩 Client-side JS Code comes here
