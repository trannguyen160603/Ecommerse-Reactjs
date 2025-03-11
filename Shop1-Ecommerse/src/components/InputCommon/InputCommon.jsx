import { useState } from 'react';
import styles from './styles.module.scss';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

function InputCommon({ label, type, isRequired = false, ...props }) {
    // Import các class từ file styles.module.scss
    const { container, title, boxInput, boxIcon, errorMsg } = styles;

    // State để kiểm soát hiển thị / ẩn mật khẩu
    const [showPassword, setShowPassword] = useState(false);

    // Lấy `formik` và `id` từ props (được truyền từ Formik)
    const { formik, id } = props;

    // Hàm xử lý toggle hiển thị mật khẩu
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Kiểm tra xem có lỗi validation với input hay không
    const isError = formik.touched[id] && formik.errors[id];

    // Lấy nội dung lỗi từ Formik nếu có
    const errorMessage = formik.errors[id];

    // Xác định xem input có phải là loại mật khẩu không
    const isPassword = type === 'password';

    // Nếu là mật khẩu và người dùng nhấn "hiển thị", đổi type input thành "text"
    const isShowTextPassword = isPassword && showPassword ? 'text' : type;

    return (
        <div className={container}>
            {/* Hiển thị label của input */}
            <div className={title}>
                {label} {isRequired && <span>*</span>} {/* Nếu bắt buộc, hiển thị dấu "*" */}
            </div>
            <div className={boxInput}>
                {/* Input nhận các props từ Formik */}
                <input
                    type={isShowTextPassword} // Kiểm soát hiển thị mật khẩu
                    {...props}
                    onBlur={formik.handleBlur} // Xử lý khi rời khỏi input
                    onChange={formik.handleChange} // Xử lý khi nhập dữ liệu
                    value={formik.values[id]} // Giá trị của input được quản lý bởi Formik
                />
                
                {/* Nếu là trường mật khẩu, hiển thị biểu tượng "mắt" để toggle */}
                {isPassword && (
                    <div className={boxIcon} onClick={handleTogglePassword}>
                        {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                    </div>
                )}
                
                {/* Hiển thị lỗi nếu có */}
                {isError && <div className={errorMsg}>{errorMessage}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
