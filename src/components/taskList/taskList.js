import React from 'react'

import Task from '../task/task'
import './taskList.css'

function TaskList(props) {
    const { tasksData, filter } = props
    const { deleteTask, setTaskCompleted } = props //func
    
    function getFilteredElements(data, filter) {
        let filteredElements = data.filter(item => {
            switch (filter) {
                case 'completed':
                    return item.completed === true
                case 'active':
                    return item.completed === false
                default:
                    return true
            }
        })
    
        filteredElements = filteredElements.map(item => {
            const { id, ...data } = item
    
            return (
                <Task key = {id} 
                      {...data} 
                      deleteTask = {(e) => {
                        e.stopPropagation()
                        deleteTask(item.id)
                }}
                      setTaskCompleted={() => setTaskCompleted(item.id)}
                />
            )
        })
    
        return filteredElements
    }

    const taskListLiElements = getFilteredElements(tasksData, filter)

    return (
        <ul className='todo-list'>
            { taskListLiElements}
        </ul>
    ) 

}


export default TaskList

