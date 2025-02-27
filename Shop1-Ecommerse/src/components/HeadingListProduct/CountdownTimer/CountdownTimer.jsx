import { useState, useEffect } from "react";
import styles from './styles.module.scss';
function CountdownTimer({ targetTime }) {
    const {countdownContainer,timeBox, label } = styles;
    const calculateTimeLeft = () => {
        const now = new Date().getTime(); // Thời gian hiện tại
        const difference = targetTime - now; // Khoảng cách đến thời gian đích
    
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Hết giờ
        }
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft()); // Cập nhật mỗi giây
        }, 1000);
    
        return () => clearInterval(timer); // Xóa timer khi unmount
    }, [targetTime]);
    
    return (
        <div className={styles.countdownContainer}>
        {timeLeft ? (
            <>
                <span className={styles.countdownItem}>
                    {String(timeLeft.days).padStart(2, "0")} Days
                </span>
                <span className={styles.countdownItem}>
                    {String(timeLeft.hours).padStart(2, "0")} Hours
                </span>
                <span className={styles.countdownItem}>
                    {String(timeLeft.minutes).padStart(2, "0")} Minutes
                </span>
                <span className={styles.countdownItem}>
                    {String(timeLeft.seconds).padStart(2, "0")} Seconds
                </span>
            </>
        ) : (
            <span>Time's up!</span>
        )}
    </div>
    );
    
}

export default CountdownTimer;

