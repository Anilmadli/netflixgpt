// import userIcon from "../utils/user-icon.jpg";
import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = ()=>{
  const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
          // An error happened.
        });
    }

    useEffect(()=>{
      const unSubScribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL }));
            navigate('/browse')
          } else {
              dispatch(removeUser());
              navigate('/')
          }
        });
        // unsubscribe when component unmount
        return ()=> (unSubScribe);
  },[]);

    return(
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between">
                <img className="w-44" src={LOGO} alt="netflix-img"/>
            
           {user && <div className="flex">
                <img src={user?.photoURL} alt="user-icon"  className="w-10 h-10 mr-2" /><span className="text-white" onClick={handleSignOut}>Sign out</span> 
            </div>}
        </div>
    )
}

export default Header;