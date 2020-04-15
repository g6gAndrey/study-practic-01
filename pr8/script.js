function wordDivision(str) {
    const words = str.match(/[а-яa-z]+(\-[а-яa-z]+)?/ig)
    if(words) {
        words.forEach(word => {
            document.writeln(word);
        })
    }

}
function sentenceDivision(str) {
    const sentences = str.match(/[]/ig)
}

wordDivision('ар в-ыдш адFв4ы 4 Dоао gjdk-D f')

function passwordCheck(password) {
    if ((/(?=.*[0-9])(?=.*[!_.?])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g).test(password)) return true;
    else false;
}