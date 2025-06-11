import { createOrder } from '@/apis/orderService';
import InputCustom from '@components/InputCommon2/Input';
import axios from 'axios';
import cls from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Styles.module.scss';
import { useNavigate } from 'react-router-dom';
import MyButton from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
import { addProductToCart, deleteItem } from '@/apis/CartService';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import { AiOutlineClose } from 'react-icons/ai';
import LoadingTextCommon from '@components/LoadingTextCommo/LoadingTextCommo';
import LoadingCart from '@pages/Cart/steps/LoadingCart';

const CN_BASE = 'https://countriesnow.space/api/v0.1';

function Checkout() {
    const {
        container,
        title,
        coupon,
        inputCoupon,
        show,
        hidden,
        dash,
        leftBody,
        titleAdd,
        rightBody,
        row,
        row2Column,
        items,
        item,
        subTotal,
        total,
        payment,
        btn,
        itemQuantityPrice,
        productName,
        removeItem
    } = styles;
    const [showCoupon, setShowCoupon] = useState(false);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const navigate = useNavigate();

    const {
        listProductCart,
        handleGetListProductCart,
        userId,
        setIsLoading,
        isLoading
    } = useContext(SideBarContext);
    const formRef = useRef();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const handleShowCoupon = () => {
        setShowCoupon(!showCoupon);
    };

    const handleQuantityChange = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity: parseInt(quantity, 10),
            size,
            isMultiple: true
        };

        setIsLoading(true);
        addProductToCart(data)
            .then(() => {
                handleGetListProductCart(userId, 'cart');
            })
            .catch(err => {
                setIsLoading(false);
                console.error(err);
            });
    };

    const handleDeleteItemCart = productId => {
        setIsLoading(true);
        deleteItem({ userId, productId })
            .then(() => handleGetListProductCart(userId, 'cart'))
            .then(() => setIsLoading(false))
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    //totalSum
    const totalSum = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit(); // hoặc formRef.current.dispatchEvent(new Event('submit'))
    };
    const onSubmit = async data => {
        try {
            const res = await createOrder(data);
            navigate(
                `/order?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios.get(`${CN_BASE}/countries/iso`).then(res => {
            setCountries(
                res.data.data.map(c => ({ value: c.name, label: c.name }))
            );
        });
    }, []);

    useEffect(() => {
        const country = watch('country');
        if (!country) return;

        if (country === 'Vietnam' && !localStorage.getItem('listCities')) {
            axios
                .get('https://provinces.open-api.vn/api/?depth=2')
                .then(res => {
                    localStorage.setItem(
                        'listCities',
                        JSON.stringify(res.data)
                    );
                    setCities(
                        res.data.map(item => ({
                            label: item.name,
                            value: item.codename
                        }))
                    );
                });
            return;
        }

        if (localStorage.getItem('listCities')) {
            const data = JSON.parse(localStorage.getItem('listCities'));
            setCities(
                data.map(item => ({ label: item.name, value: item.codename }))
            );
        }
    }, [watch('country')]);

    useEffect(() => {
        const selectedCity = watch('cities');
        if (!selectedCity) return;

        if (localStorage.getItem('listCities')) {
            const data = JSON.parse(localStorage.getItem('listCities'));
            const selectedData = data.find(
                item => item.codename === selectedCity
            );
            const statesCustom =
                selectedData?.districts.map(item => ({
                    label: item.name,
                    value: item.codename
                })) || [];
            setStates(statesCustom);
        }
    }, [watch('cities')]);

    return (
        <div className={container}>
            <div className={leftBody}>
                <div className={coupon}>
                    <p>
                        Have a coupon?{' '}
                        <span onClick={handleShowCoupon}>
                            Click here to enter
                        </span>
                    </p>
                    {showCoupon && (
                        <div className={cls(inputCoupon ? show : hidden)}>
                            <InputCustom
                                type={'text'}
                                placeholder={'Enter your coupon code'}
                            />
                            <MyButton
                                content='APPLY BUTTON'
                                isPrimary={false}
                            />
                        </div>
                    )}
                </div>
                <p className={title}>BILLING DETAILS</p>
                <div className={dash}></div>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cls(row, row2Column)}>
                        <InputCustom
                            label={'First Name'}
                            type={'text'}
                            isRequired
                            register={register('firstName', {
                                required: true,
                                maxLength: 25
                            })}
                            isError={errors.firstName}
                        />
                        <InputCustom
                            label={'Last Name'}
                            type={'text'}
                            isRequired
                            register={register('lastName', {
                                required: true,
                                maxLength: 25
                            })}
                            isError={errors.lastName}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Country / Region'}
                            dataOptions={countries}
                            isRequired
                            register={register('country', { required: true })}
                            isError={errors.country}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Street address'}
                            type={'text'}
                            isRequired
                            register={register('street', { required: true })}
                            isError={errors.street}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Town / City'}
                            dataOptions={cities}
                            isRequired
                            register={register('cities', { required: true })}
                            isError={errors.cities}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'State'}
                            dataOptions={states}
                            isRequired
                            register={register('state', { required: true })}
                            isError={errors.state}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Phone'}
                            type={'text'}
                            isRequired
                            register={register('phone', { required: true })}
                            isError={errors.phone}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'ZIP code'}
                            type={'text'}
                            isRequired
                            register={register('zipCode', { required: true })}
                            isError={errors.zipCode}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Email Address'}
                            type={'text'}
                            isRequired
                            register={register('email', { required: true })}
                            isError={errors.email}
                        />
                    </div>

                    <span className={titleAdd}>Additional Information</span>
                    <div className={dash}></div>

                    <div className={row}>
                        <InputCustom
                            label={'Order Notes (optional)'}
                            type={'textArea'}
                            placeholder={
                                'Notes about your order, e.g. special notes for delivery.'
                            }
                            register={register('orderNotes')}
                        />
                    </div>
                </form>
            </div>

            <div className={rightBody}>
                {isLoading && <LoadingTextCommon />}
                <p className={title}>Your Order</p>
                <div className={items}>
                    {listProductCart.map((product, index) => (
                        <div className={item} key={index}>
                            <img src={product.images[0]} alt='' />
                            <div>
                                <div className={productName}>
                                    {product.name}
                                </div>
                                <div className={itemQuantityPrice}>
                                    <SelectBox
                                        options={showOptions}
                                        getValue={e =>
                                            handleQuantityChange(
                                                product.userId,
                                                product.productId,
                                                e,
                                                product.size
                                            )
                                        }
                                        type='show'
                                        defaultValue={product.quantity}
                                    />
                                    <AiOutlineClose size={10} color='black' />
                                    <div>${product.price}</div>
                                </div>
                                <p>Size: {product.size}</p>
                                <p>
                                    Subtotal: $
                                    {(product.price * product.quantity).toFixed(
                                        2
                                    )}
                                </p>
                                <p
                                    className={removeItem}
                                    onClick={() =>
                                        handleDeleteItemCart(product.productId)
                                    }
                                >
                                    Remove
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={subTotal}>
                    Subtotal <p>${totalSum.toFixed(2)}</p>
                </div>
                <div className={total}>
                    TOTAL <p>${totalSum.toFixed(2)}</p>
                </div>
                <div className={dash}></div>

                <div className={payment}>
                    <div>
                        <input
                            type='radio'
                            id='qr'
                            name='fav_language'
                            value='qr'
                        />
                          <label htmlFor='qr'>QR CODE</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='cod'
                            name='fav_language'
                            value='cod'
                        />
                          <label htmlFor='cod'>Cash on delivery</label>
                    </div>
                </div>
                <div className={btn}>
                    <MyButton
                        content={'PLACE ORDER'}
                        onClick={handleExternalSubmit}
                    />
                </div>
                <PaymentMethods />
            </div>
        </div>
    );
}

export default Checkout;
