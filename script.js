const imgBox = document.getElementById("img-box");
const pictures = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]

function imgLoop(){
    let a = 0;

    function changeImg(){
        a++;
        let b = a%pictures.length;
        imgBox.style.backgroundImage = `url(Resources/${pictures[b]}.jpg)`
    }

    setInterval(function(){
        changeImg();
    }, 3000);
}

imgLoop();