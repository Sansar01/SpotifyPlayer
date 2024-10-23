import "./assets/css/style.css";
import Logo from "./assets/images/Logo.png";
import profile from "./assets/images/profile.png";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="music-player">
      <div className="spotify-logo">
        <img src={Logo} alt="Spotify" />
      </div>
      <Sidebar />
      <div className="main-content">
        {/* This would be the space for the album art and controls */}
      </div>
      <div className="profile-section">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
}

export default App;
