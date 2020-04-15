function wordDivision(str) {
    const words = str.match(/[а-яa-z]+(\-[а-яa-z]+)?/ig)
    if(words) {
        words.forEach(word => {
            document.writeln(word+"<br>");
        })
    }

}
function sentenceDivision(str) {
    const sentences = str.match(/[\w\s-,:;()№''""]+([.!?]{1,3})/ig)
    console.log(sentences);
    if(sentences) {
        sentences.forEach(sentence => {
            document.writeln(sentence+"<br>");
        })
    }
}

wordDivision('ар в-ыдш адFв4ы 4 Dоао gjdk-D f')
sentenceDivision("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi neque, malesuada id feugiat pharetra, molestie vitae est. Suspendisse tincidunt ligula dui, nec egestas quam laoreet sed. Suspendisse ac nisi eu sapien rhoncus scelerisque non vitae ante. Nullam tortor orci, dapibus a placerat in, facilisis non nulla. Nam nec nulla eu mi iaculis scelerisque!? Sed laoreet neque ac ipsum interdum consectetur. Morbi nec ornare lacus, sed rutrum risus? Etiam nec eleifend quam... Pellentesque volutpat nibh nec rutrum finibus! Sed turpis dolor, lacinia sit amet arcu sit amet, dictum egestas arcu. Etiam sapien massa, malesuada ut sagittis sagittis, mollis sit amet sapien. Curabitur sit amet massa turpis.")