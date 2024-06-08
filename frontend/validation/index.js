
import { z } from "zod";

const formSchema = z.object({
    name: z.string({message: "Name is required"}).min(3),
    email: z.string({message: "Email is required"}).email("Invalid email address"),
    message: z.string({message: "Message is required"}).min(5),
});

export default formSchema

export const formBeneficiaries = z.object({
    name : z.string(),
    email : z.string(),
    adresse : z.string(),
    description : z.string(),
})

export const formVolunteer = z.object({
    name : z.string(),
    email : z.string(),
    adresse : z.string(),
    description : z.string(),
})

export const formDonation = z.object({
    title : z.string(),
    description : z.string(),
    type : z.enum(['money', 'food', 'clothes', 'other']),
    status : z.string(),
    user_id : z.number()
})