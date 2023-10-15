export const validate = (email,password,name)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    // if(!isName) return "Enter Your Full Name";
    if(!isEmailValid) return "Email is Not Valid";
    if(!isPasswordValid) return "password is not valid";
    return null

}