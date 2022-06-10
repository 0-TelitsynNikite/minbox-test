import './listItem.css'
import { removePost, addComplete } from '../../store/actions/actions'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { stopTime } from '../../services/stopTime'
import Button from '../Button/Button'

export default function ListItem({ task }) {
    const dispatch = useDispatch()
    let [time, setTime] = useState(Math.ceil((new Date() - task.dateOfCreation) / 1000))

    const changeTime = (value) => {
        setTimeout(() => {
            setTime(Math.ceil((new Date() - value) / 1000))
        }, 1000)
    }

    useEffect(() => {
        changeTime(task.dateOfCreation)
    })

    

    return (
        <li className='list__item'>
            <div className="wrapper">
                <span className='task'>{task.textOfTheTask}</span>
                <span className='timer'>
                    {stopTime(time, task)}
                </span>
            </div>
            <div className="button-wrapper">

                {task.completed
                    ?  null
                    : <Button onClick={() => dispatch(addComplete({textOfTheTask: task.textOfTheTask, id: task.id, completed: true}))}  style={{ backgroundColor: 'var(--button-yellow)' }}>Completed</Button>
                }
                <Button onClick={() => dispatch(removePost(task.id))} style={{ backgroundColor: 'var(--button-red)' }}>Delete</Button>
            </div>
        </li>
    )
}
