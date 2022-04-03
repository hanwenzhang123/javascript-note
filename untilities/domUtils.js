//domUtils/domUtils.js
export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

export function qs(selector, parent = document) {   //qs(".class", window)
  return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {    //return array like object but not array
  return [...parent.querySelectorAll(selector)] //spread it out to new array so you can use array methods
}

export function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value)
      return
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === "text") {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}


//domUtils/script.js 
import { addGlobalEventListener, createElement, qs, qsa } from "./domUtils.js"

console.log("Buttons:\n", qsa(".btn"))
console.log("Wrapper:\n", qs(".wrapper"))
console.log("Buttons In Wrapper:\n", qsa(".btn", qs(".wrapper")))

addGlobalEventListener("click", ".btn", e => {
  console.log(e.target.textContent)
})

addGlobalEventListener("click", ".btn", () => console.log("Runs once"), {
  once: true,
})

addGlobalEventListener(
  "click",
  ".btn",
  () => console.log("Only works on buttons in modal"),
  {},
  qs(".wrapper")
)

const element = createElement("button", {
  class: "btn",
  text: "New",
  dataset: { test: true },
  id: "new",
  "data-hi": "Yes",
})
qs(".wrapper").append(element)
 
