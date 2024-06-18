
function truncate(str, max) {
    return (str.length > max) ?
        str.slice(0, max - 1) + '…' : str;
}

const str = "I want to ride my bicycle"
console.log(truncate(str, 8))