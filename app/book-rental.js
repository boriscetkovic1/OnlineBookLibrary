//  Book rental tabs (on book-rental page) //
const bookTabs = document.querySelectorAll('.knjige__toggle');
const bookContents = document.querySelectorAll('.knjige__content');

bookTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        bookContents.forEach((content) => {
            content.classList.remove('is-active');
         });
        
         bookTabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        bookContents[index].classList.add('is-active');
        bookTabs[index].classList.add('is-active');
    });
});

// Search

function searchFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("book-rental-search");
    filter = input.value.toUpperCase();
    table = document.querySelector(".book-rental-search-table");
    tr = table.getElementsByTagName("tr");
  
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
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