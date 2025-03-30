import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import Steps from '@pages/Cart/steps/Steps';
import Content from '@pages/Cart/components/content';
import styles from './styles.module.scss';

function Cart() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Content />
                </MainLayout>
            </div>
            <MyFooter />
        </>
    );
}

export default Cart;
