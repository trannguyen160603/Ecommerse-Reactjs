import styles from './styles.module.scss'; 
import InputCommon from '@components/InputCommon/InputCommon'; 
import MyButton from '@components/Button/Button'; 
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; // Import Yup để xác thực form
import { useContext, useEffect, useState } from 'react'; 
import { ToastContext } from '@/contexts/ToastProvider'; 
import { register , signIn, getInfo} from '@/apis/authService'; // Import hàm gọi API đăng ký
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';


function Login() {
    const { container, title, boxRemember, loginBtn, lostPassword } = styles;
    const [isRegister, setIsRegister] = useState(false); // false = đăng nhập, true = đăng ký
    const [isLoading, setIsLoading] = useState(false); // Trạng thái loading khi gọi API
    // Lấy hàm toast từ Context để hiển thị thông báo
    const { toast } = useContext(ToastContext);

    const {setIsOpen, handleGetListProductCart} = useContext(SideBarContext)
    const {setUserId} = useContext(StoreContext)

    // Sử dụng Formik để quản lý form
    const formik = useFormik({
        // Giá trị mặc định của form
        initialValues: {
            email: '',
            password: '',
            cfPassword: '', // Xác nhận mật khẩu (chỉ dùng khi đăng ký)
        },

        // Xác thực dữ liệu đầu vào với Yup
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email') 
                .required('Email is required'), 
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters') 
                .required('Password is required'), 
            cfPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must match') // Xác nhận mật khẩu phải trùng với mật khẩu
        }),

        // Xử lý khi submit form
        onSubmit: async (values) => {
            if (isLoading) return; // Nếu đang loading thì không cho submit tiếp

            const { email: username, password } = values; // Đổi tên email thành username để gửi API
            setIsLoading(true); // Bắt đầu loading

            if (isRegister) {
                // Nếu đang ở chế độ đăng ký
                await register({username, password }) // Gọi API đăng ký
                    .then((res) => {
                        toast.success(res.data.message); // Hiển thị thông báo thành công
                        setIsLoading(false); // Tắt loading
                    })
                    .catch((err) => {
                        toast.error(err.data.message); // Hiển thị lỗi nếu đăng ký thất bại
                        setIsLoading(false);
                    });
            }
            if(!isRegister) {
                // Nếu là đăng nhập
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const {id, token, refreshToken } = res.data;
                        setUserId(id)
                        Cookies.set('token', token);
                        Cookies.set('refreshToken',refreshToken );
                        Cookies.set('userId', id)
                        toast.success('Sign in successfully')
                        setIsOpen(false);
                        handleGetListProductCart(id, 'cart');
                        
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        toast.error(err.response?.data?.message || 'Sign in failed'); // Lấy lỗi chi tiết từ API nếu có
                    });
            }

        }
    });

    // Hàm chuyển đổi giữa đăng nhập và đăng ký
    const handleToggle = () => {
        setIsRegister(!isRegister); // Đảo ngược trạng thái isRegister
    };

    

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                {/* Ô nhập email hoặc username */}
                <InputCommon
                    id='email'
                    label='Username or email'
                    type='text'
                    isRequired
                    formik={formik}
                />

                {/* Ô nhập mật khẩu */}
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />

                {/* Nếu đang ở chế độ đăng ký thì hiển thị ô nhập xác nhận mật khẩu */}
                {isRegister && (
                    <InputCommon
                        id='cfPassword'
                        label='Confirm Password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}

                {/* Nếu là đăng nhập thì hiển thị checkbox "Remember Me" */}
                {!isRegister && (
                    <div className={boxRemember}>
                        <input type='checkbox' />
                        <span>Remember Me</span>
                    </div>
                )}

                {/* Nút đăng nhập hoặc đăng ký */}
                <div className={loginBtn}>
                    <MyButton
                        content={isRegister ? 'REGISTER' : 'LOGIN'} // Hiển thị chữ phù hợp với chế độ
                        type='submit'
                    />
                </div>
            </form>

            {/* Nút chuyển đổi giữa đăng nhập và đăng ký */}
            <MyButton
                content={
                    isRegister
                        ? 'Already have an account?' // Nếu đang ở chế độ đăng ký thì hỏi có tài khoản chưa
                        : 'Don\'t have an account?' // Nếu đang ở chế độ đăng nhập thì hỏi chưa có tài khoản?
                }
                isPrimary={false}
                type='button' // Đổi từ submit thành button để tránh gửi form
                onClick={handleToggle} // Khi nhấn, đổi giữa đăng nhập & đăng ký
            />

            {/* Chỉ hiển thị "Lost your password?" khi ở chế độ đăng nhập */}
            {!isRegister && (
                <div className={lostPassword}>
                    <a href='#'>Lost your password?</a>
                </div>
            )}
        </div>
    );
}

export default Login; // Xuất component để sử dụng trong ứng dụng
