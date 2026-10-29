
import React from 'react';
import { Link } from 'react-router';
import {
    ArrowRight,
    Leaf,
    ShieldCheck,
    Truck,
    TreePine
} from 'lucide-react';

const Banner = () => {
    return (
        <section
            className="relative flex min-h-[700px] items-center overflow-hidden bg-cover bg-center bg-no-repeat py-24 md:min-h-[650px] lg:min-h-[750px]"
            style={{
                backgroundImage: `url('https://cdn.prod.website-files.com/65eede53df668d7015c0bd8c/69e7135ea159c5e96b595393_69e604503e9b07a8b07ef97e_6974d541ed606e69394365ab_introduction-9d851d2f.webp')`
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071D12]/85 via-[#102A19]/65 via-50% to-[#102A19]/15"></div>

            {/* Extra Bottom Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10"></div>

            <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
                <div className="max-w-2xl">

                    {/* Subtitle */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                        <Leaf size={16} className="text-lime-300" />
                        <span className="text-xs font-bold uppercase tracking-[3px] text-white">
                            Bring Nature Closer
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Beautiful Plants
                        <br />
                        for a{' '}
                        <span className="bg-gradient-to-r from-lime-300 to-[#A3E635] bg-clip-text text-transparent">
                            Greener Life
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                        Discover a wide variety of healthy, fresh and
                        affordable plants to make your home, office
                        and garden more beautiful and alive.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            to="/listed-plants"
                            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#166534] to-[#65A30D] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:from-[#14532D] hover:to-[#4D7C0F] hover:shadow-xl sm:px-8 sm:py-4"
                        >
                            <TreePine size={20} />
                            Explore Plants
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/plant-care"
                            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-7 py-3.5 text-sm font-bold text-[#166534] shadow-sm transition-colors duration-300 hover:bg-lime-50 sm:py-4"
                        >
                            Plant Care Tips
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="mt-12 flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-9">

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#166534] shadow-sm">
                                <Leaf size={21} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Fresh & Healthy
                                </h3>
                                <p className="mt-0.5 text-xs text-white/80">
                                    Quality Plants
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#166534] shadow-sm">
                                <ShieldCheck size={21} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Safe & Secure
                                </h3>
                                <p className="mt-0.5 text-xs text-white/80">
                                    Careful Packaging
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#166534] shadow-sm">
                                <Truck size={21} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Fast Delivery
                                </h3>
                                <p className="mt-0.5 text-xs text-white/80">
                                    To Your Door
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        </section>
    );
};

export default Banner;
