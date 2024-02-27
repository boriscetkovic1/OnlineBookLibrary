// Single Student tabs (on student details page) //
const singleStudentTabs = document.querySelectorAll('.single-student__toggle ');
const singleStudentContent = document.querySelectorAll('.single-student__content');

singleStudentTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        singleStudentContent.forEach((content) => {
            content.classList.remove('is-active');
         });
        
         singleStudentTabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        singleStudentContent[index].classList.add('is-active');
        singleStudentTabs[index].classList.add('is-active');
    });
});