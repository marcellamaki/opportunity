console.log('executing');

// Modal
const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

document.querySelector('#modal-close')
  .addEventListener('click', toggleModal);

// Filter datasets
filterSelection("all")

function filterSelection(c) {
  let datasets, i, challenges;
  datasets = document.getElementsByClassName("datasets__card");
  challenges = document.getElementsByClassName("challenge__container");
  // Show all datasets
  if (c == "all") c = "";
  // Add "show" class to filtered elements. Remove "show" class from elements that are not selected.
  for (i = 0; i < datasets.length; i++) {
    removeClass (datasets[i], "datasets__card--show");
    if (datasets[i].className.indexOf(c) > -1) addClass(datasets[i], "datasets__card--show");
  }
  // Show challenge details only when filtered, not on all
  for (i = 0; i < challenges.length; i++) {
    if (c == "") {
      removeClass (challenges[i], "challenge__container--show");
    } else {
      removeClass (challenges[i], "challenge__container--show");
      if (challenges[i].className.indexOf(c) > -1) addClass(challenges[i], "challenge__container--show");
    }
  }
}


function searchDatasets() {
  var td;
  var txtValue;
  var i;
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("data-to-filter");
  var tr = table.getElementsByClassName("datasets__card");
  
  for (i = 0; i < tr.length; i++) {
    // console.log("in the for loop")
    td = tr[i].getElementsByClassName("datasets__card-title")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("datasets__card-subtitle")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("datasets__card-description")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

}

// Show filtered elements
function addClass(element, name) {
  let i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i  < array2.length; i++) {
    if (array1.indexOf(array2[i]) == -1) {
      element.className += " " + array2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  let i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i < array2.length; i++) {
    while (array1.indexOf(array2[i]) > -1 ) {
      array1.splice(array1.indexOf(array2[i]), 1);
    }
  }
  element.className = array1.join(" ");
}

// Add active class to control button
var topicsContainer = document.getElementById("topics");
var topics = topicsContainer.getElementsByClassName("topics__card");
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("topics__card--active");
    current[0].className = current[0].className.replace("topics__card--active", "");
    this.className += " topics__card--active";
  })
}
