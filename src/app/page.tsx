import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-sans bg-primary text-gray-900 min-h-screen">
            {/* Navigation Bar */}
            <header className="bg-white text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="Safe Scheme Logo" width={40} height={40}/>
                        <h1 className="text-xl font-semibold text-dark">Safe Scheme</h1>
                    </div>
                    <nav className="space-x-6">
                        <Link href="#about" className="hover:underline font-semibold text-dark">
                            About
                        </Link>
                        <Link href="#social-proof" className=" font-semibold text-dark">
                            Testimonials
                        </Link>
                        <Link
                            href="/login"
                            className="py-2 px-4 rounded-full font-semibold text-dark"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="py-2 px-8 rounded-full bg-primary font-semibold capitalize"
                        >
                            Start for free
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen" style={{backgroundImage: 'url("/hero-bg.jpg")'}}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto text-center text-white relative z-10 py-20">
                    <h2 className="text-xxl sm:text-5xl font-bold leading-tight mb-4">
                        Manage Your Tasks the Safe Way with Safe Scheme
                    </h2>
                    <p className="text-base sm:text-xl mb-8">
                        The task manager built for productivity, privacy, and simplicity. Secure your workflow with Safe
                        Scheme today!
                    </p>
                    <Link
                        href="/signup"
                        className="inline-block bg-primary text-white py-1.5 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white text-gray-900">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl font-semibold mb-6">About Safe Scheme</h2>
                    <p className="text-lg sm:text-xl mb-8">
                        Safe Scheme is an intuitive task manager designed to help you organize your personal and
                        professional tasks.
                        It’s optimized for performance, built on AWS for scalability, and designed with security in
                        mind.
                    </p>
                    <p className="text-lg sm:text-xl mb-8">
                        Whether you’re working on individual projects or collaborating with teams, Safe Scheme provides
                        a seamless experience to stay organized.
                    </p>
                    <Link
                        href="/features"
                        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Learn More
                    </Link>
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
