import { useMemo, useRef, useState } from 'react'

function App() {
  // tạo state để lưu tên sản phẩm
  const [name, setName] = useState('')

  //tạo state để lưu giá sản phẩm
  const [price, setPrice] = useState('')

  //tạo state để lưu các sản phẩm được add vào
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    let newProduct = {
      name : name,
      price: +price    //parse price sang kiểu số
    }
    setProducts([...products, newProduct])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue.price

  //bị tính toán lại 1 cách không cần thiết
  // const total = products.reduce(reducer,0)



  //Khi nào products thay đổi mới tính toán lại
  const total = useMemo(()=>{
    const result = products.reduce(reducer,0)
    return result
  },[products])

  return (
    <div className="App" style={{padding: 20}}>
      <input 
      ref={nameRef}
      placeholder='Enter name product'
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <br/>
      <input
      type='number'
      value={price}
      placeholder='Enter price product'
      onChange={e=>setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>

      Total: {total}
      <ul>
        {products.map((product, index)=>(
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
