import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
    const {container } = styles;
    return (  
        <>
            <div className={container}>
                <MyHeader/>
                <Banner/>       
                <Info/>
                <AdvanceHeadling />  
                {/* <HeadingListProduct/>        */}
          </div>
        </>
    );
}

export default HomePage;