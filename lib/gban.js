const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addGban = (msg, msg2, msg3, msg4, response, userId, _data) => {
    const obj = {
        number: msg,
		by: msg2,
		time: msg3,
		from: msg4,
        reason: response,
    }
    _data.push(obj)
    fs.writeFileSync('./database/gban.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const deleteGban = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].number === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/gban.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkGban = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].number === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    addGban,
    checkGban,
    deleteGban
}