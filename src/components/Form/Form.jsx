import './form.css'
import Input from "../Input/Input"
import Button from "../Button/Button"
import { useDispatch } from 'react-redux'
import { addPost } from "../../store/actions/actions"
import { useState } from "react"

export default function Form() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const setPost = (event, value) => {
        event.preventDefault()

        if (input) {
            dispatch(addPost({
                textOfTheTask: value,
                id: Date.now(),
                dateOfCreation: new Date(),
                completed: false
            }))

            setInput('')
        }
    }

    return (
        <form className="form">
            <Input
                placeholder="Add a task"
                onChange={(event) => setInput(event.target.value)}
                value={input}
            />
            <Button onClick={(event) => setPost(event, input)}>Add Post</Button>
        </form>
    )
}
