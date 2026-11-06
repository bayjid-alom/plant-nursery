
import React from 'react';
import { Link } from 'react-router';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaLeaf,
    FaExternalLinkAlt
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0B1D12] text-white">

            <div className="mx-auto w-[94%] md:w-[92%] lg:w-[85%]">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">

                    {/* Brand */}
                    <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 lg:items-start lg:text-left">

                        <Link to="/" className="inline-flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Plant Nursery Logo"
                                className="h-11 w-11 rounded-lg object-cover"
                            />

                            <span className="text-xl font-extrabold tracking-tight">
                                Plant <span className="text-lime-400">Nursery</span>
                            </span>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
                            Bringing nature closer to your everyday life.
                            Discover beautiful plants and create your own
                            little green paradise.
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-3">

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-[#0B1D12]"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-[#0B1D12]"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-[#0B1D12]"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links - Hidden on Mobile */}
                    <div className="hidden md:block">

                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-lime-400">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link
                                    to="/"
                                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-lime-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/listed-plants"
                                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-lime-400"
                                >
                                    Listed Plants
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/plant-care"
                                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-lime-400"
                                >
                                    Plant Care
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore - Hidden on Mobile */}
                    <div className="hidden md:block">

                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-lime-400">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <a
                                    href="https://www.rhs.org.uk/plants"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-lime-400"
                                >
                                    Plant Encyclopedia
                                    <FaExternalLinkAlt size={11} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.rhs.org.uk/advice"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-lime-400"
                                >
                                    Gardening Advice
                                    <FaExternalLinkAlt size={11} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.rhs.org.uk/plants/types"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-lime-400"
                                >
                                    Plant Collections
                                    <FaExternalLinkAlt size={11} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">

                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-lime-400">
                            Get In Touch
                        </h3>

                        <p className="text-sm leading-7 text-white/60">
                            Have questions about plants or gardening?
                            Explore our plant care resources and grow
                            your knowledge.
                        </p>

                        <Link
                            to="/plant-care"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-400 transition-colors duration-300 hover:text-lime-300"
                        >
                            Learn More
                            <FaExternalLinkAlt size={12} />
                        </Link>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">

                    <p className="text-xs leading-6 text-white/40">
                        © {new Date().getFullYear()} Plant Nursery. All rights reserved.
                    </p>

                    <p className="flex items-center gap-2 text-xs text-white/40">
                        Developed by
                        <span className="font-semibold text-lime-400 transition-colors duration-300 hover:text-lime-300">
                            Bayjid Alom
                        </span>
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
