import useTimeParser from "./hooks/useTimeParser";

function ClockDisplay ({ time, ...props }) {

    const { parseSecondsToHMS } = useTimeParser();

    return (
        <span { ...props }>
        { parseSecondsToHMS(time) }
        </span>
    );
}

export default ClockDisplay;