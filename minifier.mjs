import { minify } from 'minify'
import fs from 'fs'

const files = ['index.html', 'day.css', 'night.css', 'common.css']

files.forEach((f) => {
  minify(f).then((text) =>
    fs.writeFile(`min/${f}`, text, (err) => err && console.error(err))
  )
})
