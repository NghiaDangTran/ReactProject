import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCat = new Set(items.map(i => i.category
))
function App() {
  const [menuitem, setMenu] = useState(items)
  const [categories, setCat] = useState(["all", ...allCat])
  
  const filter = (cat) => {
   
    if (cat === "all") {
      setMenu(items)
      return;

    }

    const Nmenu = items.filter((tofind) => { 
      console.log(tofind)
      return tofind.category === cat })
    setMenu(Nmenu)

  }
  return (
    <main>
      <section className='menu'>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>  <Categories render={categories} filter={filter}></Categories>
      <Menu items={menuitem}></Menu>

    </main>
  )
}

export default App;
