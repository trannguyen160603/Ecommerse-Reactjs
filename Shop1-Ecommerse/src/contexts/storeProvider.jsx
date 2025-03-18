import { useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";
import { getInfo } from "@/apis/authService";

export const StoreContext = createContext(null); 

export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(null);

    const handleLogOut = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userIf');
        setUserInfo(null)
        Window.location.reload();
    };

    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => {
                    setUserInfo(res.data.data);
                })
                .catch((err) => {
                    console.error("Error fetching user info:", err);
                });
        }
    }, [userId]); 


    return (
        <StoreContext.Provider  value={{ userInfo, handleLogOut, setUserId }}> 
            {children}
        </StoreContext.Provider>
    );
};
