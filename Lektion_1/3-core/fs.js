const fs = require('fs')

// fs.readFile('./mapp/text.txt','utf8', (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     // console.log(data.toString())
//     console.log(data)
// })

 const text = fs.readFileSync('./mapp/text.txt','utf8')
 console.log(text);

console.log('det här ligger efter read file');


// fs.writeFile('./mapp/text.txt', 'Ny Text' (err) => () {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('Skrev till filen')
// })
fs.appendFile('./mapp/text.txt', `\n Det här är text som vi har lagt till`, () => {
    console.log('appended text');
})

// fs.writeFile('./mapp/text.txt', 'Ny Text', (err) => () {
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log('Skrev till filen')
//     })

    // fs.rename('./mapp/.text2.txt', 'text2.txt', (err) => {
    //     if(err){
    //         console.log(err);
    //         return
    //     }
    //     console.log('bytte namn på filen');
    // })

//     if(!fs.existsSync('./nyMapp'), (err) => {
// fs.mkdir('./NyMapp', (err) => {
//         if(err) {
//             console.log(err);
//             return
//         }
//         console.log('mapp skapad');
//     })
//     })
//     else


if(fs.existsSync('./mapp/text2.txt')){
    fs.unlink('./mapp/text2.txt', err => {
        if(err){
            console.log(err);
            return
        }
        console.log('tog bort filen')
    })
}

const path = require('path')

fs.appendFile(path.join(__dirname,'mapp', 'text.txt'), '\nNu lägger jag till text igen...', () => {
    console.log('Klart');
})


    