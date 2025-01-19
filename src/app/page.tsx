import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-sans bg-white text-gray-900 min-h-screen">
            {/* Navigation Bar */}
            <header className="bg-white text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="Safe Scheme Logo" width={40} height={40}/>
                        <h1 className="text-xl font-semibold text-dark">Safe Scheme</h1>
                    </div>
                    <nav className="space-x-6">
                        <Link href="#about" className="hover:underline font-semibold text-dark">
                            Features
                        </Link>
                        <Link href="#social-proof" className=" font-semibold text-dark">
                            Testimonials
                        </Link>
                        <Link
                            href="/login"
                            className="py-2 px-4 rounded-full font-extrabold text-dark"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="py-4 px-8 bg-primary rounded-full text-white font-semibold hover:bg-primaryLight transition capitalize"
                        >
                            Start for free
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-cover h-screen flex flex-auto py-32 px-36 gap-x-32">
                {/* Left side - Text content */}
                <div className="basis-1/2 w-full content-center">
                    <h1 className="text-heading font-semibold text-dark mb-4 leading-heading-xl tracking-tighter">Say hello to <span>Safe Scheme</span>  </h1>
                    <p className="text-body text-dark mb-8">
                        Safe Scheme is an intuitive task manager designed to help you organize your personal and
                        professional tasks.
                        It’s optimized for performance, built on AWS for scalability, and designed with security in
                        mind.
                    </p>
                    <p className="text-body text-dark mb-8">
                        Whether you’re working on individual projects or collaborating with teams, Safe Scheme provides
                        a seamless experience to stay organized.
                    </p>
                    <Link
                        href="/signup"
                        className="inline-block py-4 px-8 bg-primary rounded-full text-white font-semibold hover:bg-primaryLight transition"
                    >
                        Get Started for Free
                    </Link>
                </div>

                {/* Right side - Image with background color */}
                <div className="w-full h-auto relative basis-2/3 drop-shadow-md">
                    <div className="image-container">
                        <Image
                            src="/hero.png"
                            alt="Hero Background"
                            fill={true}
                            className="hero-image"
                            style={{objectFit: "contain"}}
                        />
                    </div>

                </div>
            </section>

            {/* Social Proof Section */}
            <section id="social-proof" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl font-semibold mb-6">What Our Users Are Saying</h2>
                    <div className="flex justify-center gap-12 mb-8">
                        <div className="max-w-xs">
                            <p className="text-lg italic mb-4">“Safe Scheme has transformed the way I manage my
                                day-to-day tasks. It&#39;s incredibly intuitive and keeps me organized.”</p>
                            <p className="font-semibold">Sarah L.</p>
                            <p className="text-sm text-gray-500">Designer</p>
                        </div>
                        <div className="max-w-xs">
                            <p className="text-lg italic mb-4">“The security features are a game changer. I can finally
                                trust that my tasks are kept private and safe.”</p>
                            <p className="font-semibold">John D.</p>
                            <p className="text-sm text-gray-500">Engineer</p>
                        </div>
                    </div>
                    <Link
                        href="/testimonials"
                        className="inline-block text-blue-600 hover:underline"
                    >
                        Read More Testimonials
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-blue-600 text-white">
                <div className="container mx-auto text-center px-6">
                    <div className="flex justify-center gap-8 mb-6">
                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Safe Scheme. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
