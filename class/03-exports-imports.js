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
import prs from './person.js'  //imports default and only export of the file, name in the receiving file is up to you

import {baseData} from './utility.js'
import {clean} from './utility.js'
  

//default export
import person from './person.js'
import prs from"./person.js'

//named export
import {smth} from './utility.js'   //smth is name defined by export
import {smth as Smith} from './utility.js'  //Smith is the name you chose, smth is name defined by export
import * as bundled from './utility.js'   //bundled is the name you chose, * mean importing everything
 
