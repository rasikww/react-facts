function Header() {
    return (
        <header className="header">
            <img
                className="logo"
                src="src/assets/react-logo.png"
                alt="react-logo"
            />
            <nav className="nav">
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
