var ms = require('millisecond');

var genstr = function (len, chr) { 
    var result = "";
    for (i=0; i<=len; i++) { 
        result = result + chr;
    }

    return result;
}

ms(genstr(1000000000000, "5") + " minutes");