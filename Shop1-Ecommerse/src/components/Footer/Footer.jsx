import styles from "./styles.module.scss";
import { dataMenuFooter } from "@components/Footer/constants"; 
import Menu from "../Header/Menu/Menu";

function MyFooter() {
    const { container, containerImg, menu, menuItem, titleFooter, iconFooter, copyright } = styles; 

    return (
        <>
            <div className={container}>
                <div className={containerImg}>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" alt="" />
                </div>
                <div className={menu}>
                    {dataMenuFooter.map((item) => (
                        <Menu className={menuItem} key={item.name} content={item.name} href={item.href} />
                    ))}
                </div>
                <div className={titleFooter}>Guaranteed safe ckeckout</div>
                <div className={iconFooter}>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
                </div>
                <div className={copyright}>
                    © 2024 XStore theme. Created by <a href="https://8theme.com/" target="_blank" rel="noopener noreferrer">8theme</a> – WordPress WooCommerce themes.
                </div>
            </div>
        </>
    );
}

export default MyFooter;
