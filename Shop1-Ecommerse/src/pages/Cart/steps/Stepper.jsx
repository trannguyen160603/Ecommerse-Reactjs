import styles from '../styles.module.scss';
import cls from 'classnames';
function Stepper({number, content, isDisabled, setCurrentStep}) {
    const {stepper, numberStepper, textStepper, isDisabledNumber, isDisabledText} = styles;
   
    return ( 
        <div className={stepper}    onClick={() => setCurrentStep(number)}>
        <div className={cls(numberStepper, {[isDisabledNumber] : isDisabled })}>{number}</div>
        <div className={cls(textStepper, {[isDisabledText] : isDisabled})}>{content}</div>     
        </div>
     );
}

export default Stepper;