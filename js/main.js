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

  async function createMasonry(column, post) {
    //Reset the container
    select('.masonry').innerHTML = ''
    const columns = {}

    // Dividing Images into columns based on the functions input
    for (let i = 0; i < column; i++) {
      columns[`column${i}`] = []
    }

    // Equaly divide the coumns into the array
    for (let i = 1; i < (await post.images.length); i++) {
      const position = i % column
      columns[`column${position}`].push(await post.images[i])
    }

    //Create & Populate the Columns
    Object.keys(columns).forEach((key) => {
      const div = document.createElement('div')
      div.classList.add(key, 'column')
      select('.masonry').appendChild(div)
      columns[key].forEach(async (item, idx) => {
        const img = document.createElement('img')
        if (idx > 10) {
          img.loading = 'lazy'
        }
        if (idx === columns[key].length - 1) {
          img.classList.add('last')
        }
        img.src = await item.src

        select(`.${key}`).appendChild(img)
      })
    })
  }

  const media = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }

  function generateColumnIndex() {
    // Mobile
    if (window.innerWidth < media.sm) {
      return 1
    }
    // Tablet
    else if (window.innerWidth < media.md && window.innerWidth >= media.sm) {
      return 2
    }
    // Laptop
    else if (window.innerWidth < media.lg && window.innerWidth >= media.md) {
      return 3
    }
    // Desktop
    else if (window.innerWidth >= media.lg) {
      return 4
    }
  }

  // Receive column number and the data to populate
  createMasonry(generateColumnIndex(), data)
  window.addEventListener(
    'resize',
    throttle(() => {
      createMasonry(generateColumnIndex(), data)
    }, 100) // Throttle speed
  )
}

document.addEventListener('DOMContentLoaded', initApp)

// 🚩 Client-side JS Code comes here
