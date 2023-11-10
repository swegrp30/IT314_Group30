import "../style/Login.css";
import hero from "../Images/hero.png"
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import {FcGoogle} from 'react-icons/fc';

import React from 'react'

const Signup = () => {
  
    const navigate = useNavigate()
    return (
      <div className="signupform d-flex flex-row h-screen ">
        <div className="left flex flex-column w-2/5  ">
          <div className="text-header text-center mx-auto  text-white font-medium p-5">
            Predict and Visualize the stock price daily
          </div>
          <div className="hero mx-auto my-auto">
            <img className="image-hero" src={hero} />
          </div>
        </div>
        <div className="right flex flex-column items-start w-60vh">
          <div className="detailform my-auto mx-20 w-full">
            <div className="logo">
              <img src={logo} className="logo-main" alt="" />
            </div>
            <div className="text-small  text-black">
              For Traders and Investors
              <form>
                <div className="space-y-5">
                  <div className=" border-gray-900/10 ">
                    <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          for="first_name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="First_name"
                            id="First_name"
                            autocomplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-black-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          for="last_name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autocomplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-black-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
  
                    <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-black-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email"
                          />
                        </div>
                      </div>
  
                      <div className="sm:col-span-3">
                        <label
                          for="date"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Date of Birth
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="dob"
                            id="dob"
                            autocomplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        for="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autocomplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-black-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Password"
                        />
                      </div>
                    </div>
  
                    <div className="sm:col-span-3">
                      <label
                        for="confirm_password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="confirm_passsword"
                          id="confirm_password"
                          autocomplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 border-solid ring-1 ring-inset ring-gray-300 placeholder:text-white-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex flex-row signupButtons pt-4 justify-center gap-x-10">
                <button
                  
                  type="button"
                  className=" flex button-signup button-normal text-white bg-primaryblue hover:bg-hoverblue focus:ring-4 focus:ring-primaryblue font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:primaryblue dark:hover:p focus:outline-none dark:focus:ring-primaryblue"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  className=" flex button-signup button-google align-center justify-center  text-white bg-googleButton hover:bg-googleButtonhover focus:ring-4 focus:ring-googleButton font-medium rounded-lg text-sm px-3 py-2.5 mr-2  mb-2 dark: dark:hover:p focus:outline-none dark:focus:ring-googleButton"
                >
                  <img src={google} className="pr-3" />
                  Sign-up with Google
                </button>
              </div>
              <div className="text-center pt-2">
                Don't have an account?
                <span className = 'text-primaryblue' onClick={()=>navigate('/login')}> Log in</span>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Signup

