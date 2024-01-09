
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';






const Login = () => {
    const [login,setLogin]=useState(true);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleClick=()=>{
        setLogin(!login);
    }


    const navigateHome = () => {

        // Perform login validation

        if (login) {
            
            try {

                
   
                if (username.trim() === '') throw  new Error("*Enter the User Name Correctly");

                
    
                if(password.trim() === '')  throw new Error("*Enter the password Correctly");

                alert("login Successfully");
                navigate('/');
                
            } catch (error) {

                document.getElementById("loginFeild").innerText=error.message
               
                
            }            
        } else {

        

            try {

                
           
                if (username.trim() === '') throw  new Error("*Enter the User Name Correctly");

                if(email.trim() === '') throw new Error("*Enter the Email Correctly");
                
        
                if(password.trim() === '')  throw new Error("*Enter the Password Correctly");

                
             
              


                alert("Register Successfully");
                navigate('/');
                
            } catch (error) {

                
                document.getElementById("registerFeild").innerText=error.message
          
            }  
        }
    };

    
  return (

    <div>
         {
            login? <div class="flex  flex-col md:flex-row  justify-center items-center min-h-screen  gap-5">
       
            <div class=" w-76 sm:w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Login</h1>
                <hr class="mt-3" />
                <p id='loginFeild' className='text-red-500'></p>
                <div class="mt-3">
                    <label for="username" class="block text-base mb-2" >Username</label>
                    <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(event)=> setUsername(event.target.value) } placeholder="Enter Username..." />
                 
                </div>
                <div class="mt-3">
                    <label for="password" class="block text-base mb-2" >Password</label>
                    <input type="password" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(event)=> setPassword(event.target.value) } placeholder="Enter Password..." />
                   
                </div>
                <div class="mt-3 flex justify-between gap-4 items-center">
                    <div>
                      
                        <button   class="text-indigo-800 font-semibold" onClick={handleClick}>New User?</button>
                    </div>
                    <div>
                        <button  class="text-indigo-800 font-semibold" >Forgot Password?</button>
                    </div>
                </div>
                <div class="mt-5">
                   <button onClick={navigateHome} type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                </div>
            </div>
            
            <iframe src="https://embed.lottiefiles.com/animation/144103" title='login animation'></iframe>
        </div>:
        <div class="flex  flex-col md:flex-row  justify-center items-center min-h-screen  gap-5">
       
        <div class=" w-76 sm:w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>Register</h1>
            <hr class="mt-3" />
            <p id='registerFeild' className='text-red-500'></p>
            <div class="mt-3">
                <label for="username" class="block text-base mb-2" >Name</label>
                <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(event)=> setUsername(event.target.value) } placeholder="Enter Username..." />
               
            </div>
            <div class="mt-3">
                <label for="username" class="block text-base mb-2" >Email</label>
                <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(event)=> setEmail(event.target.value) } placeholder="Enter Email..." />
                
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2" >Password</label>
                <input type="password" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(event)=> setPassword(event.target.value) } placeholder="Enter Password..." />
                
            </div>
            <div class="mt-3 flex justify-between gap-4 items-center">
                <div>
                  
                    <a   href="/" class="text-indigo-800 font-semibold" onClick={handleClick}>Already Existing User?</a>
                </div>
               
            </div>
            <div class="mt-5">
               <button onClick={navigateHome} type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Register</button>
            </div>
        </div>
          
        <iframe src="https://embed.lottiefiles.com/animation/144103" title='register animation'></iframe>

    </div>
        }
    
     
      
           
      
    </div>
  )
}

export default Login