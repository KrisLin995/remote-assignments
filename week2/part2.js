//Request 1: Click to Change Text
window.onload = function() { //wrap code inside a window.onload event listener cuz If the script is loaded in the head section of the HTML document, it will be executed before elements are loaded and getElementById method will not find the element.
    var banner = document.querySelector(".banner"); // QuerySelector,  select .banner and .headline elements cuz class names
    banner.addEventListener("click", function() {
      var headline = banner.querySelector(".headline");
      if (headline.textContent === "Welcome Message") {
        headline.textContent = "Have a Good Time!";//Click to Change Text to Have a Good Time
      } else {
        headline.textContent = "Welcome Message";//Click to change back
      }
    });
};

//Request 2: Click to Show/Close Menu
//self reference: https://www.youtube.com/watch?v=b6uLtL8M5nc&ab_channel=dcode
document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.nav');
    const navClose = document.querySelector('.nav-close');
  
    function showNav() {
      nav.style.display = 'block';
    }
  
    function hideNav() {
      nav.style.display = 'none';
    }
  
    function toggleNav() {
      if (nav.style.display === 'none' || nav.style.display === '') {
        showNav();
      } else {
        hideNav();
      }
    }
  
    icon.addEventListener('click', toggleNav);
    navClose.addEventListener('click', hideNav);
  
    function updateNav() {
      if (window.innerWidth < 800) {
        hideNav();
        icon.style.display = 'block';
      } else {
        hideNav();
        icon.style.display = 'none';
      }
    }
  
    updateNav();
    window.addEventListener('resize', updateNav);
    /*Request 3: Click to Show More Content Boxes.*/
   /*There are some more content boxes waiting to show. When the user clicks the Call-to-Action
  button, show those hidden content boxes*/
    const row2 = document.querySelector('.row2');

    callAction.addEventListener('click', () => {
    row2.style.display = row2.style.display === 'none' ? 'flex' : 'none';  /* When the element is clicked, the code checks the current display property of .row2 using the style.display property. If the current value is 'none', the code sets the display property of .row2 to 'flex' to make it visible. If the current value is 'flex', the code sets the display property to 'none' to hide it. */
  });
  
  
});
    
  