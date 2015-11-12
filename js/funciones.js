
// Establece la longitud máxima de un textarea:
function maximaLongitud(texto,maxlong) {
    var in_value, out_value;

    if (texto.value.length > maxlong) {
        in_value = texto.value;
        out_value = in_value.substring(0,maxlong);
        texto.value = out_value;
        return false;
    }
    return true;
}







 


