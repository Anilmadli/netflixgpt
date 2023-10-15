// import userIcon from "../utils/user-icon.jpg";
import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          navigate("/")
        }).catch((error) => {
          // An error happened.
        });
    }

    return(
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between">
                <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-img"/>
            
           {user && <div className="flex">
                <img src={user?.photoURL} alt="user-icon"  className="w-10 h-10 mr-2" /><span className="text-white" onClick={handleSignOut}>Sign out</span> 
            </div>}
        </div>
    )
}

export default Header;