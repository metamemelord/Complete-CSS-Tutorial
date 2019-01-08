var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var toggleButton = document.querySelector(".toggle-button");
var sideNavbar = document.querySelector(".mobile-nav");
var modalNoButton = document.querySelector(".modal .modal__action--negative");
var plans = document.querySelectorAll(".plan");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    openModel();
  });
}
for (var i = 0; i < plans.length; i++) {
  plans[i].addEventListener("click", function() {
    openModel();
  });
}

function closeModal() {
  backdrop.classList.remove("open");
  if (modal) modal.classList.remove("open");
}

function openModel() {
  modal.classList.add("open");
  backdrop.classList.add("open");
}

backdrop.addEventListener("click", function() {
  sideNavbar.classList.remove("open");
  closeModal();
});

toggleButton.addEventListener("click", function() {
  // sideNavbar.className += " open"; appends to class list
  sideNavbar.classList.add("open");
  backdrop.classList.add("open");
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
