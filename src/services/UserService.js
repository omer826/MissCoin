

var USER_KEY = 'user_key'

function loadUser() {
    let user = loadFromStorage(USER_KEY)
    return user;
}

function signUp(name) {
    var user = createUser(name);
    saveToStorage(USER_KEY, user)
}
function createUser(name) {
    return {
        name: name,
        coins: 100,
        moves: []
    }
}

function addMove(contact, amount) {
    var user = loadFromStorage(USER_KEY)

    return new Promise((resolve, reject) => {
        if (user.coins > amount) {
            user.moves.push({
                toId: contact._id,
                to: contact.name,
                at: Date.now(),
                amount: amount
            })
            user.coins = user.coins - amount;
            saveToStorage(USER_KEY, user)
            resolve('money transfer')

        } else reject('Yout balance is too low')
    })


}

function getMoveById(contactId) {
    var user = loadFromStorage(USER_KEY)
    return new Promise((resolve, reject) => {
        let userMoves = user.moves.filter(move => {
            return move.toId === contactId + ''
        })
        resolve(userMoves)
    })
}
function formatted_date() {
    var result = "";
    var d = new Date();
    result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
        " " + d.getHours() + ":" + d.getMinutes() + ":" +
        d.getSeconds() + " " + d.getMilliseconds();
    return result;
}


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export default {
    loadUser,
    signUp,
    addMove,
    getMoveById,
    formatted_date
}