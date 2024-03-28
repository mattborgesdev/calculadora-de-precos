const fs = require('fs');

function isUTF8BOM(file) {
    // Verifica se os primeiros três bytes são o BOM UTF-8 (0xEF, 0xBB, 0xBF)
    if (file.length >= 3) {
        const arr = Buffer.from(file);
        if (arr.length >= 3 && arr[0] === 0xEF && arr[1] === 0xBB && arr[2] === 0xBF) {
            console.log("O arquivo está no formato UTF-8 com BOM.");
        } else {
            throw new Error("O arquivo não está no formato UTF-8 com BOM");
        }
    } else {
        console.log("O arquivo é muito pequeno para conter um BOM UTF-8.");
    }
}

// Recebe o caminho do arquivo como argumento da linha de comando
const filePath = process.argv[2];

if (!filePath) {
    console.error("Por favor, forneça o caminho para o arquivo como argumento da linha de comando.");
    process.exit(1);
}

// Lê o arquivo e chama a função isUTF8BOM
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        process.exit(1);
    }
    isUTF8BOM(data);
});