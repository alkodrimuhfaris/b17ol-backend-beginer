const express = require ('express');
const app = express();


app.get('/', (request, response)=>{
    response.send('Hello!');
});

app.get('/home', (request, response)=>{
    response.send('Welcome Home!');
})

app.get('/item', (req, res)=>{
    const items = {
        success: true,
        message: 'Listing items',
        data: [
            {
                id: 1,
                name: 'Barang Antik: Sapu',
                price: 10000,
                decsription: `Sapu adalah alat rumah tangga dibuat dari ijuk (lidi, sabut, dan sebagainya) yang diikat menjadi berkas, diberi bertangkai pendek atau panjang untuk membersihkan debu, sampah, dan sebagainya;[1] sapu merupakan salah satu alat pembersih yang terdiri dari bagian serat atau serabut kaku dan biasanya terpasang atau terikat kepada suatu pegangan silindris.
                
                Bentuk sapu hampir selalu mengalami perubahan mulai dari bahan ranting-ranting pohon hingga seikatan serat-serat alami. Pada mulanya, sapu memiliki bentuk bulat, bentuk yang mudah dibuat tetapi kurang efisien untuk melakukan pembersihan. Sapu dapat diikatkan ke sebuah pegangan, baik yang pendek untuk pembersih debu, maupun panjang untuk menyapu lantai atau perapian.`
            }
        ]
    }
    res.send(items)
})

app.use('/assets', express.static('frontend/assets'))

app.listen(8080,()=>{
    console.log('App listening on port 8080')
});