import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SlideCommon from '@components/SlideCommon/SlideCommon';
import SelectBox from '@pages/OurShop/components/SelectBox';
import MyButton from '@components/Button/Button';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function DetailProduct() {
    const {
        container,
        titleProduct,
        priceProduct,
        desProduct,
        boxSize,
        sizeProduct,
        labelSize,
        boxAddToCart,
        boxBtn,
        boxOr,
        boxOrSide,
        boxBuyNow,
        boxCompare,
        boxWishlist,
        labelBoxCompare,
        labelBoxWishlist,
        boxFooter,
        boxIconFooter,
        boxIcon
    } = styles;
    const { detailProduct } = useContext(SideBarContext);
    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    console.log(detailProduct);

    return (
        <div className={container}>
            <SlideCommon data={detailProduct.images} />
            <div className={titleProduct}>{detailProduct.name}</div>
            <div className={priceProduct}>${detailProduct.price}</div>
            <div className={desProduct}>{detailProduct.description}</div>
            <div className={labelSize}>Size:</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => {
                    return (
                        <div className={sizeProduct} key={index}>
                            {item.name}
                        </div>
                    );
                })}
            </div>
            <div className={boxAddToCart}>
                <SelectBox options={showOptions} type='show' />
                <div>
                    <MyButton
                        content={
                            <div className={boxBtn}>
                                <PiShoppingCartLight
                                    style={{ fontSize: '15px' }}
                                />{' '}
                                ADD TO CART
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={boxOrSide} />
                <div style={{ fontSize: '12px', color: '#555' }}>OR</div>
                <div className={boxOrSide} />
            </div>

            <div className={boxBuyNow}>
                <MyButton
                    content={
                        <div style={{fontSize:'12px', fontWeight:'300'}}>
                            <PiShoppingCartLight style={{ fontSize: '15px' }} />{' '}
                            BUY NOW
                        </div>
                    }
                />
            </div>

            <div className={boxCompare}>
                    <TfiReload/>
                    <div className={labelBoxCompare}>Add to Compare</div>
            </div>
            <div className={boxWishlist}>
                    <BsHeart/>
                    <div className={labelBoxWishlist}>Browse wishlist</div>
            </div>

            <div>
            <div className={boxFooter}>
                SKU: <span >789</span>
            </div>
            <div className={boxFooter}>
                Category: <span >Pullovers</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span >3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share: <div className={boxIcon}>
                    <FaXTwitter/>
                    <FaFacebookF/>
                    <FaVk/>
                    <FaPinterestP/>
                    <IoMailOutline/>
                    <CiLinkedin/>
                    <FaWhatsapp/>
                    <FaSkype/>
                </div>
            </div>
            </div>

            
        </div>
    );
}

export default DetailProduct;
