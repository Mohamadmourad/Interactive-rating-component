let submit = document.getElementById("submit");
let nbr1 = document.getElementById("1");
let nbr2 = document.getElementById("2");
let nbr3 = document.getElementById("3");
let nbr4 = document.getElementById("4");
let nbr5 = document.getElementById("5");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let rating = document.getElementById("rating");
let currentRating = 0;


submit.addEventListener("click", function fun(){
    page1.style.display="none";
    page2.style.display="flex";
    
    if (nbr1.checked) {
        currentRating =1;
      } else if (nbr2.checked) {
        currentRating =2;
      }
      else if (nbr3.checked) {
        currentRating =3;
      }
      else if (nbr4.checked) {
        currentRating =4;
      }
      else if (nbr5.checked) {
        currentRating =5;
      }
    rating.innerHTML="You selected " + currentRating + " out of 5";
});





