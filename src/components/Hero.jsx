import React from 'react';

// Hero component is the first thing users see. It contains the main heading,
// a brief introduction, social media links, and a prominent illustration.
// The layout is responsive, stacking vertically on mobile and side-by-side on larger screens.
function Hero() {
    // Inline SVG for the illustration to avoid external file dependencies.
    const Illustration = () => (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g>
                {/* Person */}
                <path fill="#2d3748" d="M125.8,60.2c-1.3-1.6-3.5-2.1-5.4-1.2l-22.6,10.9c-1.9,0.9-2.8,3-2.1,5c0.5,1.3,1.6,2.2,2.9,2.4l10.3,1.5 l-2.6,18.5c-0.2,1.8,1,3.5,2.8,3.9c0.4,0.1,0.8,0.1,1.2,0l13.1-6.3c1.8-0.9,2.7-2.9,2-4.8L125.8,60.2z"/>
                <path fill="#1a202c" d="M117.4,45.1c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3S124.2,45.1,117.4,45.1z"/>
                <path fill="#2d3748" d="M148.2,83.4l-20.7,35.8c-1,1.7-3.1,2.4-5,1.6l-22.9-9.5c-1.9-0.8-2.9-2.8-2.3-4.8c0.6-2,2.6-3.1,4.6-2.5l19.5,8.1l17.7-30.6c1-1.7,3.1-2.4,5-1.6C148.1,80.7,149.1,82,148.2,83.4z"/>

                {/* Laptop and Chair */}
                <path fill="#edf2f7" d="M136.3,95.5l-39.8,19.1c-2.2,1.1-3.6,3.3-3.6,5.7v22.2c0,3.5,2.8,6.3,6.3,6.3h37.5c3.5,0,6.3-2.8,6.3-6.3v-37.1 C143.1,99.8,140.2,96.1,136.3,95.5z"/>
                <path fill="#1a202c" d="M92.9,117.3v22.2c0,2.1,1.7,3.8,3.8,3.8h37.5c2.1,0,3.8-1.7,3.8-3.8v-37.1c0-2.6-1.6-4.9-4-5.8L92.9,117.3z"/>
                <rect x="80" y="145" width="70" height="5" rx="2.5" fill="#edf2f7" />
                 <path fill="#edf2f7" d="M150,150h-50c-2.8,0-5,2.2-5,5v10c0,2.8,2.2,5,5,5h50c2.8,0,5-2.2,5-5v-10C155,152.2,152.8,150,150,150z" />
            </g>
        </svg>
    );

    // Social media icons as inline SVGs
    const socialIcons = [
        { href: "#", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.29 18.29c-1.17.65-2.47.98-3.89.98-1.42 0-2.72-.33-3.89-.98C9.34 17.64 8.37 16.5 8 15.17c-.37-1.33-.37-2.83 0-4.16.37-1.33 1.34-2.47 2.51-3.12 1.17-.65 2.47-.98 3.89-.98s2.72.33 3.89.98c1.17.65 2.14 1.79 2.51 3.12.37 1.33.37 2.83 0 4.16-.37 1.33-1.34 2.47-2.51 3.12z"/></svg> },
        { href: "#", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.561-.666 2.477 0 1.61.82 3.027 2.053 3.858-.764-.024-1.482-.234-2.11-.583v.06c0 2.247 1.595 4.123 3.713 4.554-.388.106-.795.163-1.214.163-.298 0-.586-.029-.87-.083.593 1.846 2.313 3.186 4.354 3.223-1.583 1.241-3.583 1.98-5.753 1.98-.374 0-.742-.022-1.107-.064 2.042 1.313 4.473 2.08 7.088 2.08 8.5 0 13.15-7.03 13.15-13.15 0-.201-.005-.402-.014-.602.903-.652 1.686-1.465 2.305-2.394z"/></svg> },
        { href: "#", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
        { href: "#", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg> },
    ];

    return (
        <section id="hero" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Hello I'am <span className="text-gray-700">Evren Shah.</span>
                            <br />
                            Frontend Developer
                            <br />
                            Based in India.
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start space-x-4">
                            {socialIcons.map((social, index) => (
                                <a key={index} href={social.href} className="text-gray-500 hover:text-black transition-colors duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative w-full max-w-md mx-auto md:max-w-none">
                        <Illustration />
                    </div>
                </div>
                <div className="border-b border-gray-200 mt-20 md:mt-32"></div>
            </div>
        </section>
    );
}

export default Hero;    