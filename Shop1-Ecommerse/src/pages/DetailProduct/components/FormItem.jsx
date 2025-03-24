import { FaStar } from 'react-icons/fa6';
import styles from '../styles.module.scss';

function FormItem({ label, isRequired, typeChildren }) {
    const { formItem, boxStart } = styles;

    const renderStar = (length) => {
        return Array.from({ length }, (_, index) => (
            <FaStar key={index} style={{ color: '#e1e1e1' }} />
        ));
    };
    
    const renderChildren = () => {
        switch (typeChildren) {
            case 'rating':
                return (
                    <div className={boxStart}>
                        <div>{renderStar(1)}</div>
                        <div>{renderStar(2)}</div>
                        <div>{renderStar(3)}</div>
                        <div>{renderStar(4)}</div>
                        <div>{renderStar(5)}</div>
                    </div>
                );
            case 'input':
                return <input type='text' />;
            case 'texArea':
                return <textarea rows='10' />;
        }
    };
    return (
        <div className={formItem}>
            <label htmlFor=''>
                {label} {isRequired && <span>*</span>}
            </label>
            {renderChildren()}
        </div>
    );
}

export default FormItem;
