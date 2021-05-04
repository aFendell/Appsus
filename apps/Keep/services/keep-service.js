import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'
// import { storageService } from '../assets/img/nice-view1.jpg'

const gNotes = [
    {   id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title: "Fullstack",
            txt: "Fullstack Me Baby!"
        }
    },
    {   id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title: "Shopping List",
            txt: "Milk, sugar, tomatos, onions..."
        }
    },
    {   id: utilService.makeId(),
        type: "img",
        isPinned: true,
        info: {
            title: "Fixing",
            url: "https://www.discoverafrica.com/images/zambia_adventure_vic_falls.jpg"
        }
    },
    {   id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title: utilService.makeLorem(3),
            txt: utilService.makeLorem(25)

        }
    },
    {   id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title: utilService.makeLorem(2),
            txt: utilService.makeLorem(10)
        }
    },
    {   id: utilService.makeId(),
        type: "img",
        isPinned: true,
        info: {
            title: "Fixing",
            url: "https://img.static-af.com/images/meta/IDname/CITY-MLE-1?aspect_ratio=2:1&max_width=1920"
        }
    },
    {   id: utilService.makeId(),
        type: "txt",
        isPinned: true,
        info: {
            title: utilService.makeLorem(1),
            txt: utilService.makeLorem(18)
        }
    }
]

export const keepService = {
    query,
    getKeepById
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

function getKeepById(noteId) {
    var note = gNotes.find(function (note) {
        // console.log('getKeepById', keep);
        if (noteId === note.id) {
            return note
        }
    })
    return Promise.resolve(note)
}