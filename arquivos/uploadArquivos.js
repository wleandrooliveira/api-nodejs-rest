const fs = require('fs')

fs.readFile('../assets/cachorro.jpg',(erro, buffer)=>{
    console.log('A imagem foi carregada para o buffer')

    fs.writeFile('../assets/cachorro2.jpg', buffer, (erro)=> {
        console.log('A imagem foi escrita')
    })
})