import styles from '../styles.module.scss';
import FbIcon from "@icon/svgs/FbIcon.svg";
import InsIcon from '@icon/svgs/InsIcon.svg';
import youIcon from '@icon/svgs/youIcon.svg';

function BoxIcon({ type, href }) {
    const {boxIcon} = styles; // Đổi tên để tránh trùng với component

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return FbIcon;
            case 'ins':
                return InsIcon;
            case 'ytb':
                return youIcon;
            default:
                return FbIcon; // Icon mặc định nếu không tìm thấy
        }
    };

    return (
        <div className={boxIcon}  >
                <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
