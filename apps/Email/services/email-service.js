
import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'


const KEY = 'emails';
const ID_SIZE = 6;
var gEmails = [{
    id: utilService.makeId(ID_SIZE),
    sendTo: 'Dana',
    subject: 'Hello',
    body: 'Pick up!',
    isRead: true,
    isStar: true,
    isTrash: false,
    sentAt: new Date().toLocaleString(),
},
{
    id: utilService.makeId(ID_SIZE), sendTo: 'Shira', subject: 'Welcome', body: 'Pick up!',
    isRead: false, sentAt: new Date().toLocaleString(),
    isStar: false,
    isTrash: false,
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
    console.log(filterBy)//==sendTo
    if (filterBy) {
        var { sendTo } = filterBy


        var filteredEmails = gEmails.filter(email => {
            console.log('email.sendTo',email.sendTo)
            console.log('filterBy',filterBy)

            return email.sendTo.includes(sendTo)
        })
        console.log(filteredEmails)
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}

function setEmailTrash(emailId, isTrash) {
    var email = gEmails.find(function (email) {
        return emailId === email.id
    })
    email.isTrash = isTrash
    storageService.saveToStorage(KEY, gEmails);

    return Promise.resolve()
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    storageService.saveToStorage(KEY, gEmails);

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
    storageService.saveToStorage(KEY, gEmails);

    return Promise.resolve()
}

function setEmailRead(readEmailId, isRead) {
    const email = gEmails.find(({ id }) => id === readEmailId)
    if (email) {
        email.isRead = isRead
    }
    storageService.saveToStorage(KEY, gEmails);
}

function setEmailStar(starEmailId, isStar) {
    const email = gEmails.find(({ id }) => id === starEmailId)
    if (email) {
        email.isStar = isStar
    }
    storageService.saveToStorage(KEY, gEmails);
}


export const emailService = {
    query,
    getEmailById,
    deleteEmail,
    setEmailTrash,
    addEmail,
    setEmailRead,
    setEmailStar
}