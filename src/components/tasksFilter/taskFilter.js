import React from 'react'



function TaskFilter(props) {
    const { text, filter } = props

    return (
        <button className = {filter === text.toLowerCase() ? 'selected' : null}>{text}</button>
    )
}

export default TaskFilter