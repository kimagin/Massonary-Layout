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
  //Dom Elements
  const mainElement = select('section')
  await delay(1000)
  classlist(mainElement, '-', 'opacity-0')
  //Event Listeners
  event(mainElement, 'transitionend', () =>
    log('⚡ TailwindCSS Template is ready...')
  )
}

document.addEventListener('DOMContentLoaded', initApp)

// 🚩 Client-side JS Code comes here
