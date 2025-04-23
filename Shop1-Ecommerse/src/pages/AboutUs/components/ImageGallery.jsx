import styles from '../styles.module.scss';

function ImageGallery() {
    const {imageGallery, imageCart} = styles;
    const images = [
        {
          image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg",
          description:
            "Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.",
        },
        {
          image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg",
          description:
            "Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.",
        },
        {
          image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg",
          description:
            "Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.",
        },
      ];

    return (  
        <div className={imageGallery}>
            {images.map((item, index) =>{
                return <div key={index} className={imageCart}>
                              <img src={item.image} alt="Gallery Item" />
                    <p>{item.description}</p>
                </div>
            })}
        </div>

    );
}

export default ImageGallery;