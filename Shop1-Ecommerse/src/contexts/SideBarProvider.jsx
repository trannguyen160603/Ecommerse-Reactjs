import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/CartService';
import Cookies from 'js-cookie';

// Tạo Context mới có tên SideBarContext
export const SideBarContext = createContext();

// Tạo Provider để bọc ứng dụng và cung cấp dữ liệu context
export const SideBarProvider = ({ children }) => {
    // isOpen: Xác định sidebar đang mở (true) hay đóng (false)
    // setIsOpen: Hàm để thay đổi trạng thái của isOpen
    const [isOpen, setIsOpen] = useState(false);

    // type: Xác định loại sidebar (ví dụ: "menu", "cart", "profile", v.v.)
    // setType: Hàm để thay đổi loại sidebar
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const userId = Cookies.get('userId');
    const[isLoading, setIsLoading] =useState(false);
    const [detailProduct, setDetailProduct] = useState(null);

    const handleGetListProductCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true)
            getCart(userId)
                .then(res => {
                    setListProductCart(res.data.data);
                    setIsLoading(false)
                })
                .catch(err => {
                    setListProductCart([]);
                    setIsLoading(false)
                });
        }
    };

    useEffect(() =>{
        handleGetListProductCart(userId,'cart')
    })

    return (
        //Cung cấp giá trị cho các component con thông qua Context.Provider
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
                setDetailProduct
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};
