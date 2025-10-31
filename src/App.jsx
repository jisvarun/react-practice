import MyButton from './components/MyButton'
import './App.css'

const user = {
  name: 'Varun',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function App() {

  return (
    <>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl}
        alt={'photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
        />
      <MyButton />
      <ul>{listItems}</ul>
    </>
  )
}

export default App
