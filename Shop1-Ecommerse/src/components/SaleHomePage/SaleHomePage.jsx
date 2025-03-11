import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import useTranslateXImage from "@/Hooks/useTranslateXImage";

function SaleHomePage() {
    const { container, containerContent, title, content, btn } = styles;
    const { translateXPosition } = useTranslateXImage();

    return (
        <>
            <div className={container}>
                <div
                    style={{
                        transform: `translateX(${translateXPosition}px)`,
                        transition: "transform 0.6s ease",
                    }}
                >
                    <img
                        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                        alt="Sale banner 1"
                    />
                </div>
                <div className={containerContent}>
                    <div className={title}>Sale of the year</div>
                    <div className={content}>
                        Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
                    </div>
                    <button className={btn}>Read more</button>
                </div>
                <div
                    style={{
                        transform: `translateX(-${translateXPosition}px)`,
                        transition: "transform 0.6s ease",
                    }}
                >
                    <img
                        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                        alt="Sale banner 2"
                    />
                </div>
            </div>
        </>
    );
}

export default SaleHomePage;
