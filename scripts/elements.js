export const elements = {
    time: {
        minutes: () => document.querySelector('.time .m'),
        seconds: () => document.querySelector('.time .s'),
        container: () => document.querySelector('.time-container'),
        innerLayer: () => document.querySelector('.inner-layer'),
        time: () => document.querySelector('.time')
    },
    slider: {
        slider: () => document.querySelector('div.slider'),
        slides: () => document.querySelectorAll('div.slide')
    },
    footer: {
        currentYear: () => document.querySelector('.year')
    }
};