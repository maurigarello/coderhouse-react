import React, { useEffect, useState } from 'react'

const Clicker = () => {
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        console.log('Se hizo click');
        setCount( count + 1 );
    }

    //Cada vez que haga render
    useEffect( () => {
        console.log('se hizo render');
    }, undefined)

    return (
    <div>
        <strong>Clicker</strong>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={clickHandler}>Aumentar</button>
        <strong>{ count }</strong>
    </div>
  )
}

export default Clicker