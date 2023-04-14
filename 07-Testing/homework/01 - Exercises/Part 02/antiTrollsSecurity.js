const antiTrollsSecurity = (string) => {
    // g de global hace coincidir todas las instancias del patrón en la cadena, no solo la primera.
    // i de insensitive hace que la coincidencia sea insensible a mayúsculas y minúsculas.
    return string.replace(/[aeiou]/gi, '');
};

module.exports = antiTrollsSecurity;
