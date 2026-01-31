import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuth(required: boolean = false) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // if (!required && !token) {
    //   navigate("/signin");
    // }

    if (required && token) {
      navigate("/");
    }
  }, [required, navigate]);

  return context;
}

export default useAuth;
