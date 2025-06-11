import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/CartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [detailProduct, setDetailProduct] = useState(null);
    const userId = Cookies.get('userId');

    const handleGetListProductCart = (userId, type) => {
        if (!userId || type !== 'cart') return;
        
        setIsLoading(true);
        getCart(userId)
            .then(res => {
                setListProductCart(res.data.data || []);
                setIsLoading(false);
            })
            .catch(err => {
                setListProductCart([]);
                setIsLoading(false);
            });
    };

    
    useEffect(() => {
        if (!userId) {
            console.warn("Không tìm thấy userId trong cookie!");
            return;
        }
        handleGetListProductCart(userId, 'cart');
    }, [userId]);

    // Khi mở Sidebar, luôn cập nhật giỏ hàng
    // useEffect(() => {
    //     if (isOpen) {
    //         handleGetListProductCart(userId, 'cart');
    //     }
    // }, [isOpen]);

    return (
        <SideBarContext.Provider
            value={{
                isOpen,
                setIsOpen,
                type,
                setType,
                handleGetListProductCart,
                listProductCart,
                isLoading,
                setIsLoading,
                detailProduct,
                setDetailProduct,
                userId,
                setListProductCart
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};
