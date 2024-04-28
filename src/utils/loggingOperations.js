const green = "\x1b[32m"
const yellow = "\x1b[33m"
const red = "\x1b[31m"
const reset = "\x1b[0m"

function info(info) {
    console.log("[INFO]     " + `[${new Date().toLocaleString()}]:`, info)
}

function success(success) {
    console.log(green + "[SUCCESS]  " + reset + `[${new Date().toLocaleString()}]:`, success)
}

function warning(warning) {
    console.warn(yellow + "[WARNING]  " + reset + `[${new Date().toLocaleString()}]:`, warning)
}

function error(error) {
    console.error(red + "[ERROR]    " + reset + `[${new Date().toLocaleString()}]:`, error)
}

module.exports = { info, success, warning, error }