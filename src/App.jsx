import { useState } from "react"
import menu from "./data"


function App() {
  const [item, setItem] = useState(menu)
  const categories = [...new Set(menu.map((ele) => ele.category)) ]
  const filterMenu = (category) =>{
    const filter = menu.filter((item) => {
      return item.category === category
    })  
    return setItem(filter)
  }
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <div className="categories">
        <button onClick={() => setItem(menu)}>all</button>
        {
        categories.map((e, index) => {
          return <button key={index} onClick={() => filterMenu(e)}>{e}</button>
        })
      }</div>
      <section>{
        item.map(({id, title, price, img, desc}) =>{
          return <article key={id}>
            <img src={img} alt={title} />
            <div className="content">
              <header>
                <h3>{title}</h3>
                <p>{`$ ${price}`}</p>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        })
      }</section>
    </div>
  )
}

export default App
