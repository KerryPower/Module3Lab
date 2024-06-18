function camelCase(cssProp) {
    let propParts = cssProp.split('-');
    for (let i = 1; i < propParts.length; i++) {
        propParts[i] = propParts[i][0].toUpperCase() + propParts[i].substring(1);
    }
    return propParts.join('');
}