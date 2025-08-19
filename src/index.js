const express = require('express') 
const app = express()
const PORT = 3000   

app.get('/', (req, res) => {
  console.log("App GET")
  res.send("HELLO WORLD !")
  app.post('/', (req, res)=> {
    res.send("app POST")

    app.delete('/', (req, res) =>{
      res.send("app DELETE")

 })

  })

})

app.listen(PORT,  ()  => {
  console.log(`App on-line na porta ${PORT}`)
})
