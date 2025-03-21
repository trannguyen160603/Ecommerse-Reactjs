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


// const addProductToCart = async (data) => {
//     try {
//         const response = await axiosClient.post('/cart', data);
//         return response.data; // Đảm bảo trả về dữ liệu hợp lệ
//     } catch (error) {
//         console.error('Error adding product to cart:', error.response?.data || error.message);
//         throw error; // Ném lỗi để xử lý ở component gọi API
//     }
// };


// const getCart = async (userId) => {
//     try {
//         const response = await axiosClient.get(`/cart/${userId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching cart:', error);
//         return { data: [] };  // Trả về mảng rỗng nếu lỗi
//     }
// };

export { addProductToCart, getCart, deleteItem };
