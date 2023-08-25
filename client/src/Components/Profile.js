import "../Assets/css/Profile.css"

const Profile = () => {


  return (
    <>
      <div className="wrapper ">
        {/* <div className="sidebar slide-left"> */}
        <div className="sidebar slide-right">

          <div className="profile">
            <img src="https://www.hindubhagwan.com/Gallery/images/portfolio/full/lord_hanuman_angry_image.jpg" alt="" />
            <h3>Jay Shree Ram</h3>
            <p>Ram Bhakt</p>
          </div>
          <ul>
            <li><a href="#">
              <span className='profile_icon'><i class="fa-solid fa-pen-to-square"></i> </span>
              <span className='profile_item'>Edit Profile</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-home'></i> </span>
              <span className='profile_item'>Home</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-desktop'></i> </span>
              <span className='profile_item'>My Dashboard</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-user-friends'></i> </span>
              <span className='profile_item'>People</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-tachometer-alt'></i> </span>
              <span className='profile_item'>Performance</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-database'></i> </span>
              <span className='profile_item'>Development</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-chart-line'></i> </span>
              <span className='profile_item'>Reports</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-shield'></i> </span>
              <span className='profile_item'>Admin</span>
            </a></li>
            <li><a href="#">
              <span className='profile_icon'><i className='fas fa-cog'></i> </span>
              <span className='profile_item'>Settings</span>
            </a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile
