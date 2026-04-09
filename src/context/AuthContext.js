import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🔥 load user khi mở app
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signIn = async (email, password) => {
    if (email === "admin@gmail.com" && password === "123456") {
      const userData = {
        name: "Hung Nguyen",
        job: "Mobile developer",
      };

      setUser(userData);

      // 🔥 thêm dòng này
      await AsyncStorage.setItem("user", JSON.stringify(userData));
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  const signOut = async () => {
    setUser(null);

    // 🔥 thêm dòng này
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};