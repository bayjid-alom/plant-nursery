
import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router';
import { Menu, TreePine, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative py-2 text-sm font-medium transition-colors duration-300
        after:absolute after:bottom-0 after:left-0 after:h-[2px]
        after:w-full after:origin-left after:bg-gradient-to-r
        after:from-[#166534] after:to-[#65A30D]
        after:transition-transform after:duration-300
        ${isActive
            ? 'text-[#166534] after:scale-x-100'
            : 'text-gray-700 after:scale-x-0 hover:text-[#166534] hover:after:scale-x-100'
        }`;

    const closeMenu = () => setIsMenuOpen(false);



    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="relative mx-auto flex min-h-[66px] w-[94%] items-center justify-between gap-3 md:w-[92%] lg:w-[90%]">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2"
                >
                    <img
                        className="w-9 md:w-10 rounded-md"
                        src={logo}
                        alt="GreenNest Logo"
                    />
                    <h2 className="text-base font-extrabold tracking-tight text-[#166534] md:text-lg">
                        Plant Nursery
                    </h2>
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 md:flex lg:gap-7">
                    <li>
                        <NavLink to="/" end className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/listed-plants" className={navLinkClass}>
                            Listed Plants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/plant-care" className={navLinkClass}>
                            Plant Care
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Button */}
                <a
                    href="https://www.rhs.org.uk/plants"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#166534] to-[#65A30D] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md md:inline-flex"
                >
                    <TreePine size={18} />
                    <span>Explore Plants</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-[#166534] transition-colors hover:bg-green-50 md:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X></X> : <Menu></Menu>}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
                        <ul className="flex flex-col items-start gap-5">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/listed-plants"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Listed Plants
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/plant-care"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Plant Care
                                </NavLink>
                            </li>
                        </ul>

                        {/* Mobile Button */}
                        <a
                            href="https://www.rhs.org.uk/plants"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#166534] to-[#65A30D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <TreePine size={18} strokeWidth={2} />
                            <span>Explore Plants</span>
                        </a>


                    </div>


                )}
            </nav>
        </header>
    );
};

export default Navbar;
