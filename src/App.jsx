import { useDispatch } from 'react-redux'
import { addPost } from './store/actions/actions'
import Title from './components/Title/Title'
import ListOfPosts from './components/ListOfPosts/ListOfPosts'
import Select from './components/Select/Select'
import Button from './components/Button/Button'

function App() {
  const dispatch = useDispatch()

  const setPost = () => {
    const textOfTheTask = prompt('')
    
    dispatch(addPost({
      textOfTheTask,
      id: Date.now(),
      dateOfCreation: new Date(),
      completed: false
    }))
  }


  return (
    <div className="main">
      <Title title={'ToDO'}/>
      <Button onClick={() => setPost()}>Add Post</Button>
      <Select/>
      <ListOfPosts />
    </div>
  );
}

export default App;
