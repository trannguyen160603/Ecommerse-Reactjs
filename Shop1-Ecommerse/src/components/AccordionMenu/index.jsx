import { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMinus } from "react-icons/hi2";

function AccordionMenu({titleMenu, contentJsx,onClick, isSelected}) {
    const { container, title, activeTitle , contentMenu, isVisibility, borderBottom} = styles;
    // const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        if(onClick){
            onClick();
        }
    };
    return (
        <div className={container}>
            <div
                onClick={handleToggle}
                className={cls(title, {
                    [activeTitle]: isSelected,
                    [borderBottom] : !isSelected
                })}
            >
                {isSelected ? <HiMinus style={{fontSize:'18px'}}/> : <IoIosArrowDown style={{fontSize:'18px'}} />} {titleMenu}
            </div>
            <div className={cls(contentMenu, {
                [isVisibility] : isSelected,
                [borderBottom] : isSelected
            })}> 
                <div>{contentJsx}</div>
            </div>
        </div>
    );
}

export default AccordionMenu;
