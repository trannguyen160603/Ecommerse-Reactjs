import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Breadcrumb({namePage, onPageClick}) {
    const { navigateSection, navigateSectionLeft } = styles;
    const navigate = useNavigate();
   
    const handleNavigatePrev = () =>{
        navigate(-1);
    }
    const handleNavigateHome = () =>{
        navigate('/');
    }
    return (
        <div className={navigateSection}>
            <div className={navigateSectionLeft}>
                <div style={{ cursor: 'pointer' }} onClick={handleNavigateHome}>
                    Home
                </div>{' '}
                {'>'}{' '}
                <div style={{ cursor: 'pointer' }} onClick={onPageClick}>
                    {namePage}
                </div>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={handleNavigatePrev}>
                {' '}
                {'<'}Return to previous page
            </div>
        </div>
    );
}

export default Breadcrumb;
