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
    return URL.createObjectURL(blob)
  }

  function createMasonry(column, post) {
    //Reset the container
    select('.masonry').innerHTML = ''
    const columns = {}

    // Dividing Images into columns
    for (let i = 0; i < column; i++) {
      columns[`column${i}`] = []
    }

    for (let i = 1; i < post.images.length; i++) {
      const position = i % column
      columns[`column${position}`].push(post.images[i])
    }

    //Create Empty Columns

    Object.keys(columns).forEach((key) => {
      const div = document.createElement('div')
      div.classList.add(key, 'column')
      select('.masonry').appendChild(div)
      columns[key].forEach((item) => {
        const img = document.createElement('img')
        img.src = item.src
        select(`.${key}`).appendChild(img)
      })
    })
    select('.masonry').childNodes.forEach((col) => {})
  }

  createMasonry(4, data)
}

document.addEventListener('DOMContentLoaded', initApp)

// 🚩 Client-side JS Code comes here
