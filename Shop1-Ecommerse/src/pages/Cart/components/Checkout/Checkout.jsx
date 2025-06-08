import InputCommon2 from '@components/InputCommon2/Input';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';
import { useState } from 'react';
function Checkout() {
    const { container, leftBody, rightBody, name, dash, coupon, show, hidden } =
        styles;
    const [showCoupon, setShowCoupon] = useState(false);
    const handleRenderCoupon = () => {
        setShowCoupon(!showCoupon);
    };
    return (
        <div className={container}>
            {/* left */}
            <div className={leftBody}>
                <div className={coupon}>
                    <p style={{ color: '#333' }}>
                        Have a coupon?{' '}
                        <a
                            onClick={handleRenderCoupon}
                            style={{
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                fontWeight: 350
                            }}
                        >
                            Click here to enter
                        </a>
                    </p>

                    <div className={`${showCoupon ? show : hidden}`}>
                        <InputCommon2 type='text' placeholder='Coupon code' />
                        <MyButton content='Apply Coupon' />
                    </div>
                </div>

                <p>BILLING DETAILS</p>
                <div className={dash}></div>
                <div className={name}>
                    <InputCommon2
                        label='First Name'
                        type='text'
                        isRequired='true'
                    />
                    <InputCommon2
                        label='Last Name'
                        type='text'
                        isRequired='true'
                    />
                </div>
                <InputCommon2 label='Company Name (optional)' type='text' />
                <InputCommon2
                    label='Country / Region'
                    isRequired='true'
                    placeholder='United States'
                />
                <InputCommon2
                    label='Street Address'
                    placeholder='House number and street name'
                    type='text'
                    isRequired='true'
                />
                <InputCommon2 type='text' placeholder='Apartment, suite, unit, etc. (optional)' />
                <InputCommon2
                    label='Town / City'
                    type='text'
                    isRequired='true'
                />
                <InputCommon2 label='State' type='text' isRequired='true' />
                <InputCommon2 label='Phone' type='text' isRequired='true' />
                <InputCommon2 label='ZIP code' type='text' isRequired='true' />
                <InputCommon2
                    label='Email Address'
                    type='text'
                    isRequired='true'
                />
                <p>ADDITIONAL INFORMATION</p>
                <div className={dash}></div>
                <InputCommon2
                    label='Order Notes (optional)'
                    type='textArea'
                    isRequired='true'
                    placeholder='Notes about your order, e.g. special notes for delivery.'
                />
            </div>
            {/* right */}
            <div className={rightBody}>
                <p>YOUR ORDER</p>
                <div className={dash}></div>
            </div>
        </div>
    );
}

export default Checkout;
