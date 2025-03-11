import { createContext, useState } from "react";

// 👉 Tạo Context mới có tên SideBarContext
export const SideBarContext = createContext();

// 👉 Tạo Provider để bọc ứng dụng và cung cấp dữ liệu context
export const SideBarProvider = ({ children }) => {
    // 🟢 isOpen: Xác định sidebar đang mở (true) hay đóng (false)
    // 🟢 setIsOpen: Hàm để thay đổi trạng thái của isOpen
    const [isOpen, setIsOpen] = useState(false);

    // 🟢 type: Xác định loại sidebar (ví dụ: "menu", "cart", "profile", v.v.)
    // 🟢 setType: Hàm để thay đổi loại sidebar
    const [type, setType] = useState('');

    return (
        // 🔥 Cung cấp giá trị cho các component con thông qua Context.Provider
        <SideBarContext.Provider value={{ isOpen, setIsOpen, type, setType }}>
            {children} {/* 👈 Đây là nơi chứa tất cả component con */}
        </SideBarContext.Provider>
    );
};
