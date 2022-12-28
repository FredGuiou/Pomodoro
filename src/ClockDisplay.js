function ClockDisplay ({ time, ...props }) {

    const secondsToHms = (timeInSeconds) => {
        timeInSeconds = Number(timeInSeconds);
        const h = Math.floor(timeInSeconds / 3600);
        const m = Math.floor(timeInSeconds % 3600 / 60);
        const s = Math.floor(timeInSeconds % 3600 % 60);

        const hDisplay = h < 10 ? '0' + h : h; 
        const mDisplay = m < 10 ? '0' + m : m; 
        const sDisplay = s < 10 ? '0' + s : s; 

        return `${hDisplay}:${mDisplay}:${sDisplay}`;
    }

    return (
        <span { ...props }>{ secondsToHms(time) }</span>
    );
}

export default ClockDisplay;