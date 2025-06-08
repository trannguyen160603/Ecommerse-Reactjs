import styles from './styles.module.scss';

function InputCustom({ label, type, isRequired = false, placeholder }) {
    const { container, labelCLS } = styles;

    const renderInput = () => {
        if (type === 'text') {
            return <input type='text' placeholder={placeholder || label} />;
        } else if (type === 'textArea') {
            return <textarea placeholder={placeholder || label}  />;
        } else {
            return (
                <select name='cars' id='cars'>
                    <option value='volvo'>volvo</option>
                    <option value='saab'>saab</option>
                    <option value='mercedes'>mercedes</option>
                    <option value='audi'>audi</option>
                </select>
            );
        }
    };

    return (
        <div className={container}>
            <label className={labelCLS}>
                {label}
                {isRequired && <span>*</span>}
            </label>
            {renderInput()}
        </div>
    );
}

export default InputCustom;
