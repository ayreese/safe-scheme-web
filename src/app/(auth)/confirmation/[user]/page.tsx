import ConfirmationForm from "@/components/ConfirmationForm";

 async function Page({params}: {params : Promise<{user: string}>}) {
    const {user} =  await params;
    return <ConfirmationForm userName={user} />;
}

export default Page