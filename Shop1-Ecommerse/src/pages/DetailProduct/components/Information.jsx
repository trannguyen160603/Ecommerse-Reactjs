import styles from '../styles.module.scss';

function InformationProduct() {
    const {itemInfo, containerInfo, title, content} = styles;
    const dataInfo = [
        {id:1, title: 'Size', content:'S, M, L'},
        {id:2, title: 'Material', content:'Fleece, Polyester, Cotton, Elastane'},
        {id:3, title: 'Color', content:'White, Green, Black'},
    ];
    return ( 
        <div className={containerInfo}>
            {dataInfo.map((item, id) =>{
                return <div key ={id} className={itemInfo}>
                    <div className={title}>{item.title}</div>
                    <div className={content}>{item.content}</div>
                </div>
            })}
            
        </div>
    );
}

export default InformationProduct;