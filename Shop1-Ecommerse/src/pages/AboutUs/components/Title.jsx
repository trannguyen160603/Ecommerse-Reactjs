import styles from '../styles.module.scss';

function Title({titleFirt, titleSecond}) {
    const {containerTitle, headLine, sideLine} = styles;
    return (
        <div className={containerTitle}>
            <div>{titleFirt}</div>
            <div className={headLine}>
                <div className={sideLine}></div>
                <div>{titleSecond}</div>
                <div className={sideLine}></div>
            </div>
        </div>
    );
}

export default Title;
