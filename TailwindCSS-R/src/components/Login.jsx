import React, { useState } from 'react'

function Login() {
    const [role, setRole] = useState("Student");

    const roles = ["Student", "Mentor", "Admin"]
    return (
        <div className='w-full h-203.5 bg-[rgb(12,12,12)] flex justify-center items-center'>
            <div className=' w-110 h-130 border-2 rounded-2xl border-[rgb(61,60,60)] text-white text-center'>
                <h2 className='text-4xl font-semibold mt-5'>Welcom Back</h2>
                <p>Sign in to your account</p>
                <div className='mt-10 text-left ml-5'>
                    <p className='font-semibold'>Role</p>
                    <div className='flex gap-5'>
                        <button className='px-3 py-2 rounded-md border text-sm transition-colors cursor-pointer bg-white text-black border-white'>Student</button>
                        <button className='px-3 py-2 rounded-md border text-sm transition-colors cursor-pointer bg-transparent text-gray-300 border-white/10 hover:bg-white/5 '>Mentor</button>
                        <button className='px-3 py-2 rounded-md border text-sm transition-colors cursor-pointer bg-transparent text-gray-300 border-white/10 hover:bg-white/5'>Admin</button>
                    </div>

                    <div className='m-6 ml-0'>
                        <label>University UID</label><br />
                        <input className='border-2 rounded-md p-1 w-99 h-10 text-[14px] border-white/30' type="text" placeholder='Enter your University UID' />
                    </div>
                    <div className='m-6 ml-0'>
                        <label>Password</label><br />
                        <input className='border-2 rounded-md p-1 w-99 h-10 text-[14px] border-white/30' type="text" placeholder='**************' />
                    </div>
                </div>

                <button className='bg-white text-black w-90 mt-2 p-2 rounded-md font-semibold '>Sign in</button>
            <p className='text-[11px] mt-1 text-white/60'>Use your role-based credentials. Contact admin if you need help.</p>
            </div>
        </div>
    )
}

export default Login
