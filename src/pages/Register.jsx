import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Estamos listos para enviar la información del nuevo usuario a la API para que se cree:
    // ASYNC / AWAIT

    try {
      const response = await axios.post(
        'https://ha-videoclub-api-g1.vercel.app/users',
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container' id='registerContainer'>
      <div className='form-section'>
        <h1 className='form-title'>Registro</h1>
        <p className='form-subtitle'>Crea tu nueva cuenta</p>

        <div id='registerAlert' className='alert alert-error hidden'></div>

        <form id='registerForm' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label forhtml='firstName'>Nombre</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='María'
              value={formData.firstName}
              onInput={(event) => {
                setFormData((prevState) => {
                  return { ...prevState, firstName: event.target.value };
                });
              }}
              required
            />
          </div>

          <div className='form-group'>
            <label forhtml='lastName'>Apellido</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Ortiz'
              value={formData.lastName}
              onInput={(event) => {
                setFormData((prevState) => {
                  return { ...prevState, lastName: event.target.value };
                });
              }}
              required
            />
          </div>

          <div className='form-group'>
            <label forhtml='address'>Dirección</label>
            <div className='input-wrapper'>
              <input
                type='text'
                id='address'
                name='address'
                placeholder='Yi 2266'
                value={formData.address}
                onInput={(event) => {
                  setFormData((prevState) => {
                    return { ...prevState, address: event.target.value };
                  });
                }}
                required
              />
            </div>
          </div>

          <div className='form-group'>
            <label forhtml='phone'>Teléfono</label>
            <div className='input-wrapper'>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='099776655'
                value={formData.phone}
                onInput={(event) => {
                  setFormData((prevState) => {
                    return { ...prevState, phone: event.target.value };
                  });
                }}
                required
              />
            </div>
          </div>

          <div className='form-group'>
            <label forhtml='registerEmail'>Email</label>
            <div className='input-wrapper'>
              <input
                type='email'
                id='registerEmail'
                name='email'
                placeholder='algo@server.com'
                value={formData.email}
                onInput={(event) => {
                  setFormData((prevState) => {
                    return { ...prevState, email: event.target.value };
                  });
                }}
                required
              />
            </div>
          </div>

          <div className='form-group'>
            <label forhtml='registerPassword'>Contraseña</label>
            <div className='input-wrapper'>
              <input
                type='password'
                id='registerPassword'
                name='password'
                placeholder='••••••••'
                value={formData.password}
                onInput={(event) => {
                  setFormData((prevState) => {
                    return { ...prevState, password: event.target.value };
                  });
                }}
                required
              />
            </div>
          </div>

          <button type='submit' className='btn' id='registerBtn'>
            <span id='registerBtnText'>Crear Cuenta</span>
          </button>
        </form>

        <div className='switch-form'>
          <p>
            ¿Ya tienes cuenta? <Link to='/login'>Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
