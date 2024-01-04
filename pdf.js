window.onload = function () {
    document.getElementById("downloadBtn").addEventListener("click", () => {
        let doc = new jsPDF('p','pt','A4')
        let source = document.getElementById("cv").innerHTML
        let margins ={
            top:10,
            bottom:10,
            left:10,
            right:20,
            width:595
        }
        doc.fromHTML(
            source,
            margins.left,
            margins.right,
            {
                "width":margins.width,
                "elementHandlers":speciaelElementHandlers
            },
            function(dispose){

                doc.save("cv.pdf")
            },margins)
    });
};
let speciaelElementHandlers = {
    '.no-export': function (element, render) {
        return true
    }
}