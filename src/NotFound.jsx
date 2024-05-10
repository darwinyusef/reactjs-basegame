import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <div className='my-10 text-5xl font-bold text-center'>Página no encontrada</div>
            <Link to="/"><button title="enviar" color="bg-red-500">Volver Atras</button></Link>
        </div >
    )
}

export default NotFound