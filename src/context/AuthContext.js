import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);

  const signIn = (email,password)=>{
    if(email==="admin@gmail.com" && password==="123456"){
      setUser({
        name:"Hung Nguyen",
        job:"Mobile developer"
      })
    }else{
      alert("Sai tài khoản hoặc mật khẩu")
    }
  }

  const signOut = ()=>{
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{user,signIn,signOut}}>
      {children}
    </AuthContext.Provider>
  )
}