import { useState } from 'react';
import './App.css';
import MyForm from './components/form';
import List from './components/list';

function App() {
  const [data, setData] = useState([])

  const handleAddList = (newList) => {
    setData( newList)
  }

  console.log(data)

  const deleteItem = (item) => {
    let items = [...data]
    let index = items.indexOf(item)
    items.splice(index, 1)
    setData(items)
  }

  const handleCompleteItem = (item) => {
    let items = [...data]
    let index = items.indexOf(item)
    items[index].completed = !items[index].completed
    setData(items)
    console.log(items)
  }

  const handleDeleteAllItems = () => {
    setData([])
  }

  return (
    <div className="App">
      <MyForm handleAddList={handleAddList} />
      <List
        data={data}
        onDelete={deleteItem}
        onComplete={handleCompleteItem}
        onDeleteAll={handleDeleteAllItems}
      />
    </div>
  );
}

export default App;
