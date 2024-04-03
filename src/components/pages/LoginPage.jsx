import React, { useState } from "react";
import { useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("location", location);

  const from = location.state?.from?.pathname || "/";

  const { updateAuthStatus, isAuthenticated } = useAuth();

  function toggleValue() {
    updateAuthStatus(false);
    console.log("from", from);
    navigate(from);
  }

  return (
    <div>
      <div>
        <h1> LoginPage</h1>
        <button onClick={() => toggleValue()}>CLICK ME </button>
      </div>
    </div>
  );
}

export default LoginPage;
