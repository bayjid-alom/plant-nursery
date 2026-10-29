import React from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, Home, Leaf } from 'lucide-react';

const ErrorMessage = ({
    code = '404',
    title = 'Oops! Lost in the Garden?',
    message = "The page you're looking for may have moved, or it might not exist. Let's get you back on track.",
    showBackButton = true
}) => {
    const navigate = useNavigate();

    return (
        <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-[#F7F9F4] px-4 py-14 sm:px-6 sm:py-16">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-lime-200/30 blur-[110px]" />

            {/* Decorative Leaves */}
            <Leaf
                size={90}
                strokeWidth={0.7}
                className="pointer-events-none absolute left-[8%] top-[15%] hidden -rotate-45 text-[#166534]/10 lg:block"
            />
            <Leaf
                size={70}
                strokeWidth={0.7}
                className="pointer-events-none absolute bottom-[15%] right-[9%] hidden rotate-45 text-[#65A30D]/15 lg:block"
            />

            <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

                {/* Error Code */}
                <div className="relative mb-2">
                    <h1 className="select-none bg-gradient-to-b from-[#166534] to-[#65A30D] bg-clip-text text-[80px] font-black leading-none tracking-[-5px] text-transparent md:text-[120px]">
                        {code}
                    </h1>

                    <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#166534] to-[#A3E635]" />
                </div>

                {/* Status Badge */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-800/10 bg-white/80 px-3 py-1.5 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#65A30D]" />
                    <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#166534] sm:text-[11px]">
                        Page Not Found
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-[#173F2C] sm:text-3xl md:text-4xl">
                    {title}
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
                    {message}
                </p>

                {/* Action Buttons */}
                <div className="mt-7 flex w-full items-center justify-center gap-3 sm:flex-row">

                    <Link
                        to="/"
                        className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#166534] px-2 py-3 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#14532D] sm:flex-none sm:gap-2 sm:px-5 sm:text-sm"
                    >
                        <Home size={16} className="shrink-0" />
                        <span>Back to Home</span>
                        <ArrowRight
                            size={15}
                            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>

                    {showBackButton && (
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#D9E4D8] bg-white/70 px-2 py-3 text-xs font-semibold text-[#173F2C] transition-colors duration-200 hover:bg-green-50 sm:flex-none sm:gap-2 sm:px-5 sm:text-sm"
                        >
                            <ArrowLeft size={15} className="shrink-0" />
                            <span>Go Back</span>
                        </button>
                    )}
                </div>

                {/* Bottom Message */}
                <div className="mx-auto mt-10 flex max-w-max items-center justify-center gap-3 border-t border-green-900/10 pt-5 sm:mt-12">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#166534]">
                        <Leaf size={16} />
                    </div>

                    <p className="text-left text-xs leading-5 text-gray-500 sm:text-sm">
                        Every great garden has a path.
                        <span className="block sm:ml-1 sm:inline">
                            Let's find yours.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ErrorMessage;