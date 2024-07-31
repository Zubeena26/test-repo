import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setShowDropdown(false);

    if (selectedValue === 'user') {
      navigate('/login');
    } else if (selectedValue === 'admin') {
      navigate('/alogin');
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div style={{ 
      backgroundColor: "black",
      backgroundImage:"url('https://thumbs.dreamstime.com/b/abstract-music-notes-multicolor-background-blurry-lights-42035356.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      width: "100%",
      height: "680px"
      }}>
      <div style={{ position: "relative", top: "27%", color: "white", display: "flex", justifyContent: "center" }}>
        <div>
          <img src='https://i.pinimg.com/originals/d5/62/d4/d562d4205927c8d1ca5eed0adcaaa25d.jpg' style={{ width: "130px", height: "130px", borderRadius: "50%" }} />
          <h2
            style={{
              paddingLeft: "23px",
              paddingTop: "10px",
              color: "white",
              cursor: "pointer",
              borderBottom: showDropdown ? "1px solid white" : "none",
            }}
            onClick={handleLoginClick}
          >
            Sign in
          </h2>
          {showDropdown && (
            <select
              ref={dropdownRef}
              onChange={handleSelectionChange}
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "130px",
                borderRadius: "5px",
                backgroundColor: "white",
                color: "black",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
                <option style={{display:"none"}}>User</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
