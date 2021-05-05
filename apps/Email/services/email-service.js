
import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'


const KEY = 'emails';
const ID_SIZE = 6;
var gEmails = [{
    id: utilService.makeId(ID_SIZE),
    sendTo:'Dana' ,
    subject: 'Hello', 
    body: 'Pick up!',
    isRead: true, 
    sentAt: new Date().toLocaleString(),
},
{
    id:utilService.makeId(ID_SIZE), sendTo:'Shira', subject: 'Welcome', body: 'Pick up!',
    isRead: false, sentAt:new Date().toLocaleString()
}]
console.log(gEmails)

//_createEmails();

function getEmailById(emailId) {//instead id something else
    var email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email)
}

function query(filterBy) {
    console.log('service')
    console.log(filterBy)
    console.log(gEmails)

    return Promise.resolve(gEmails)
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    storageService.saveToStorage(KEY,gEmails);

    return Promise.resolve()
}

function addEmail(sendTo, subject, body) {
    gEmails.push({
        id: utilService.makeId(ID_SIZE),
        sendTo,
        subject, 
        body,
        isRead: false, 
        sentAt: new Date().toLocaleString(),
    })
    storageService.saveToStorage(KEY,gEmails);

    return Promise.resolve()
}

function setEmailRead(readEmailId, isRead) {
    const email = gEmails.find(({id}) => id === readEmailId)
    if (email) {
        email.isRead = isRead
    }
    storageService.saveToStorage(KEY,gEmails);
}

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
    addEmail,
    setEmailRead,
}