const ratingApp = () => {
    const submitBtn = document.querySelector('.submit-btn')
    const ratingBtns = document.querySelectorAll('input[name="rating"]');
    const mainContainer = document.querySelector('.main-container');
    const thankYouContainer = document.querySelector('.thank-you-container');
    const tyUserRating = document.querySelector('.user-rating')
    
    submitBtn.addEventListener('click', () => {
        let isBtnChecked = false;
        for (btn of ratingBtns){
            if (btn.checked){
                isBtnChecked = true;
            }
        };

        if (isBtnChecked){
            let userRating = 0;
            ratingBtns.forEach(btn => {
                if (btn.checked){
                    userRating = btn.id;
                }
            });
            tyUserRating.textContent = userRating;
            mainContainer.classList.add('hidden');
            thankYouContainer.classList.remove('hidden');
        } else {
            alert('Please, select some option.')
        }
    });
};

ratingApp();