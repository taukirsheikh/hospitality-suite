
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
const Auth = () => {
    const inputStyles =
    'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';
    return (
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className='flex mb-8 flex-col md:flex-row items-center justify-between'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
                        Create an account
                    </h1>
                    <p>OR</p>
                    <span className='inline-flex items-center'>
                        <AiFillGithub
                            //   onClick={loginHandler}
                            className='mr-3 text-4xl cursor-pointer text-black dark:text-white'
                        />{' '}
                        |
                        <FcGoogle
                            //   onClick={loginHandler}
                            className='ml-3 text-4xl cursor-pointer'
                        />
                    </span>

                </div>
                <form className='space-y-4 md:space-y-6'
                //  onSubmit={handleSubmit}
                 >
                    <input
                        type='email'
                        name='email'
                        placeholder='name@company.com'
                        required
                        className={inputStyles}
                        // value={formData.email}
                        // onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        name='name'
                        placeholder='John Doe'
                        required
                        className={inputStyles}
                        // value={formData.name}
                        // onChange={handleInputChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        required
                        minLength={6}
                        className={inputStyles}
                        // value={formData.password}
                        // onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    >
                        Sign Up
                    </button>
                </form>
<div className='w-full flex gap-5 '>
    <p className=' my-auto text-center  '>Already have an account ?</p>

                <button
                //  onClick={loginHandler} 
                className='  hover:bg-tertiary-dark bg-tertiary-light py-2.5 rounded-full w-[50%]'>
                    login
                </button>
                     </div>
            </div>
        </section>
    )
}

export default Auth