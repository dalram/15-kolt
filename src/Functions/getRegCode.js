import App from '../App';
function getRegCode(key) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * 
   characters.length));
     }
     localStorage.setItem(key, result);
     return result;
}

export default getRegCode;