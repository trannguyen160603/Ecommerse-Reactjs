import { addProductToCart } from "@/apis/CartService";

export const handleAddProductToCartCommon = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductCart
) => {
    
            if (!userId) {
                setIsOpen(true);
                setType('login');
                toast.warning('Please login to add products to cart!');
                setIsLoading(false);
                return;
            }
    
            if (!sizeChoose) {
                toast.warning('Please choose size');
                setIsLoading(false);
                return;
            }
    
            const data = {
                userId,
                productId,
                quantity,
                size: sizeChoose,
            };
            
            setIsLoading(true)
            addProductToCart(data)
            .then((res) =>{
                setIsOpen(true)
                setType('cart');
                toast.success('Product added to cart successfully!');
                setIsLoading(false);
                handleGetListProductCart(userId,'cart')
            })
            .catch((err) =>{
                 toast.error('Failed to add product to cart');
                 setIsLoading(false);
            })
};
