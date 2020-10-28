import React from 'react'

import './task.css'

export default class Task extends React.Component {

    render() {
        const { taskTxt, dateCreated, deleteTask, setTaskCompleted, completed } = this.props
        const editInput = <input type='text' className='edit' placeholder='Editing task'></input>


        return (
            <li className = { completed === true ? 'completed' : null }
                onClick = { setTaskCompleted }>
                <div className = 'view'>
                    <input className = 'toggle'
                           type = 'checkbox'
                    />
                    <label>
                        <span className = 'description'>{ taskTxt }</span>
                        <span className = 'created'>{ dateCreated }</span>
                    </label>
                    <button className = 'icon icon-edit'></button>
                    <button className = 'icon icon-destroy'
                            onClick = { deleteTask }
                    ></button>
                </div>
                {/* { classNames.find(item => item === 'editing') === 'editing' ? editInput : null } */}
            </li >
        )
    }
}

