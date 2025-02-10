export interface Feature {
    title: string;
    description: string;
    copy: string;
    isBeta: boolean;
    image: string
}

export interface Testimonial {
    name: string,
    role: string,
    testimonial: string,
    image: string,
}

export interface LoginValues  {
    email: string
    password: string
}

export interface SignUpValues extends LoginValues {
    firstName: string
    lastName: string
}

export interface ConfirmationCode {
    code: string
}