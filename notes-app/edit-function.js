const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeEdit = document.querySelector('#remove-note')
const id = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === id
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBody.addEventListener('input', function(e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeEdit.addEventListener('click', function(e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

document.querySelector('#home').addEventListener('click', function() {
    location.assign('/index.html')
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        const notes = JSON.parse(e.newValue)
        const note = notes.find(function(note) {
            return note.id === id
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
    
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})