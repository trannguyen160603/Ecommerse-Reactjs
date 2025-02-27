import styles from '../styles.module.scss';

function Menu({ content, href }) {
    const {menu} = styles;
    return <div className={menu} href={href}>{content}</div>; // ✅ Chỉ render chuỗi
}
export default Menu;