import React, { useState } from 'react'

const Nosotros = () => {

    const [equipo, setEquipo] = React.useState([])
    const [count, setCount]= useState(0)
    const obtenerDatos = async()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users') 
        const users = await data.json()
        setEquipo(users)
    }
    React.useEffect(()=>{
        obtenerDatos()
    }, [])


    return (
        <div>
            <h1 onClick={()=>setCount(count + 1)}
            >Nosotros</h1>
            <ul>
                {equipo.map(item=>(
                    <li key={item.id}>{item.id} - {item.name} - {item.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default Nosotros