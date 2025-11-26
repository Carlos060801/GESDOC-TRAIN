import "../styles/myprofile.css";

export default function MyProfile() {
  const user = {
    full_name: "Carlos Daniel",
    email: "carlos@example.com",
    role: "Administrator",
    position: "Training Coordinator",
    department: "IT & Training",
    joined: "March 2025",
    avatar:
      "https://ui-avatars.com/api/?name=Carlos+Daniel&background=1A56DB&color=fff&size=150"
  };

  return (
    <div className="profile-wrapper">

      <h2 className="title">My Profile</h2>

      <div className="profile-card">

        {/* === TOP SECTION === */}
        <div className="profile-top">
          <img src={user.avatar} className="profile-avatar" alt="User" />

          <div>
            <h3 className="profile-name">{user.full_name}</h3>
            <span className="role-tag">{user.role}</span>
          </div>
        </div>

        {/* === INFO GRID === */}
        <div className="profile-section">
          <h4 className="section-title">Personal Information</h4>

          <div className="info-grid">
            <div>
              <label>Full Name</label>
              <p>{user.full_name}</p>
            </div>

            <div>
              <label>Email</label>
              <p>{user.email}</p>
            </div>

            <div>
              <label>Position</label>
              <p>{user.position}</p>
            </div>

            <div>
              <label>Department</label>
              <p>{user.department}</p>
            </div>

            <div>
              <label>Member Since</label>
              <p>{user.joined}</p>
            </div>
          </div>
        </div>

        {/* === SECURITY === */}
        <div className="profile-section">
          <h4 className="section-title">Security Settings</h4>

          <div className="password-grid">
            <div>
              <label>Current Password</label>
              <input type="password" placeholder="********" />
            </div>

            <div>
              <label>New Password</label>
              <input type="password" placeholder="********" />
            </div>

            <div>
              <label>Confirm Password</label>
              <input type="password" placeholder="********" />
            </div>
          </div>

          <button className="btn-update">Update Password</button>
        </div>

      </div>
    </div>
  );
}
