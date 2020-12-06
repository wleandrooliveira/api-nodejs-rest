const fs = require('fs')

fs.createReadStream('../assets/cachorro.jpg',)
    .pipe(fs.createWriteStream('../assets/cachorro-stream.jpg'))
    .on('finish',() => console.log('A imagem foi escrita com sucesso'))