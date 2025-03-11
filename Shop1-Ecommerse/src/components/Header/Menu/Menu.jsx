import styles from '../styles.module.scss';
import { SideBarContext } from "@/contexts/SideBarProvider"; // Import Context
import { useContext } from "react";

function Menu({ content, href }) {
    const {menu} = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);  // Lấy từ Context

    const handleClickShowLogin = () =>{
        setType('login'); // Thay đ��i type của SidebarProvider để hiển thị Login Sidebar
        setIsOpen(true); // Mở Sidebar  // chuyển sang SidebarProvider.jsx và SideBarProvider.jsx để xử lý
    }
    return <div className={menu} href={href} onClick= {handleClickShowLogin}>{content}</div>; // ✅ Chỉ render chuỗi
}
export default Menu;