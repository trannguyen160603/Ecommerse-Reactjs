import styles from './styles.module.scss';


function HeaderSideBar({icon, title}) {
    const { container, headIcon, headTitle  } = styles;
    return <div className={container}>
            <div className={headIcon}>{icon}</div>
            <div className={headTitle}>{title}</div>

    </div>;
}

export default HeaderSideBar
