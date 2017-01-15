'use strict';

(() => {
    /**
     * @param {Event} event
     */
    const resetKey = (event) => {
        event.target.classList.remove('playing');
    };

    /**
     * @param {HTMLDivElement} div
     */
    const addPlaying = (div) => {
        div.classList.add('playing');
    };

    /**
     * @type {HTMLDivElement}
     */
    const keysContainer = document.querySelector('div.keys');
    keysContainer.addEventListener('transitionend', resetKey);

    document.addEventListener('keydown', (event) => {
        /**
         * @type {HTMLAudioElement}
        */
        var sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const divPlaying = document.querySelector(`div[data-key="${event.keyCode}"]`);

        if(!!sound) {
            addPlaying(divPlaying);
            sound.currentTime = 0;
            sound.play();
        }
    });
})();