'use strict';

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

function checkRequiredFiles(files) {
    var currentFilePath;
    var dirName, fileName;

    try {
        files.forEach(filePath => {
            currentFilePath = filePath;
            fs.accessSync(filePath, fs.F_OK);
        });
        return true;
    } catch (err) {
        dirName = path.dirname(currentFilePath);
        fileName = path.basename(currentFilePath);

        console.log(chalk.red('Could not find a required file.'));
        console.log(chalk.red('  Name: ') + chalk.cyan(fileName));
        console.log(chalk.red('  Searched in: ') + chalk.cyan(dirName));
        return false;
    }
}

module.exports = checkRequiredFiles;
