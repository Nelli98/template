const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}




$(function(){

            $(document).on('click', '.fa-heart', function(event){

                    event.preventDefault();


                    var heartCount = +$(this).text();
                    if(heartCount == 2){
                        heartCount++;
                        $(this).removeClass('fa-heart-off');
                        $(this).addClass('fa-heart-on');
                        $(this).text(heartCount);
                    }
                    else{
                        heartCount--;
                        $(this).removeClass('fa-heart-on');
                        $(this).addClass('fa-heart-off');
                        $(this).text(heartCount);
                    }



            })

        });

(function() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function() {
    heart.classList.toggle('red');
  });
})();


