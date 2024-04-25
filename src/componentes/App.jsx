import React from 'react'
import {useForm, useFormState} from 'react-hook-form'
import '../css/App.css'

function App() {
const {register,handleSubmit} = useForm();
  return (
    
      <form onSubmit={handleSubmit (onSubmit)}>
      <label>Nombre</label>
      <input  type='text'/> 

      <label>Correo</label>
      <input
        type='email'
        {...register('nombre')}
      /> 

      <label>Contraseña</label>
      <input
        type='password'
        {...register('contraseña')}
      />

      <label>Confirmar contraseña</label>
      <input 
        type='password'
        {...register('cContraseña')}
      />

      <label>Fecha de nacimiento</label>
      <input
        type='date'
        {...register('fechaN')}
      /> 

      <label>País</label>
      <select 
        {...register('pais')}
      >
        <option value='MX'>Mexico</option>
        <option value='CO'>Colombia</option>
        <option value='ARG'>Argentina</option>
        <option value='USA'>Estados Unidos</option>
      </select>

      <label>Acept términos y condiciones</label>
      <input 
        type='checkbox'
        {...register('terminos')}  
      />

      <label>Acept términos y condiciones</label>
      <input 
        type='checkbox'
        {...register('terminos')}  
      />

    </form>
  )
}

export default App
