import supabase from "../lib/supabase/client";

const submitInquiry = async (
  prevState: { error?: string; success?: boolean } | null,
  formData: FormData
) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const { error } = await supabase.from("contact").insert({
        name,
        email,
        content: message
    });
    
    if (error) {
        console.error("Error submitting inquiry:", error);
        return {
            error: "Failed to submit inquiry. Please try again later.",
        };
    }
    
    return {
        success: true,
    };
}
export default submitInquiry
