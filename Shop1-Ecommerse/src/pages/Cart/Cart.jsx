import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import Steps from '@pages/Cart/steps/Steps';
import Content from '@pages/Cart/components/content';
import styles from './styles.module.scss';
import { useState } from 'react';
import Checkout from '@pages/Cart/components/Checkout/Checkout';

function Cart() {
    const { container } = styles;
    const [currentStep, setCurrentStep] = useState(1);
    console.log(currentStep);

    const handleRenderContent = () => {
        switch (currentStep){
            case 1:
                return <Content />;
            case 2:
                return <Checkout/>;
            case 3:
                return <h1>order</h1>
    }
    };
    
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps setCurrentStep={setCurrentStep} currentStep={currentStep} />
                <MainLayout>
                    {handleRenderContent()}
                </MainLayout>
            </div>
            <MyFooter />
        </>
    );
}

export default Cart;
