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
