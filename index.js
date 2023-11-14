const { execSync } = require('child_process');
const crypto = require('crypto');
//const os = require('os');
function obterUidHD() {
    try {
        const hdInfo = execSync('wmic diskdrive get serialnumber', { encoding: 'utf8' });
        const cleanedHDInfo = hdInfo.replace(/\s/g, '').replace(/\W/g, '');
        const uid = crypto.createHash('sha256').update(cleanedHDInfo).digest('hex');
        return uid;
    } catch (error) {
        console.error('Erro ao obter UID do HD:', error);
        return null;
    }
}

const uidHD = obterUidHD();
console.log(`UID do HD: ${uidHD}`);
