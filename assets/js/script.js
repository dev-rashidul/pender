// Sticky Navbar for Header

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar")
    header.classList.toggle("sticky", window.scrollY > 0)
  })

// JavaScript for Edit Profile

const editIcon = document.querySelector('.user-profile-icon')
const profileDropdown = document.querySelector('.profile-dropdown')

editIcon.addEventListener("click", function(){
  profileDropdown.classList.toggle('active')
})