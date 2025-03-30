import axiosClient from './axiosClient';

const addProductToCart = async (data) => {
        return  await axiosClient.post('/cart', data);
        // return response.data;  // Trả về dữ liệu API trả về
};

const getCart = async (userId) =>{
    return await axiosClient.get(`/cart/${userId}`)
}

const deleteItem = async(body) =>{
    return await axiosClient.delete(`/cart/deleteItem`, {data:body});
};

const deleteAllItem = async(body) =>{
    return await axiosClient.delete(`cart/delete`,{data:body})
}




export { addProductToCart, getCart, deleteItem, deleteAllItem };
