import './select.css'
import { useDispatch } from 'react-redux'
import { selectOptions } from '../../consts/selectOption'
import { CHANGE_LIST } from '../../store/types/types'
import Option from '../Option/Option'

export default function Select() {
    const dispatch = useDispatch()

    return (
        <select className='select' onChange={() => dispatch({ type: CHANGE_LIST })}>
            {selectOptions.map((item, i) => <Option key={i} value={item}/>)}
        </select>
    )
}
