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
    deleteNote,
    createNote,
    saveNote
}

function query() {
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

function saveNote(note) {
    return note.id ? _updateNote(note) : _addNote(note)
}

function _addNote(noteToAdd) {
    var note = _createNote(noteToAdd.info.txt)
    gNotes.unshift(note)
    _saveNotesToStorage();
    return Promise.resolve(note)
}

function _updateNote(noteToUpdate) {
    console.log('updating note:', noteToUpdate);
    var noteIdx = gNotes.findIndex(function (note) {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
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
    var note = gNotes.find(function (note) {
        if (noteId === note.id) {
            return note
        }
    })
    return Promise.resolve(note)
}

function _createNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || notes.length === 0) {
        var notes = [
            _createTxtNote(utilService.makeLorem(13)),
            _createTxtNote(utilService.makeLorem(32)),
            _createImgNote("https://img.static-af.com/images/meta/IDname/CITY-MLE-1?aspect_ratio=2:1&max_width=1920"),
            _createTxtNote(utilService.makeLorem(17)),
            _createTxtNote(utilService.makeLorem(41)),
            _createImgNote("https://www.discoverafrica.com/images/zambia_adventure_vic_falls.jpg"),
            _createTxtNote(utilService.makeLorem(23))
        ];
    }
    gNotes = notes;
    _saveNotesToStorage();
}

function createNote(noteType, noteStr) {
    switch(noteType){
        case 'txt':
            var note = _createTxtNote(noteStr)
            break;
        case 'img':
            var note = _createImgNote(noteStr)
            break;        
    }
    gNotes.unshift(note)
    _saveNotesToStorage();
    
    return Promise.resolve()
}

function _createTxtNote(txt, title="") {
    var note = {
        id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            txt,
            title,
        },
        bgColor: "#edfaa6"
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
        },
        bgColor: "#edfaa6"
    }
    return note;
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}