import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/header';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu/index';
import { useContext, useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/Information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import { SideBarContext } from '@/contexts/SideBarProvider';

const tempDataSize = [
    { name: 'M', amount: '1000' },
    { name: 'L', amount: '1000' },
    { name: 'S', amount: '1000' }
];

const PLUS = 'plus';
const MINUS = 'minus';
function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imgBox,
        contentBox,
        name,
        price,
        des,
        boxSize,
        size,
        labelSize,
        functionInfo,
        count,
        boxBtn,
        minus,
        plus,
        quantity,
        boxOr,
        boxOrSide,
        addFunction,
        info,
        activeDisableBtn
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);

    const [chooseSize, setChooseSize] = useState('');
    const [isQuantity, setIsQuantity] = useState(1);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'ADDITIONAL INFORMATION',
            content: <InformationProduct />
        },
        { id: 2, titleMenu: 'REVIEW (0)', content: <ReviewProduct /> }
    ];
    const handleSetMenuSelected = id => {
        setMenuSelected(id);
    };
    const handleSelectSize = size => {
        console.log(size);
        setChooseSize(size);
    };
    const handleClearSize = () => {
        setChooseSize('');
    };
    const handleSetQuantity = type => {
        if(isQuantity < 1 ) return;
        setIsQuantity((prev) => type === PLUS ? (prev +=1) : isQuantity === 1 ? 1 : (prev -= 1));
    };
    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {' '}
                            {'<'}Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imgBox}>
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                                alt=''
                            />
                        </div>
                        <div className={contentBox}>
                            <div className={name}>10K Yellow Gold</div>
                            <div className={price}>$99.99</div>
                            <div className={des}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.{' '}
                            </div>
                            <div className={labelSize}>Size: {chooseSize}</div>
                            <div className={boxSize}>
                                {tempDataSize.map((itemSize, index) => {
                                    return (
                                        <div
                                            className={size}
                                            key={index}
                                            onClick={() => {
                                                handleSelectSize(itemSize.name);
                                            }}
                                        >
                                            {itemSize.name}
                                        </div>
                                    );
                                })}
                            </div>
                            {chooseSize && (
                                <div
                                    onClick={handleClearSize}
                                    style={{
                                        fontSize: '14px',
                                        color: '#333333',
                                        fontWeight: '350',
                                        marginTop: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Clear
                                </div>
                            )}

                            <div className={functionInfo}>
                                <div className={count}>
                                    <div
                                        className={minus}
                                        onClick={() => {
                                            handleSetQuantity(MINUS);
                                        }}
                                    >
                                        -
                                    </div>
                                    <div className={quantity}>{isQuantity}</div>
                                    <div
                                        className={plus}
                                        onClick={() => {
                                            handleSetQuantity(PLUS);
                                        }}
                                    >
                                        +
                                    </div>
                                </div>
                                <div className={boxBtn}>
                                    <MyButton
                                        content={
                                            <div>
                                                <PiShoppingCartLight
                                                    style={{ fontSize: '14px' }}
                                                />{' '}
                                                ADD TO CART
                                            </div>
                                        }
                                        customClassname={
                                            !chooseSize && activeDisableBtn
                                        }
                                    />
                                </div>
                            </div>

                            <div className={boxOr}>
                                <div className={boxOrSide} />
                                <div
                                    style={{ fontSize: '12px', color: '#555' }}
                                >
                                    OR
                                </div>
                                <div className={boxOrSide} />
                            </div>

                            <div>
                                <MyButton
                                    content={
                                        <div>
                                            <PiShoppingCartLight
                                                style={{ fontSize: '14px' }}
                                            />{' '}
                                            BUY NOW
                                        </div>
                                    }
                                    customClassname={
                                        !chooseSize && activeDisableBtn
                                    }
                                />
                            </div>
                            <div className={addFunction}>
                                <div>
                                    <BsHeart style={{ fontSize: '18px' }} />
                                </div>
                                <div>
                                    <TfiReload style={{ fontSize: '18px' }} />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>
                                <div>
                                    SKU: <span>12345</span>
                                </div>
                                <div>
                                    Category: <span>Pullovers</span>
                                </div>
                            </div>

                            {dataAccordionMenu.map((item, index) => {
                                return (
                                    <AccordionMenu
                                        titleMenu={item.titleMenu}
                                        contentJsx={item.content}
                                        key={index}
                                        onClick={() => {
                                            handleSetMenuSelected(item.id);
                                        }}
                                        isSelected={menuSelected === item.id}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h2>Related products</h2>
                    </div>
                </MainLayout>
            </div>
        </div>
    );
}

export default DetailProduct;
