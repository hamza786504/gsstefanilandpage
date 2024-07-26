$(document).ready(
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
);




// Get references to elements
const toggleOpenButton = document.getElementById('toggleOpen');
const toggleCloseButton = document.getElementById('toggleClose');
const sidebar = document.getElementById('collapseMenu');

// Function to open the sidebar
function openSidebar() {
    sidebar.classList.remove('hidden');
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.classList.add('hidden');
}

// Event listener for open button click
toggleOpenButton.addEventListener('click', openSidebar);

// Event listener for close button click
toggleCloseButton.addEventListener('click', closeSidebar);




// Select all sidebar <li> elements
const sidebarItems = document.querySelectorAll('#collapseMenu ul li');

// Add click event listener to each <li> item
sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    // Check if window width is less than 768px
    if (window.innerWidth < 768) {
      // Close the sidebar by adding 'hidden' class to the parent div
      const collapseMenu = document.getElementById('collapseMenu');
      collapseMenu.classList.add('hidden');
    }
  });
});
