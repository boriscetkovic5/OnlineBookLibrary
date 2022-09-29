// ----- Izdavanje knjiga tabs ----- //
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


// ----- Settings tabs ----- //
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


