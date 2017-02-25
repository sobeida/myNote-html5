function getNote() {
    if (localStorage.getItem('note')) {
        var note = localStorage.getItem('note');
    } else {
        var note = 'Go ahead & edit this note to save in local storage.';
    }

    document.getElementById('note').innerHTML = note;
}

function saveNote(id) {
    var note = document.getElementById('note').innerHTML;
    localStorage.setItem('note', note);
}

function clearNote() {
    clear: localStorage.clear();
    return false;
}

getNote();
