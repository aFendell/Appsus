import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

const KEY = 'notesDB';
var gNotes;

_createNotes()

// const gNotes = [
//     {
//         id: utilService.makeId(),
//         type: "txt",
//         isPinned: true,
//         info: {
//             title: "Fullstack",
//             txt: "Fullstack Me Baby!"
//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "txt",
//         isPinned: true,
//         info: {
//             title: "Shopping List",
//             txt: "Milk, sugar, tomatos, onions..."
//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "img",
//         isPinned: true,
//         info: {
//             title: "Fixing",
//             url: "https://www.discoverafrica.com/images/zambia_adventure_vic_falls.jpg"
//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "txt",
//         isPinned: true,
//         info: {
//             title: utilService.makeLorem(3),
//             txt: utilService.makeLorem(25)

//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "txt",
//         isPinned: true,
//         info: {
//             title: utilService.makeLorem(2),
//             txt: utilService.makeLorem(10)
//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "img",
//         isPinned: true,
//         info: {
//             title: "Fixing",
//             url: "https://img.static-af.com/images/meta/IDname/CITY-MLE-1?aspect_ratio=2:1&max_width=1920"
//         }
//     },
//     {
//         id: utilService.makeId(),
//         type: "txt",
//         isPinned: true,
//         info: {
//             title: utilService.makeLorem(1),
//             txt: utilService.makeLorem(18)
//         }
//     }
// ]

export const keepService = {
    query,
    getNoteById,
    deleteNote
}

function query() {
    console.log('query resolve gKeeps');
    // if (filterBy) {
    //     var { title } = filterBy
    //     const filteredKeeps = gKeeps.filter(keep => {
    //         return (
    //             keep.title.includes(title)
    //         )
    //     })
    //     return Promise.resolve(filteredKeeps)
    // }
    return Promise.resolve(gNotes)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage()

    return Promise.resolve()
}

function getNoteById(noteId) {
    console.log('getNoteById');
    var note = gNotes.find(function (note) {
        if (noteId === note.id) {
            return note
        }
    })
    return Promise.resolve(note)
}

function _createNotes() {
    console.log('creating notes');
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || notes.length === 0) {
        var notes = [
            _createTxtNote('CRUD till you die', utilService.makeLorem(13)),
            _createTxtNote('Sharpen CSS', utilService.makeLorem(32)),
            _createImgNote("https://img.static-af.com/images/meta/IDname/CITY-MLE-1?aspect_ratio=2:1&max_width=1920"),
            _createTxtNote('Master React', utilService.makeLorem(17)),
            _createTxtNote('Tomorrow is tomorrow', utilService.makeLorem(41)),
            _createImgNote("https://www.discoverafrica.com/images/zambia_adventure_vic_falls.jpg"),
            _createTxtNote('Summer is comming', utilService.makeLorem(23))
        ];
    }
    gNotes = notes;
    _saveNotesToStorage();
}

function _createTxtNote(title, txt) {
    var note = {
        id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title,
            txt
        }
    }
    return note;
}

function _createImgNote(url) {
    var note = {
        id: utilService.makeId(),
        type: "img",
        isPinned: true,
        info: {
            title: "",
            txt: "",
            url
        }
    }
    return note;
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}