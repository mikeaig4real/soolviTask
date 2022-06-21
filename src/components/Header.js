import {
    FaPlus
} from 'react-icons/fa';

import {
    useGlobalContext
} from '../context/appContext';

const Header = () => {
    const {
        allTasks,
        editTask,
    } = useGlobalContext();
    return (
        <header className='tasks__header'>
            <div className='tasks__title'>
                Tasks <span className='tasks__count'>{allTasks.length}</span>
            </div>
            <button
                onClick={() => editTask(null)}
                className="tasks__add_btn">
                <FaPlus />
            </button>
        </header>
    )
};

export default Header;