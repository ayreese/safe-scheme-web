// src/components/AuthForm.tsx

const AuthForm = () => {
    return (
        <div className="form bg-white p-10 rounded-xl mx-auto max-w-[50rem] min-w-[300px] shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-8">Sign In</h1>

            <form className="flex flex-col gap-8">
                <input
                    type="email"
                    placeholder="Email"
                    className="border-b-2 border-neutralLight py-2 px-3 focus:outline-none focus:border-primary cursor-default text-dark"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border-b-2 border-neutralLight py-2 px-3 focus:outline-none focus:border-primary text-dark"
                />
                <input
                    type="submit"
                    value="Log In"
                    className="bg-primary text-white uppercase py-3 hover:bg-primaryLight focus:bg-primary transition-all cursor-pointer rounded-xl"
                />
            </form>

            <div className="selection flex gap-4 mt-4 justify-center text-neutralLight text-sm">
                <span>Forgot password?</span>
                <span>Don&#39;t have an account? Sign up</span>
            </div>
        </div>
    );
};

export default AuthForm;
