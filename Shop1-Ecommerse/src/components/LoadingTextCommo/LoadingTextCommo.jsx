import styles from './styles.module.scss';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingTextCommon() {
    const {rotate, containerLoading} = styles;
    return (
        <div className={containerLoading}>
            <AiOutlineLoading3Quarters className={rotate}/>
        </div>

    );
}

export default LoadingTextCommon;