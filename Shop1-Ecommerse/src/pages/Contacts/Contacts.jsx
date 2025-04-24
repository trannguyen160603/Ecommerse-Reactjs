import React from 'react';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MyFooter from '@components/Footer/Footer';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import MyButton from '@components/Button/Button';

function Contacts() {
    const {
        container,
        map,
        content,
        info,
        contactUs,
        address,
        phone,
        time,
        containerBoxIcon,
        inputInfo
    } = styles;
    const dataBoxIcon = [
        { type: 'fb', href: '#' },
        { type: 'ins', href: '#' },
        { type: 'ytb', href: '#' }
    ];
    return (
        <div className='contacts-page'>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    {/* Map */}
                    <div className={map}>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245374.12685450847!2d107.91381435774025!3d16.06700850817196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1745469172872!5m2!1svi!2s'
                            width='600'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    {/* Contact */}
                    <div className={content}>
                        <div className={info}>
                            <h2>Infomation</h2>
                            <div className={address}>
                                <IoHomeOutline /> Address
                                <p>
                                    7895 Piermont Dr NE Albuquerque, NM 198866
                                </p>
                            </div>

                            <div className={phone}>
                                <MdOutlinePhoneInTalk /> Phones
                                <p>+391 (0)35 2568 4593 hello@domain.com</p>
                            </div>

                            <div className={time}>
                                <IoTimeOutline /> We're Open
                                <p>Every day 11am to 7pm</p>
                            </div>

                            <div className={containerBoxIcon}>
                                {dataBoxIcon.map((item, index) => (
                                    <BoxIcon
                                        key={index}
                                        type={item.type}
                                        href={item.href}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={contactUs}>
                            <h2>Contact Us</h2>
                            <p>If you’ve got great products your looking to work with us then drop us a line.</p>
                            <div className={inputInfo}>
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Email' />
                            </div>
                            <textarea placeholder='Message' />
                            <MyButton content="Send Now"/>
                        </div>
                    </div>
                </div>
            </MainLayout>
            <MyFooter />
        </div>
    );
}

export default Contacts;
