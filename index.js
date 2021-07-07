const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/get', async (req, res) => {
  try {

    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=callback'
    const tagQuery = req.query.tag
    const apiResponse = await fetch(
      tagQuery != '' ? url + '&tags=' + tagQuery : url
    )
    const apiResponseJson = await apiResponse.json()
    
    res.send(apiResponseJson.items)
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})

app.listen(80, () => console.log(`Example app listening on port 80!`))