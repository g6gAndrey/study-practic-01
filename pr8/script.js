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