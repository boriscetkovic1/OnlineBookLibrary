const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('nav');
const hiddenActivities = document.querySelector('.dashboard-hidden-activities');
const showAllBtn = document.querySelector('.showAll');

// Toggle Sidebar //
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});


// Create new users and books from header //
const createContentBtn = document.querySelectorAll('.user-create-btn');
const contentDiv = document.querySelector('.dash-new-users');
createContentBtn.forEach(create => {
    create.addEventListener('click', () => {
        contentDiv.classList.toggle('hidden');
    });
});

// User profile options (user account in header) //
const optionsProfileBtn = document.querySelectorAll('.user-profile-options');
const userProfileOptions = document.querySelector('.account-profile-options');
optionsProfileBtn.forEach(option => {
    option.addEventListener('click', () => {
        userProfileOptions.classList.toggle('hidden');
    })
})


