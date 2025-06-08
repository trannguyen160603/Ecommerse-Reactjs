import { createContext } from "react";  // 👉 Import createContext để tạo Context
import { ToastContainer, toast } from 'react-toastify'; // 👉 Import toast từ react-toastify
import 'react-toastify/dist/ReactToastify.css'; // 👉 Import CSS để hiển thị toast notifications

//  Tạo Context mới có tên ToastContext
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    // Tạo object chứa hàm `toast` để cung cấp cho các component con
    const value = {
        toast, //Hàm này có thể được gọi từ bất kỳ component nào trong ứng dụng
    };

    return (
        //Cung cấp ToastContext cho toàn bộ ứng dụng
        <ToastContext.Provider value={value}>
            {children} {/* Hiển thị các component con */}
            <ToastContainer /> {/*  Hiển thị container chứa các thông báo */}
        </ToastContext.Provider>
    );
};
