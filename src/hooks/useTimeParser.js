function useTimeParser () {
//Je crée une constante "fonctionnelle" avec pour paramètre timeInSeconds de la fonction à mutualiser
//Je reprends le code de la fonction originelle.
    const parseSecondsToHMS = (timeInSeconds) => {
        timeInSeconds = Number(timeInSeconds);
        const h = Math.floor(timeInSeconds / 3600);
        const m = Math.floor(timeInSeconds % 3600 / 60);
        const s = Math.floor(timeInSeconds % 3600 % 60);

        const hDisplay = h < 10 ? '0' + h : h; 
        const mDisplay = m < 10 ? '0' + m : m; 
        const sDisplay = s < 10 ? '0' + s : s; 

        return `${hDisplay}:${mDisplay}:${sDisplay}`;
    }

    return {
        parseSecondsToHMS,
    }
};

export default useTimeParser;