import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/header';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu/index';
import {  useContext, useEffect, useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/Information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import { getDetailProduct, getRelatedProduct } from '@/apis/productService';
import {  useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommo/LoadingTextCommo';
import SlideCommon from '@components/SlideCommon/SlideCommon';
import MyFooter from '@components/Footer/Footer';
import { ToastContext } from '@/contexts/ToastProvider';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';
import { handleAddProductToCartCommon } from '@/Untils/helper';
import { addProductToCart } from '@/apis/CartService';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';


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
        activeDisableBtn,
        loading,
        titleRelated,
        emptyData,
        navigateSectionLeft
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);
    const [chooseSize, setChooseSize] = useState('');
    const [isQuantity, setIsQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingBuyNow, setIsLoadingBuyNow] = useState(false);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const navigate = useNavigate();
    const param = useParams();
    

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
    const handleAdd = async () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            chooseSize,
            param.id,
            isQuantity,
            setIsLoading,
            handleGetListProductCart
        );
    };
    const handleBuyNow = () =>{
        const data = {
            userId,
            productId:param.id,
            quantity: isQuantity,
            size: chooseSize,
        };
        console.log(data);
        
        setIsLoadingBuyNow(true)
        addProductToCart(data)
        .then((res) =>{
            navigate('/cart');
            toast.success('Product added to cart successfully!');
            setIsLoadingBuyNow(false)
       })
        .catch((err) =>{
             toast.error('Failed to add product to cart');
             setIsLoadingBuyNow(false)
        })
    }

    const fetchDataDetail = async (id) =>{
       
        setIsLoading(true);
        try{
            const data = await getDetailProduct(id);
            setData(data);        
            setIsLoading(false)    
        }catch(error){
            console.log(error);
            setIsLoading(false)    
            
        }
    };

    const fetchDataRelatedProduct = async (id) =>{
        setIsLoading(true)
        try{
            const data = await getRelatedProduct(id);
            setRelatedData(data);            
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(() =>{
        if(param.id){
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    },[param]);

    //navigate shop
    const handleNavigateShop = () =>{
        navigate('/shop');
        if(setIsOpen){
            setIsOpen(false)
        }
    }
   
    
    return (
        <div>
            <MyHeader />
            
            <div className={container}>
            <MainLayout>
                    <Breadcrumb namePage= "Men" onPageClick= {handleNavigateShop}/>
                {isLoading ? (<div className={loading}><LoadingTextCommon/></div>) :(
                
                    <>
                    {!data ? <div className={emptyData}>No result.... </div> : <div className={contentSection}>
                    <div className={imgBox}>
                        {data?.images.map((src) =>{
                           return <img src={src} alt="" />
                        })}                     
                    </div>

                    
                        <div className={contentBox}>
                        <div className={name}>{data?.name}</div>
                        <div className={price}>${data?.price}</div>
                        <div className={des}>
                            {data?.description}
                        </div>
                        <div className={labelSize}>Size: {chooseSize}</div>
                        <div className={boxSize}>
                            {data?.size.map((itemSize, index) => {
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
                            <div className={boxBtn} onClick={() =>{handleAdd()}}>
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

                        <div className={boxBtn} onClick={handleBuyNow} >
                            <MyButton
                                content={ isLoadingBuyNow ? (<LoadingTextCommon/>) : (
                                    <div>
                                        <PiShoppingCartLight
                                            style={{ fontSize: '14px' }}
                                        />{' '}
                                        BUY NOW
                                    </div>)
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
                </div>}
                    </>
                 ) }

                <div>
                    <div className={titleRelated}>Related products</div>
                    <SlideCommon data={relatedData} isProductItem showItem={4}/>
                </div>
            </MainLayout>
        </div>
        <MyFooter/>
            
        </div>
    );
}

export default DetailProduct;
