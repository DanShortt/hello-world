import "./NavBar.css"

const NavBar = () => {
    return (
    <div className = "navBar">
        <h1 className = "navTitle">Payments Application</h1>
        <ul className="nav">
            <li className = "navLink"><a href="#">find a transaction</a></li>
            <li className = "navLink"><a href="#">New Transaction</a></li>
        </ul>
    </div>
    )

}

export default NavBar;