// method -> Object
// function -> window, global

const book = {
    title: "The Title",
    authors: ["John", "Mark", "Rob"],
    read() {
        console.log(this)
    },

    printAuthors() {
        this.authors.forEach(function (author) {
            console.log(this.title, " - ", author) // this infers the function inside
        }, this) // this leads binding this
    }
}

book.read(); //  object

// object
book.stopreading = function () {
    console.log(this)
}

// window, global
function watchMovie() {
    console.log(this);
}