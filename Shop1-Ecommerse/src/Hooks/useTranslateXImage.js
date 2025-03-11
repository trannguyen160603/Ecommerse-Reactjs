import { useEffect, useState } from "react";
import useScrollHandling from "@/Hooks/useScrollHandling"; // Kiểm tra alias `@/` nếu lỗi, thử `../Hooks/useScrollHandling`

const useTranslateXImage = () => {
    const { scrollDirection, scrollPosition } = useScrollHandling();
    const [translateXPosition, setTranslatePosition] = useState(10);

    useEffect(() => {
        if (scrollDirection === "down" && scrollPosition >= 1500) {
            setTranslatePosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDirection === "up") {
            setTranslatePosition(translateXPosition >= 10 ? 10 : translateXPosition + 1); // Trả về trạng thái cũ
        }
    }, [scrollPosition, scrollDirection]);

    return {
        translateXPosition,
    };
};

export default useTranslateXImage;
