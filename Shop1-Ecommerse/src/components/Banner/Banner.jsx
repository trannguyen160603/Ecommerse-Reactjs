
import styles from './styles.module.scss';
function Banner() {
    const {container, content, des} = styles;
    return <div className={container}> 
    <div className={content}> 
        <h1>XStore Marseille04 Demo</h1>
        <div>Make yours celebrations even more special this years with beautiful.</div>
            <button className={des}> Go to shop</button>
    </div>
    </div>
}

export default Banner;