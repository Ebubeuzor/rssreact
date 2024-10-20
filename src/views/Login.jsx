import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Footer from './component/Footer';
import Header from './component/header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate();

    const inputClasses = "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200";
    const buttonClasses = "w-full bg-[#1F205D] text-white p-3 rounded-lg hover:transition duration-200";
    const linkClasses = "text-blue-500 hover:text-blue-600 transition duration-200";
    
    const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const submit = (e) =>{
        e.preventDefault();
        localStorage.setItem("token", "token");
        window.location.href = "/";
    }
    
    return (
      <>
      
        <Header/>
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div 
            className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-lg"
            initial="initial"
            animate="animate"
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
            }}
            >
            <motion.h2 
                className="text-3xl font-bold text-center text-gray-800"
                variants={fadeInUp}
            >
                Login
            </motion.h2>
            <form onSubmit={submit} className="mt-8 space-y-6">
                <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    placeholder="Enter your email"
                />
                </motion.div>
                <motion.div variants={fadeInUp}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClasses}
                    placeholder="Enter your password"
                />
                </motion.div>
                <motion.button 
                variants={fadeInUp}
                type="submit"
                className={buttonClasses}
                >
                Login
                </motion.button>
                <motion.div 
                className="flex justify-between text-sm mt-4"
                variants={fadeInUp}
                >
                <a href="signup" className={linkClasses}>Not a member? Create an account</a>
                <a href="#forgot" className={linkClasses}>Forgot Password</a>
                </motion.div>
            </form>
            </motion.div>
        </div>

        <Footer/>
      </>
    );
  };

export default Login