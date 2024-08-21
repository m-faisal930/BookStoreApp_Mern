import React, { useEffect } from "react";
import Home from "./home/home";
import { Route, Routes, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Sinup";
import Contact from "./contact/Contact";
import { useAuth } from "./components/context/AuthProvider";

import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              authUser ? (
                <Courses />
              ) : (
                <RequireAuth>
                  <Courses />
                </RequireAuth>
              )
            }
          />
          <Route path="/sinup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

function RequireAuth({ children }) {
  const [authUser] = useAuth();

  useEffect(() => {
    if (!authUser) {
      alert("You are not logged in. Please sign up or log in to continue.");
    }
  }, [authUser]);

  return authUser ? children : <Navigate to="/sinup" replace />;
}
