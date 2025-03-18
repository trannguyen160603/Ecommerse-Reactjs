import axiosClient from './axiosClient';

const getProduct = async (query = {}) => { 
    const { sortType, page, limit} = query; // Giá trị mặc định
    const queryLimit = limit === 'All' ? '' : `limit=${limit}`;
    const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&${queryLimit}`);
    
    return res.data;
};

export { getProduct };
