import React, {JSX} from "react";
import { useForm } from "react-hook-form";
import { LoginValues } from "@/types/types";
import { signIn } from "@/configuration/authConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignIn = ({ router }: { router: ReturnType<typeof useRouter> }): JSX.Element => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<LoginValues>();

    const onSubmit = handleSubmit(async (data: LoginValues): Promise<void> => {
        try {
            const response = await signIn(data);
            const accessToken = response.AuthenticationResult?.AccessToken;
            if (accessToken) {
                router.push("/");
            }
        } catch (error) {
            console.log("Error signing in", error);
            alert(error);
        }
    });

    return (
        <form onSubmit={onSubmit} className="authForm flex flex-col w-full lg:w-3/4 text-dark">
            <h1 className={"form-title text-xxl font-black capitalize mb-4"}>
                Log in
            </h1>

                <div className={"flex flex-col w-full gap-y-4 justify-center"}>

                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format"
                            }
                        })}
                        placeholder="Email"
                        className="focus:outline-none border-b border-gray-400 py-4 opacity-50"
                        onBlur={() => trigger("email")}
                    />
                    {errors?.email && <p className={"text-error"}>{errors.email.message}</p>}
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                message: "Password must contain at least 1 letter, 1 number, and 1 special character",
                            },
                        })}
                        placeholder="Password"
                        className="focus:outline-none border-b border-gray-400 py-4 opacity-50"
                        onBlur={() => trigger("password")}
                    />
                    {errors?.password &&
                        <p className="text-error">{errors.password.message}</p>} {/* Error message */}
                </div>

            <button type="submit"
                    className={"bg-primary w-full items-center px-24 py-1 rounded-lg text-white self-center mt-4"}> Log in
            </button>
            <Link href={"/"} className={"font-extralight underline mt-4 text-gray-500"}>
                Forgot Password?
            </Link>
            <p className="terms-of-service font-light text-gray-500 text-base mt-4">
                By continuing with Google, Apple, or Email, you agree to Safe Scheme’s <Link href={"/"}
                                                                                             className={"underline"}>Terms
                of Service
            </Link> and <Link href={"/"} className={"underline"}>
                Privacy Policy.
            </Link>
            </p>
        </form>
    );
};

export default SignIn;
