import Title from './components/Title/Title'
import ListOfPosts from './components/ListOfPosts/ListOfPosts'
import Select from './components/Select/Select'
import Form from './components/Form/Form'

function App() {
  


  return (
    <div className="main">
      <Title title={'ToDO'}/>
      <Form/>
      <Select/>
      <ListOfPosts />
    </div>
  );
}

export default App;
