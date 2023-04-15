

function printPatterns(row) {

    // triangle 
    var output = '';
    for (i = 0; i < row; i++) {
        for (j = 0; j <= i; j++) {
            output += "*";
        }
        console.log(output);
        output = '';
    }
    console.log(" ");

    // square
    output = '';
    for (i = 0; i < row; i++) {
        for (j = 0; j <= row; j++) {
            output += "*";
        }
        console.log(output);
        output = '';
    }

    // pyramid
    for (i = 0; i < row; i++) {
        output = '';
        for (j = 0; j < row - i; j++) {
            output += " ";
        }
        for (k = 0; k < i; k++) {
            output += "* ";
        }
        console.log(output);
    }
}

printPatterns(5)

function printFileExtension(fName) {
    console.log(fName.substring(fName.indexOf(".")));
}

printFileExtension("c:/abc/abc/file.pdf");
