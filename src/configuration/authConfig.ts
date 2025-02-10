import {
    CognitoIdentityProviderClient,
    SignUpCommand,
    InitiateAuthCommand, ConfirmSignUpCommand
} from "@aws-sdk/client-cognito-identity-provider";
import {LoginValues, SignUpValues} from "@/types/types";

const config = {
    region: "us-east-1",
}

const client = new CognitoIdentityProviderClient(config);


export const signUp = async ({email, password, firstName, lastName}: SignUpValues) => {
    const command = new SignUpCommand({
        ClientId: process.env.NEXT_PUBLIC_CLIENTID,
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: "given_name",
                Value: firstName
            },
            {
                Name: "family_name",
                Value: lastName
            },
            {
                Name: "email",
                Value: email
            },

        ],
    })

    try {
        return await client.send(command);
    } catch (error: unknown) {
        console.error("Caught error", error);
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred.");
        }
    }



}

export const signIn = async ({email, password}: LoginValues) => {
    const command = new InitiateAuthCommand({
        ClientId: process.env.NEXT_PUBLIC_CLIENTID,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
            "PASSWORD": password,
            "USERNAME": email
        }

    })

    try {
        return await client.send(command);
    } catch (error: unknown) {
        console.error("Caught error", error);
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred.");
        }
    }

}

export const confirmation = async (code:string, userName: string) => {
   const command = new ConfirmSignUpCommand({
       ClientId: process.env.NEXT_PUBLIC_CLIENTID,
       ConfirmationCode: code,
       Username: userName,
   })
   try {
      return await client.send(command);
   } catch (error) {
       console.error("Error during Cognito operation:", error);
   }
    client.destroy()
}
