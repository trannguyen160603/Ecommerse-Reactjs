import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
function Filter() {
    const {
        containerFilter,
        boxIcon,
        boxLeft,
        boxRight,
        selectBox,
        show,
        sort
    } = styles;
    const { showOptions, sortOptions, setSortId, setShowId, setShowGrid } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleShowGrid = type => {
        if(type === 'grid'){
            setShowGrid(true)
        }else{
            setShowGrid(false)
        }
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type='sort'
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        onClick={() => handleShowGrid('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    ></div>
                    <CiCircleList
                        style={{ fontSize: '27px', cursor: 'pointer' }}
                        onClick={() => handleShowGrid('list')}
                    />
                </div>
            </div>
            <div className={boxRight}>
                <div style={{ fontSize: '14px' }}>Show</div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
}
export default Filter;
