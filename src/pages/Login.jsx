import React from 'react'
import logoimage from '../assets/LTT_Logo.png'
import { useForm } from 'react-hook-form'

const Login = () => {
    const onSubmit = (data) => console.log(data)
    const {register , handleSubmit , formState:{errors}} = useForm()
  return (
    <div className='w-full relative h-screen z-20 bg-green-800 '>
        <div className='flex items-end not-md:flex-col w-full h-full justify-end'>
            <div className='w-2/5 not-md:w-full not-md:h-2/5 h-full flex items-center justify-center bg-slate-300 p-1'>
                  <div className='w-3/4 h-3/5 flex gap-10 not-md:gap-10 items-center flex-col md:ml-30 p-1'>
                   <div className=' w-full'>
                    <img src={logoimage} alt="logo" />
                   </div>
                   <div className='w-full '>
                    <h1 className='capitalize font-suisse w-60 pl-4 not-md:text-xl text-4xl  '>
                        welcome! to the LTTSTORE 
                    </h1>
                   </div>
                  </div>
            </div>
            <div className='w-3/5 flex items-center justify-center not-md:w-full not-md:h-3/5 h-full bg-slate-200'>
          
                <div className='w-3/5 h-3/4  flex items-center flex-col gap-4 '>
                  <h1 className='text-4xl'>Sign In</h1>
               <form onSubmit={handleSubmit(onSubmit)} 
               className='  flex flex-col gap-4 w-10/12 h-10/12 p-3'>
      {/* register your input into the hook by invoking the "register" function */}
          <div className='flex bg-slate-50 flex-col p-2 active:scale-95 rounded-xl gap-1  shadow-lg/10 hover:shadow-lg/25 transition-all duration-200'>
            <label htmlFor="username" className='select-none'>Username or Email</label>
             <input id='username' {...register("username")} className='outline-none'/>
          </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className='flex bg-slate-50 flex-col p-2 active:scale-95 rounded-xl gap-1  shadow-lg/10 hover:shadow-lg/25 transition-all duration-200'>
            <label htmlFor="password" className='select-none'>Password</label>
             <input id='password' {...register("password" ,{required:true})} className='outline-none'/>
          </div>
       {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

     <button className='px-2 py-1 bg-black text-white rounded-md w-fit mx-auto active:'>
        Submit
     </button>
    </form>

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Login