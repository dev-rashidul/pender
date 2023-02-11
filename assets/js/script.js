// Sticky Navbar for Header

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript for View Profile

const editIcon = document.querySelector(".user-profile-icon");
const profileDropdown = document.querySelector(".profile-dropdown");

editIcon.addEventListener("click", function () {
  profileDropdown.classList.toggle("active");
});

// JavaScript for Edit Profile

const userEditIcon = document.querySelector(".user-edit-icon");
const closeIcon = document.querySelector(".form-close-btn");
const userModal = document.querySelector(".user-modal");

userEditIcon.addEventListener("click", function () {
  userModal.classList.toggle("active");
});

closeIcon.addEventListener("click", function () {
  userModal.classList.remove("active");
});
