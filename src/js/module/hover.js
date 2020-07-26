const hover = () => {
    function hover(trigger,imgHover, imgBack) {
        const h = document.querySelectorAll(trigger);
        h.forEach(item => {
            if(item.classList.contains(trigger.slice(1))) {
                item.addEventListener('mouseover', e => {
                    e.preventDefault();
                    item.src = imgHover;
                });
            }
            item.addEventListener('mouseout', e => {
                e.preventDefault();
                item.src = imgBack;
            });

        });
    }
    function hoverImg(trigger,imgSelector,imgHover, imgBack,containerSelector) {
        const h = document.querySelectorAll(trigger);
        const a = document.querySelector(imgSelector);
        const d = document.querySelector(containerSelector);
        h.forEach(item => {
            item.addEventListener('mouseover', e => {
                if(item.classList.contains(trigger.slice(1))) {
                    e.preventDefault();
                    a.src = imgHover;
                    d.style.display = 'block';
                }
                item.addEventListener('mouseout', e => {
                    e.preventDefault();
                    a.src = imgBack;
                    d.style.display = 'none';
                });
            })
        })

    }

    hover('.yt',"/src/assets/icons/youtube-HOVER.png","/src/assets/icons/youtube.png");
    hover('.vk',"/src/assets/icons/vk-hover.png","/src/assets/icons/vk.png");
    hover('.t',"/src/assets/icons/telegram-hover.png","/src/assets/icons/telegram.png");
    hover('.tw',"/src/assets/icons/twitter-hover.png","/src/assets/icons/twitter%20.png");
    hover('.f-yt',"/src/assets/icons/yt-f-hover.png","/src/assets/icons/yt-f.png");
    hover('.f-vk',"/src/assets/icons/vk-f-hover.png","/src/assets/icons/vk-f.png");
    hover('.f-t',"/src/assets/icons/t-f-hover.png","/src/assets/icons/t-f.png");
    hover('.f-tw',"/src/assets/icons/tw-f-hover.png","/src/assets/icons/tw-f.png");
    hover('.yt-1',"/src/assets/icons/yt-h-1.png","/src/assets/icons/yt-1.png");
    hover('.vk-1',"/src/assets/icons/vk-h-1.png","/src/assets/icons/vk-1.png");
    hover('.t-1',"/src/assets/icons/t-h-1.png","/src/assets/icons/t-1.png");
    hover('.tw-1',"/src/assets/icons/tw-h-1.png","/src/assets/icons/tw-1.png");
    hoverImg('.img1','.img-1',"/src/assets/icons/img1-hover.png", "/src/assets/icons/img1.png",'.com-container-1');
    hoverImg('.img2','.img-2',"/src/assets/icons/img2-hover.png", "/src/assets/icons/img2.png",'.com-container-2');
    hoverImg('.img3','.img-3',"/src/assets/icons/img3-hover.png", "/src/assets/icons/img3.png",'.com-container-3');
};

export default hover;
