import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        console.log('set time out')
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])


    useEffect(() => {
        console.log('set interval')
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - 100)
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [])


    return <>
        <progress id="question-time" min={0} max={timeout} value={remainingTime} />
    </>;
}