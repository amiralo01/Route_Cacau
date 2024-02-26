document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2000);

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    
    for(let i = 1; i <= 3; i++)
        document.getElementById("radio"+i).checked = false;

    document.getElementById("radio"+count).checked = true;
}

function slideShow(){}