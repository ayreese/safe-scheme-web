'use client'
// import Link from 'next/link'

const PreFooter = () => {
    return (
        <div className="bg-primary text-white py-32 md:py-12">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h3 className="text-xl md:text-xxl font-semibold mb-4 font-sans">
                    Join Safe Scheme Today!
                </h3>
                <p className="text-body mb-6 font-sans">
                    Join hundreds of others saving time and getting things done
                </p>
                <div className="col-start-1 lg:row-start-4">
                    {/*<Link*/}
                    {/*    href="/signup"*/}
                    {/*    className="inline-block py-4 px-8 bg-neutralLight rounded-full capitalize text-white font-semibold hover:bg-primaryLight transition"*/}
                    {/*>*/}
                    {/*    Get Started for Free*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>
    );
};

export default PreFooter;