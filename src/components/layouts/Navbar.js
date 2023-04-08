import { UserOutlined, SearchOutlined, BellOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="navDiv">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="user-icon">
              <UserOutlined />
            </div>
            <div>
              <p className="user-text">
                <span>Welcome</span>Shivendra
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <form className="d-flex align-items-center searchForm">
              <input
                className="form-control me-2 searchBar"
                type="search"
                placeholder="Search To-Do's"
                aria-label="Search"
              />
              <button type="button" class="btn">
                <SearchOutlined />
              </button>
            </form>
            <BellOutlined className="bell" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
