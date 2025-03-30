import Stepper from '@pages/Cart/steps/Stepper';
import styles from '../styles.module.scss';

function Steps() {
    const {containerSteps, steps, line, titleStep} = styles;
    const dataStepper =[
        {number: 1, content:"SHOPPING CART"},
        {number: 2, content:"CHECKOUT"},
        {number: 3 , content:"ORDER STATUS"},
    ];
    return (  
        <div className={containerSteps}>
            <div className={steps}>
            {dataStepper.map((item, index) =>{
                return <>
                <Stepper key={index} number={item.number} content={item.content} isDisabled={index !== 0}/>
                {index !== dataStepper.length - 1 && (<div className={line}></div>)}
                </>
            })}
            </div>
            <div className={titleStep}>
                <p>You are out of time! Checkout now to avoid losing your order!</p>
            </div>
        </div>
    );
}

export default Steps;
