const fs = require('fs');


module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);

    });

};

module.exports.touch = (folderName) => {
    fs.writeFile('${folderName}.txt', '','utf8', (err) =>{
        if (err) throw (err);

        console.log('${folderName} created')
    });

};

module.exports.mkdir = (directoryName) => {
    fs.mkdir('${directoryName}.txt', (err) =>{
        if (err) throw (err);

        console.log('${directoryName} created')
    });

};