import { useContext, useState } from 'react';
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
import cls from 'classnames';
import { addProductToCart } from '@/apis/CartService';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie'
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
        boxIcon,
        isActive
    } = styles;

    const { detailProduct,setType, handleGetListProductCart,isLoading, setIsLoading, setIsOpen} = useContext(SideBarContext);
    const [chooseSize, setChooseSize] = useState('');
    const [quantity, setQuantity] = useState('1');
    const {toast} = useContext(ToastContext);
     const userId = Cookies.get('userId');
    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];
    const handleGetSize = (value) =>{
        setChooseSize(value);      
    }
    const handleClearSize = () =>{
        setChooseSize('');
    }
     const handleGetQuantity = (value) =>{
        setQuantity(value)
     }
     const handleAddToCart = async () => {
        if (isLoading) return; // Ngăn spam click
        setIsLoading(true);    

        const data = {
            userId,
            productId: detailProduct?._id || '',
            quantity,
            size: chooseSize,
            isMulTiple: true
        };
        console.log(data);
        
        setIsOpen(false)
        addProductToCart(data)
        .then((res) =>{
            setIsOpen(true)
            setType('cart');
            toast.success('Product added to cart successfully!');
            setIsLoading(false);
            handleGetListProductCart(userId,'cart')
        })
        .catch((err) =>{
             toast.error('Failed to add product to cart');
             setIsLoading(false);
        })
    };

    return (
        <div className={container}>
            <SlideCommon data={detailProduct.images} />
            <div className={titleProduct}>{detailProduct.name}</div>
            <div className={priceProduct}>${detailProduct.price}</div>
            <div className={desProduct}>{detailProduct.description}</div>
            <div className={labelSize}>Size: {chooseSize}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => {
                    return (
                        <div onClick={(() =>{
                            handleGetSize(item.name)
                        })} className={cls(sizeProduct,{
                            [isActive] : item.name === chooseSize
                        })} key={index}>
                            {item.name}
                        </div>
                    );
                })}
            </div>
            {chooseSize && <div onClick={handleClearSize} style={{fontSize:'14px', color:'#333333', fontWeight:'350', marginTop:'10px', cursor:'pointer'}}>Clear</div>}
            <div className={boxAddToCart}>
                <SelectBox options={showOptions} type='show' defaultValue ={quantity} getValue = {handleGetQuantity}/>
                <div>
                    <MyButton
                        onClick={handleAddToCart}
                        content={
                            <div className={boxBtn} >
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
