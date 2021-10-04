import React from 'react'
import { useDispatch } from 'react-redux';
import { addPlan } from '../../redux/actions/plans';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RenderSavePlan = ({ refTable, planName }) => {
    const addNotify = () => toast.success(`Ваш шаблон ${planName} збережений у вашому особистому кабінеті`, {
        position: "bottom-right",
        autoClose: 9000,
    });

    const errorNotify = () => toast.error(`Ви не дали імені своєму шаблону`, {
        position: "bottom-right",
        autoClose: 9000,
    });


    const [cookies] = useCookies();
    const [clonePlan, setClonePlan] = React.useState()
    const dispatch = useDispatch();
    const getPlan = () => {
        if (!planName.trim()) {
            errorNotify()
            return
        }
        setClonePlan({ __html: refTable.current.innerHTML })
        dispatch(addPlan({
            name: planName.trim(),
            userId: cookies.currentUser.id,
            plan: { __html: refTable.current.innerHTML },
        }));
        addNotify()

    }

    return (
        <>


            <div className="save-plan-df">
                <button className="save-plan" onClick={() => getPlan()}>Зберегти план</button>
                {clonePlan && <span> Свої шаблони ви можете переглянути у вкладці <a href="/">шаблони</a>  </span>}
            </div>

            <span className='plan-name-save'>{clonePlan && planName}</span>
            <div className='save-plan-wrapper' dangerouslySetInnerHTML={clonePlan} ></div>
            <ToastContainer />

        </>
    )
}

export default RenderSavePlan