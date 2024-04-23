function fn(e) {
    var output = document.getElementById("output");
    if (e.innerHTML == '=') {
        output.value = eval(output.value);
    } else if (e.innerHTML == 'C' || e.innerHTML == 'CE') {
        output.value = '';
    } else if (e.id == 'back') {
        var v = output.value;
        output.value = v.substring(0, v.length - 1);
    } 
    else if (e.innerHTML == '√') { 
        output.value = Math.sqrt(parseFloat(output.value));
    } 
    else if (e.innerHTML == 'x<sup>2</sup>') { 
        output.value = Math.pow(parseFloat(output.value), 2); 
    }
    else if (e.innerHTML == '1/x') { 
        output.value = 1 / parseFloat(output.value);
    }
        else {
        output.value += e.innerHTML;
    }
}