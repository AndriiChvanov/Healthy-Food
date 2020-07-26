const carousel = () => {
    function bindCaurosel(triggerSelector,carInner, carItem, carSlides, carIndicators) {
        const trigger = document.querySelectorAll(triggerSelector);
        for (let i = 0; i < trigger.length; i++) {
            const width = window.getComputedStyle(trigger[i].querySelector(carInner)).width;
            const slides = trigger[i].querySelectorAll(carItem);
            const slidesField = trigger[i].querySelector(carSlides);
            const dots = trigger[i].querySelectorAll(carIndicators);

            slidesField.style.width = 100 * slides.length + '%';
            slides.forEach(slide => {
                slide.style.width = width;
            });

            let offset = 0;
            let slideIndex = 0;

            trigger[i].querySelector('[data-slide="next"]').addEventListener('click', (e) => {
                e.preventDefault();
                if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                    offset = 0;
                } else {
                    offset += +width.replace(/\D/g, '');
                }

                slidesField.style.transform = `translateX(-${offset}px)`;
                if (slideIndex == slides.length - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
                // dots.forEach(dot => dot.classList.remove('active'));
                // dots[slideIndex].classList.add('active');
            });
            trigger[i].querySelector('[data-slide="prev"]').addEventListener('click',(e) => {
                e.preventDefault();
                if (offset == 0) {
                    offset = +width.replace(/\D/g, '') * (slides.length - 1)
                } else {
                    offset -= +width.replace(/\D/g, '');
                }

                slidesField.style.transform = `translateX(-${offset}px)`;
                if (slideIndex == 0) {
                    slideIndex = slides.length - 1;
                } else {
                    slideIndex--;
                }
                // dots.forEach(dot => dot.classList.remove('active'));
                // dots[slideIndex].classList.add('active');
            });

            // const sliderId = trigger[i].getAttribute('id');
            // trigger[i].querySelector(`#${sliderId}`).addEventListener('click',(e) => {
            //     e.preventDefault();
            //     const slideTo = e.target.getAttribute('data-slide-to');
            //
            //     slideIndex = slideTo;
            //     offset = +width.replace(/\D/g, '') * slideTo;
            //     slidesField.style.transform = `translateX(-${offset}px)`;
            //     // dots.forEach(dot => dot.classList.remove('active'));
            //     // dots[slideIndex].classList.add('active');
            // });
        }
    }
    function bindCauroselY(triggerSelector,carInner, carItem, carSlides) {
        const trigger = document.querySelectorAll(triggerSelector);
        for (let i = 0; i < trigger.length; i++) {
            const height = window.getComputedStyle(trigger[i].querySelector(carInner)).height;
            const slides = trigger[i].querySelectorAll(carItem);
            const slidesField = trigger[i].querySelector(carSlides);

            slidesField.style.height = 100 * slides.length + '%';
            slides.forEach(slide => {
                slide.style.height = height;
            });

            let offset = 0;
            let slideIndex = 0;

            trigger[i].querySelector('[data-slide="next"]').addEventListener('click', (e) => {
                e.preventDefault();
                if (offset == (+height.replace(/\D/g, '') * (slides.length - 1))) {
                    offset = 0;
                } else {
                    offset += +height.replace(/\D/g, '');
                }

                slidesField.style.transform = `translateY(-${offset}px)`;
                if (slideIndex == slides.length - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
            });
            trigger[i].querySelector('[data-slide="prev"]').addEventListener('click',(e) => {
                e.preventDefault();
                if (offset == 0) {
                    offset = +height.replace(/\D/g, '') * (slides.length - 1)
                } else {
                    offset -= +height.replace(/\D/g, '');
                }

                slidesField.style.transform = `translateY(-${offset}px)`;
                if (slideIndex == 0) {
                    slideIndex = slides.length - 1;
                } else {
                    slideIndex--;
                }
            });

        }
    }

    bindCaurosel('.news-slider','.new-slider-wrap','.news-container-items','.news-slider-inner');
    // bindCauroselY('.reviews-slider','.rev-slider-wrap','.rev-container-it','.rev-slider-inner');
};

export default carousel;
