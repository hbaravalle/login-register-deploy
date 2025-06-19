import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { prueba, setToken } from '../store/tokenSlice';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://ha-videoclub-api-g1.vercel.app/tokens',
        {
          email: formData.email,
          password: formData.password,
          // ......
          movies: [],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      dispatch(setToken(response.data.token));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container' id='loginContainer'>
      <div className='form-section'>
        <h1 className='form-title'>Login</h1>

        <div id='loginAlert' className='alert alert-error hidden'></div>

        <form id='loginForm' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='loginEmail'>Email</label>
            <input
              type='email'
              id='loginEmail'
              name='email'
              placeholder='tu@email.com'
              value={formData.email}
              onInput={(event) => {
                setFormData((prevState) => {
                  return { ...prevState, email: event.target.value };
                });
              }}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='loginPassword'>Contraseña</label>
            <input
              type='password'
              id='loginPassword'
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

          <button type='submit' className='btn' id='loginBtn'>
            <span id='loginBtnText'>Iniciar Sesión</span>
          </button>
        </form>

        <div className='switch-form'>
          <p>
            ¿No tienes cuenta? <Link to='/register'>Regístrate aquí</Link>
          </p>
        </div>
        <button
          onClick={() => {
            dispatch(prueba());
          }}
        >
          Prueba token
        </button>
      </div>
    </div>
  );
}
