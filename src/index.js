import "./style/main.scss";
import $ from 'jquery';

const loadAboutTabs = async () => {
    try {
        const module = await import('./js/about-tab');
        const aboutTabs = module.default;
        aboutTabs();
    } catch (error) {
        console.error("Error loading aboutTabs module:", error);
    }
};

const loadMakeItRain = async () => {
    try {
        const module = await import('./js/raindrops');
        const makeItRain = module.default;
        makeItRain(); 
    } catch (error) {
        console.error("Error loading makeItRain module:", error);
    }
};

const loadInitTilt = async () => {
    try {
        const module = await import('./js/tilt');
        const initTilt = module.default;
        initTilt();
    } catch (error) {
        console.error("Error loading initTilt module:", error);
    }
};

$('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate(
            {
                scrollTop: target.offset().top,
            },
            1000
        );
    }
});

import initSr from './js/sr';
initSr();
loadInitTilt();
loadAboutTabs();
loadMakeItRain();
