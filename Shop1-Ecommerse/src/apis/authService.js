import  axiosClient from './axiosClient'

const register = async(body) =>{
    return await axiosClient.post('/register', body);
    
};

const signIn = async (body) =>{
    return await axiosClient.post('/login', body)
};

const getInfo = async () =>{
    return await axiosClient.get('/user/info/adbf1856-e738-424a-b128-2665a79c70bc')

}
export {register, signIn, getInfo};