import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login =()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    } 

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
        const message = validate(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;
        
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

              updateProfile(user, {
                displayName: name.current.value, photoURL:"https://avatars.githubusercontent.com/u/25577601?v=4"
              }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL }));
              }).catch((error) => {
                setErrorMessage(error.message);
              });
              
                

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
            });
        }
    }

    return(
        <div>
            <Header/>
            <div  className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="background-img"/>
            </div>

            <form onSubmit={(e)=> e.preventDefault()} className=" p-10 absolute bg-black mx-auto right-0 left-0 my-36 w-4/12 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && 
                <input type="text" 
                        ref={name}
                        placeholder="Full Name" 
                        className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>}

                <input type="text" 
                       ref={email}
                       placeholder="Email Address" 
                       className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

                <input type="password" 
                      ref={password}
                       placeholder="Password" 
                       className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
                       
                <p className="text-red-500">{errorMessage}</p>

                <button 
                    className="py-4 mx-auto my-4 bg-red-700 w-full rounded-lg" 
                    onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" 
                   onClick={toggleSignInForm}>{isSignInForm? "New to Netflix ? Sign Up Now" : "Already Registered? Sign In Now "} </p>
            </form>
        </div>
    )
}

export default Login;