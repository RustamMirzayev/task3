function is_array(message){
    // return typeof message.forEach === 'function'
    // return Object.prototype.toString.call(message) === '[object Array]'
    // return Array.isArray(message)
    // return message.constructor === Array
    return message instanceof Array
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
