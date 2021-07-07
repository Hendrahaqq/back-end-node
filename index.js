const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors');
const app = express()


app.use(cors({
    origin: '*'
}));

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

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port 3000!`))