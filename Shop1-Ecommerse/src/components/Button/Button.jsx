import classNames from 'classnames';
import styles from './styles.module.scss';

function MyButton({ content, isPrimary = true,  ...props }) {
    const { btn, PrimaryBtn, SecondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [PrimaryBtn]: isPrimary,
                [SecondaryBtn]: !isPrimary
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default MyButton;
