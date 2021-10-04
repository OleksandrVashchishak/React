import { useCallback, useState, useRef } from 'react'
import { useDrop } from 'react-dnd';
import Box from './Box';
import update from 'immutability-helper';
import uniqid from 'uniqid';
import RenderSavePlan from './RenderSavePlan';

const Construct = () => {
    const refTable = useRef();
    const [planName, setPlaneName] = useState('')
    const [figure, setFigure] = useState({
        width: '20px',
        height: '10px',
        background: 'blue',
        transform: 'rotate(0deg)'
    })

    const setConfigFigure = (e) => {
        const { name, value } = e.target;
        setFigure({
            ...figure,
            [name]: value
        })
    }

    const setRotateFigure = (e) => {
        const { value } = e.target;
        if (value === '-') {
            return
        }
        setFigure({
            ...figure,
            transform: `rotate(${value}deg)`
        })
    }

    const [boxes, setBoxes] = useState({
        def1: { top: 109, left: 326, width: 250, height: 8, background: 'blue' },
        def2: { top: 348, left: 326, width: 250, height: 8, background: 'blue' },
        def3: { top: 110, left: 563, width: 8, height: 250, background: 'blue' },
        def4: { top: 110, left: 325, width: 8, height: 110, background: 'blue' },
        def5: { top: 250, left: 324, width: 8, height: 110, background: 'blue' },
        def6: { top: 120, left: 429, width: 8, height: 102, background: 'red' },
        def7: { top: 207, left: 336, width: 60, height: 8, background: 'red' },
    });

    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes, setBoxes]);

    const [, drop] = useDrop(() => ({
        accept: 'box',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);


    const createElem = () => {
        setBoxes({ ...boxes, [uniqid()]: { ...figure, top: 210, left: 20 } })
    }


    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Конструктор Шаблонів</h3>
            <div className="personal__line"></div>
            <span className='create-block-description'> Тут ви можете створити свій власний план будівлі. Задайте параметри блоку, створіть його, пересуньте в необхідне положення. Bи зможете опублікувти цей план в оголошенні. </span>

            <div className="plan-name">
                <input type="text" value={planName} placeholder='Введіть будь ласка назву плану' onChange={(e) => setPlaneName(e.target.value)} />
            </div>

            <div>
                <div className='df' >
                    <div className='column-field'>
                        <span>Ширина </span>
                        <input type="text" name='width' value={figure.width} onChange={setConfigFigure} />
                    </div>
                    <div className='column-field'>
                        <span> Висота </span>
                        <input type="text" name='height' value={figure.height} onChange={setConfigFigure} />
                    </div>
                    <div className='column-field'>
                        <span> Колір </span>
                        <input type="text" name='background' value={figure.background} onChange={setConfigFigure} />
                    </div>
                    <div className='column-field'>
                        <span> Поворот °  </span>
                        <input type="text" name='transform' value={figure.transform.match(/\d+/)} onChange={setRotateFigure} />
                    </div>
                </div>

                <div className='center-df-create' >
                    <div className='figure-custom' style={figure}></div>
                    <span className='create-block-btn' onClick={() => createElem()} >Створити блок</span>
                    <div className='empty-create'></div>
                </div>
                <div ref={refTable}>
                    <div ref={drop} className='dnd-table'>
                        {Object.keys(boxes).map((key) => {
                            const { width, left, top, background, height, transform } = boxes[key];
                            return (<Box key={key} id={key} left={left} top={top} background={background} height={height} width={width} transform={transform} />);
                        })}
                    </div>
                </div>
            </div>

            <RenderSavePlan refTable={refTable} planName={planName} />

        </div>
    )
}

export default Construct
