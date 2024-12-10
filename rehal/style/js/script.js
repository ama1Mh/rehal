// use for responsitev desgin and moving object

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/// responseve nav bar ///////////////
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());










function showTab(tabId) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));

  // Add active class to the clicked tab
  document.getElementById(tabId).classList.add('active');
}