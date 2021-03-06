import React from 'react'

import './footer.css'
import TaskFilter from '../tasksFilter/taskFilter'

function Footer(props) {
    const {footerData, filter, notCompletedCount} = props
    const {onActiveFilter, onCompletedFilter, notFilter, deleteAllCompletedTask} = props         //func

    const filterLiElements = footerData.map(item => {
        const {id, ...data} = item
        return (
            <li key={id}>
                <TaskFilter
                    {...data}
                    filter={filter}
                />
            </li>
        )
    })

    const filterEvent = (event) => {
        const filter = event.target.textContent.toLowerCase()

        if (filter === 'active') {
            onActiveFilter()
        } else if (filter === 'completed') {
            onCompletedFilter()
        } else {
            notFilter()
        }
    }

    return (
        <footer className='footer'>
            <span className='todo-count'>{notCompletedCount} items left</span>
            <ul className='filters'
                onClick={filterEvent}>
                {filterLiElements}
            </ul>
            <button className='clear-completed' onClick={deleteAllCompletedTask} >Clear completed</button>
        </footer>
    )
}

export default Footer



