import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
function AdvanceHeadling() {
    const {container, headLine, containerMiddleBox, des, title} = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headLine}></div>
                <div className={containerMiddleBox}>
                    <span className={des}>don't miss super offers</span>
                    <h2 className={title}>Our best products</h2>
                </div>
                <div className={headLine}></div>
            </div>
            <HeadingListProduct />
        </MainLayout>
    );
}

export default AdvanceHeadling;