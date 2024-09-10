// Get slider Iiems || Array.from 
var SliderImages = document.querySelectorAll(".slider-container img");

// Get Number of Slides 
var slidesCount = SliderImages.length ;

// set Current slide 
var currentSlide = 1 ;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Get prevoius and Next Buttons 
var NextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
NextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL ELement 
var paginationElement = document.createElement("ul");

// Set ID for Main UL Element  
paginationElement.setAttribute("id" , "pagination-ul");


// Create List of Items in UL 
for (var i = 1 ; i <= SliderImages.length ; i++){

    //  create The Li 
    var paginationItem = document.createElement("li");

    //  set custom Attribute to items 
    paginationItem.setAttribute("data-index" , i);

    // Set Item Content
   //  paginationItem.appendChild(document.createTextNode(i));

    // Add Value to items 
    paginationItem.innerText = i;

    // append Item to paginationElement 
    paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);


// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Bullet || Array.form
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));


 // Loop Through All Bullets Items
 for (var i = 0 ; i < paginationsBullets.length ; i++ ){
   
     paginationsBullets[i].onclick = function(){
       
         currentSlide = parseInt(this.getAttribute('data-index'));
         theChecker();
     }
 }

// create the checker function 
function theChecker (){

  // set slide number 
  slideNumberElement.innerText = 'Slide# ' + (currentSlide) + ' of ' + (slidesCount);

  // Remove ALl Active classe 
  removeAllActive();

  // Set active class on current slide 
  SliderImages[currentSlide - 1].classList.add("active");

  // Set Active class on current pagination item 
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

    if (currentSlide === 1){
        prevButton.classList.add("disabled");
    }
    
    else {
        prevButton.classList.remove("disabled");
    }

    if (currentSlide === slidesCount){
        NextButton.classList.add("disabled");
    }

    else {
        NextButton.classList.remove("disabled");
    }

}

// Remove All Active Classes From Images and Pagination Bullets

function removeAllActive(){
   SliderImages.forEach((img)=> {
      img.classList.remove("active");
   });

   paginationsBullets.forEach((bullet) => {
      bullet.classList.remove("active")
   });

}


// trigger function 
theChecker();


// Next Slide Function 
function nextSlide(){
    if (currentSlide !== 5){
        currentSlide++;
        theChecker();    
    }
   
}

// prev Slide Function 
function prevSlide(){
    if (currentSlide !== 1){
        currentSlide--;
        theChecker();    
    }
}









