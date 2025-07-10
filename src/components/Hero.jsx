import React from 'react';
// Import social media icons from Lucide React
import { Linkedin, Github } from 'lucide-react';

// Hero component is the first thing users see. It contains the main heading,
// a brief introduction, social media links, and a prominent illustration.
// The layout is responsive, stacking vertically on mobile and side-by-side on larger screens.
function Hero() {
    // Social media icons using Lucide React (Twitter and Instagram removed)
    const socialIcons = [
        
        { href: "https://github.com/SinhleM", icon: <Github className="w-6 h-6" /> },
    ];

    return (
        <section
            id="hero"
            // DECREASED TOP PADDING SIGNIFICANTLY (e.g., pt-8, md:pt-12)
            className="relative pt-8 pb-12 md:pt-2 md:pb-20 bg-cover"
            // Using your provided image name and background position
            style={{
                backgroundImage: `url('/herop.png')`, // Using /herop.png as in your last snippet
                backgroundPosition: '90% 70%',          // ADDED: Significantly crops the top (40% down from image top aligns with element top)
            }}
        >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-white opacity-80"></div>

            {/* Main content container, positioned above the overlay */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        {/* Main Hero Text - ADDED TOP PADDING HERE */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black pt-6"> {/* Added pt-6 for top padding */}
                            Hello, I’m <span className="inline-block">Sinhle Mkhabela</span>
                            based in Johannesburg.
                        </h1>
                        {/* Sub Description Hero Text */}
                        <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                            Im a 3rd year Computer Science Student, passionate about building real-time data systems, pipelines, and cloud-native applications that turn raw data into powerful insights.
                        </p>
                        {/* Social Media Links (UNCHANGED as per your request) */}
                        <div className="mt-8 flex justify-center md:justify-start space-x-4">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-500 hover:text-black transition-colors duration-300
                                               border rounded border-gray-400 p-2 flex items-center justify-center"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* This div previously held the SVG illustration. */}
                    <div className="relative w-full max-w-md mx-auto md:max-w-none">
                        {/* The background image handles the illustration */}
                    </div>
                </div>
                {/* Removed: The underline component */}
            </div>
        </section>
    );
}

export default Hero;