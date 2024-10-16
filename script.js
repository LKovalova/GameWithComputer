const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if(e.keyCode === "Enter") {
        play();
    }
})

button.addEventListener('click', play);

function play() {
    const userNumber= input.value;

    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20!'
          })
    }
    else if(isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number!'
          })
    }
    else {
        if(userNumber < answer) {
            Swal.fire('Enter a greater number!');
        }
        else if(userNumber > answer) {
            Swal.fire('Enter a lower number');
        }
        else {
            Swal.fire({
                title: 'You are a WINNER!',
                imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
                imageWidth: 500,
                imageHeight: 350,
                imageAlt: 'Winner',
              })
        }
    }
}

gsap.from("#btn", {rotation:360, x:-600, duration:2, delay:2, opacity:0})
gsap.from("#guess", {x:-500, duration:2, delay:1, opacity:0}) 