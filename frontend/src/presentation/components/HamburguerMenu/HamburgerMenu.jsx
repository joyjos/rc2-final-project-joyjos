import { useState } from 'react';

export const HamburgerMenu = ({closeMobileMenu}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <input
        type="checkbox"
        id="mobile-menu"
        className="rk-mobile-menu"
        checked={mobileMenuOpen}
        onChange={toggleMobileMenu}
      />
      <label htmlFor="mobile-menu" className="mobile-menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>
    </>
  );
};
