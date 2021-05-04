import { utilService } from '../../services/utilService.js'
import { storageService } from '../../services/storageService.js'

export const emailService = {
    query,
    getEmailById
}

const KEY = 'emails';
var gEmails = [{
    id: '1',sendTo:'Dana' ,subject: 'Hello', body: 'Pick up!',
    isRead: true, sentAt: 1551133930594
},
{
    id: '2',sendTo:'Shira', subject: 'Welcome', body: 'Pick up!',
    isRead: false, sentAt: 1551133930594
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


