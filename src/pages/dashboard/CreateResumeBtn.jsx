import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Plus, LogIn } from "lucide-react";
import "./dashboard.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CreateResumeBtn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/me`, {
          withCredentials: true,
        });
        if (isMounted) {
          setUser(res.data);
        }
      } catch {
        if (isMounted) {
          setUser(null);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCreateClick = () => {
    if (user) {
      navigate("/project-choice");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="create-resume-wrapper">
      {user ? (
        <button className="create-resume-btn" onClick={handleCreateClick}>
          <Plus size={22} strokeWidth={2.5} />
          <span>Create New Resume</span>
        </button>
      ) : (
        <div className="login-first-cta">
          <p className="login-first-text">
            Sign in or register to create and manage your resumes
          </p>
          <button className="start-creating-btn" onClick={handleLoginClick}>
            <LogIn size={20} strokeWidth={2.5} />
            <span>Start creating</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateResumeBtn;
