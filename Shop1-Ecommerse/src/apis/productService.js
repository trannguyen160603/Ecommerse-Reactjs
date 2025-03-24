import axiosClient from './axiosClient';

const getProduct = async (query = {}) => { 
    try {
        const { sortType = 0, page = 1, limit = 10 } = query;
        const queryLimit = limit === 'All' ? '' : `limit=${limit}`;
        const url = `/product?sortType=${sortType}&page=${page}&${queryLimit}`;

        const res = await axiosClient.get(url);

        if (!res?.data) {
            console.error("API trả về null hoặc không có dữ liệu");
            return null;
        }
        return res.data;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error.response?.status, error.message);
        return null;
    }
};

const getDetailProduct = async (id) =>{
    const res = await axiosClient.get(`/product/${id}`);
    return res.data;    
}

const getRelatedProduct = async(id) =>{
    const res = await axiosClient.get(`/related-products/${id}`)
    return res.data.relatedProducts;
}

export { getProduct , getDetailProduct, getRelatedProduct};
