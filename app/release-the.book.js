// Search

function searchFunction() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-books-for-release");
  filter = input.value.toUpperCase();
  table = document.querySelector(".release-books-table");
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
