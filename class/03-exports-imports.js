//person.js
const person = {
  name: 'hanwen'
}
export default person

//utility.js
export const clean = () => {}
export const baseData = 10;

//app.js
import person from './person.js'
import prs from"./person.js'  //imports default and only export of the file, name in the receiving file is up to you

import {baseData} from './utility.js'
import {clean} from './utility.js'
  
