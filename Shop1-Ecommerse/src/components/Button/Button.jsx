import classNames from 'classnames';
import styles from './styles.module.scss';

function MyButton({ content, isPrimary = true,customClassname = false, ...props }) {
    const { btn, PrimaryBtn, SecondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [PrimaryBtn]: isPrimary,
                [SecondaryBtn]: !isPrimary,
                [customClassname] : customClassname
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default MyButton;
