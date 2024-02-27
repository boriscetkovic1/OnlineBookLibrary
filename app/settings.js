// Settings tabs (on settings page) //
const settingsTabs = document.querySelectorAll('.settings__toggle');
const settingsContent = document.querySelectorAll('.settings__content');

settingsTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        settingsContent.forEach((content) => {
            content.classList.remove('is-active');
         });
        
         settingsTabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        settingsContent[index].classList.add('is-active');
        settingsTabs[index].classList.add('is-active');
    });
});
