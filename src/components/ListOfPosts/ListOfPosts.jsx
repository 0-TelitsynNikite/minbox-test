import { useDispatch, useSelector } from 'react-redux'
import './listOfPosts.css'
import ListItem from '../ListItem/ListItem'

export default function ListOfPosts() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    return (
        <ul className='list'>
            {selector.completed
                ? selector.completedPosts.map(item => <ListItem key={item.id} task={item} />)
                : selector.posts.map(item => <ListItem key={item.id} task={item} />)
            }
        </ul>
    )
}
