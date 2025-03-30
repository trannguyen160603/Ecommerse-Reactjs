import LoadingTextCommon from "@components/LoadingTextCommo/LoadingTextCommo";
import styles from '../styles.module.scss';

function LoadingCart() {
    const {loading} = styles;
    return (
        <div className={loading}>
        <LoadingTextCommon/>
        </div>
      );
}

export default LoadingCart;