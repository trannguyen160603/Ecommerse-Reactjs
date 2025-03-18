import { createContext, useEffect, useState } from "react";
import { getProduct } from "@/apis/productService";

// Tạo Context mới có tên SideBarContext
export const OurShopContext = createContext();

// Tạo Provider để bọc ứng dụng và cung cấp dữ liệu context
export const OurShopProvider = ({ children }) => {
 
    const sortOptions = [
        {label:'Default sorting',value: '0'},
        {label:'Sort by popularity',value: '1'},
        {label:'Sort by average rating',value: '2'},
        {label:'Sort by latest',value: '3'},
        {label:'Sort by price: low to hight',value: '4'},
        {label:'Sort by price: hight to low',value: '5'},
    ];

    const showOptions = [
        {label: '8', value:'8'},
        {label: '12', value:'12'},
        {label: 'All', value:'All'}
    ];

    const [sortId, setSortId] = useState('0')
    const [showId, setShowId] = useState('8')
    const [isShowGrid, setIsShowGrid] = useState(true)
    const [products, setProducts] = useState([]);

    const values ={
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products,
        isShowGrid
    }

    useEffect(() =>{
        const query = {
            sortType: sortId,
            page: 1,
            limit:showId
        };  
     getProduct(query).then((res) => {
        setProducts(res.contents)
     }).catch((err) => {
        console.log(err);
        
     })
     

    },[sortId, showId])


    return (
        // Cung cấp giá trị cho các component con thông qua Context.Provider
        <OurShopContext.Provider value={values}>
            {children} 
        </OurShopContext.Provider>
    );
};
