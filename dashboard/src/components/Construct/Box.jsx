import { useDrag } from 'react-dnd';

const style = {
    position: 'absolute',
    border: '1px solid black',
    padding: '5px',
    cursor: 'move',
};

const Box = ({ id, left, top, children, background, width, height, transform }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);

    if (isDragging) {
        return <div ref={drag} />;
    }

    return (
        <div ref={drag} style={{ ...style, left, top, background, width, height, transform }} >
            {children}
        </div>
    );
};
export default Box