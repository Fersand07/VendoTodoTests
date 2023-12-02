import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors } = useAuth();
    const onSubmit = handleSubmit((data) => {
        signin(data)
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className=" max-w-md w-full p-10 rounded-md">
            {
            signinErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-black text-center my-2" key={i}>
                        {error}
                    </div>
                ))
            }

                <div className="text-2xl font-bold">LOGIN</div>

                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', { required: true })}
                        className="w-full bg-transparent text-black border-2 border-blue-950 px-4 py-2 rounded-md my-2" placeholder='email' />
                    {errors.email && <p className='text-red-500'>Email is required</p>}

                    <input type="password" {...register('password', { required: true })}
                        className="w-full bg-transparent text-black border-2 border-blue-950 px-4 py-2 rounded-md my-2" placeholder='password' />
                    {errors.password && <p className='text-red-500'>Password is required</p>}

                    <button type='submit'>
                        Login
                    </button>
                </form>

            <p className="flex gap-x-2 justify-between">
                Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
            </p>

            </div>
        </div>
    )
}

export default LoginPage