const fs = require('fs');

function isUTF8BOM(file) {
    const buffer = fs.readFileSync(file);
    if (buffer.length >= 3 && buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        return true; // UTF-8 com BOM
    } else {
        return false; // Não é UTF-8 com BOM
    }
}

function checkFiles(files) {
    const filesWithErrors = [];
    files.forEach(file => {
        if (!isUTF8BOM(file)) {
            filesWithErrors.push(file);
        }
    });

    if (filesWithErrors.length > 0) {
        const errorMessage = `Os seguintes arquivos não estão no formato UTF-8 com BOM: ${filesWithErrors.join(', ')}`;
        throw new Error(errorMessage);
    }
}

// Obtendo os arquivos passados como argumento
const files = process.argv.slice(2);

// Verificando os arquivos
try {
    checkFiles(files);
    console.log('Todos os arquivos estão no formato UTF-8 com BOM.');
} catch (error) {
    console.error(error.message);
}