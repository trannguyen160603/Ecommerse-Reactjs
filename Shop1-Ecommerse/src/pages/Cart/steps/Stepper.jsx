import styles from '../styles.module.scss';
import cls from 'classnames';
function Stepper({number, content, isDisabled}) {
    const {stepper, numberStepper, textStepper, isDisabledNumber, isDisabledText} = styles;
   
    return ( 
        <div className={stepper}>
        <div className={cls(numberStepper, {[isDisabledNumber] : isDisabled })}>{number}</div>
        <div className={cls(textStepper, {[isDisabledText] : isDisabled})}>{content}</div>     
        </div>
     );
}

export default Stepper;