import {useForm, useFormState} from 'react-hook-form'
import React from 'react'
export function Form() {
const {
  register,
  handleSubmit,
  formState:{errors},
  watch,
  setValue,
  reset
} = useForm();

const onSubmit = handleSubmit((data) => {
  alert('Registro con exito')
  reset()

})
  return (
    <form  onSubmit ={onSubmit} >
      <h1>Registrate</h1>

      <label htmlFor='nombre'>Nombre</label>
      <input
        type='text'
        {...register('nombre',
          { required:{
              value: true,
              message: "nombre es requerido"
            },
            minLength:{
              value:2,
              message:"Nombre debe tener al menos 2 caracteres"
            },
            maxLength:{
              value:40,
              message:"debe tener menos de 40 caracteres"
            }
          }
        )}  
      /> 
      {
        errors.nombre && <span>{errors.nombre.message}</span>
      }


      <label htmlFor='correo'>Correo</label>
      <input
        type='text'
        {...register('correo',
          { required:{
              value:true,
              message: "el correo es requerido"
            },
            pattern:{
              value:/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message:"Correo no valido"
            }

          }
        )}  
      />
      {
        errors.correo && <span>{errors.correo.message}</span>
      }


      <label htmlFor='contraseña'>Contraseña</label>
      <input
        type='password'
        {...register('contraseña',
          {required:{
            value:true,
            message:"La contraseña es requerida"
          },
          }
        )}  
      />
      {
        errors.contraseña && <span>{errors.contraseña.message}</span>
      }


      <label htmlFor='cContraseña'>Confirmar contraseña</label>
      <input
        type='password'
        {...register('cContraseña', {
            required: {
                value: true,
                message: "Por favor, confirme su contraseña"
            },
            validate: (value) =>
                value === watch('contraseña') || 'Las contraseñas no coinciden'
        })}
      />
      {
        errors.cContraseña && <span>{errors.cContraseña.message}</span>
      }

      <label htmlFor='fechaN'>Fecha de nacimiento</label>
      <input
        type='date'
        {...register('fechaN',
        { required:{
            value:true,
            message:"La fecha de nacimiento es requerida"
          },
          validate: (value) => {
            const fechaDeNacimiento = new Date(value)
            const fechaActual = new Date()
            const edad =
                fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()
        
            return edad >= 18 ? true : "Debe ser mayor de edad para el registro"
        }
        
        }
        )} 
      /> 
      {
        errors.fechaN && <span>{errors.fechaN.message}</span>
      }


      <label htmlFor='pais'>País</label>
      <select
        {...register('pais')}  
      >
        <option>Mexico</option>
        <option>Estados Unidos</option>
        <option>Chile</option>
        <option>Argentina</option>
        <option>Otro</option>
      </select>


      <label htmlFor='foto'>Foto de perfil</label>
      <input
        type='file' onChange={ (e)=>{
          console.log(e.target.files[0])
          setValue('fotoDelUsuuario',e.target.files[0].name)
        }}/>


      <label htmlFor='terminos'>Acepto términos y condiciones</label>
      <input
        type='checkbox'
        {...register('terminos',
        { required:{
            value:true,
            message: "Porfavor acepte los terminos y condiciones"
          },
        }
      )}  
    />
    {
      errors.terminos && <span>{errors.terminos.message}</span>
    }

      <button>Registrar</button>
      <pre>{JSON.stringify(watch(),null,2)}</pre>
    </form>
  )
}

export default Form