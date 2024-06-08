"use client"

import { Loader } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import axios from "@/lib/axios";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import Header from "@/components/Header";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
    name: z.string({message: "Name is required"}).min(3),
    email: z.string({message: "Email is required"}).email("Invalid email address"),
    message: z.string({message: "Message is required"}).min(5),
});

function LandingPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const {
        // setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = (data) => {
        // await axios.post('/api/contact', data);
        sendEmail(data)
        console.log(data)
        // toast.success("Form submitted successfully");
    };
    
      const { mutate: sendEmail, isSuccess: isLoadingSubmit } = useMutation({
        mutationFn: async (data) => {
          const response = await axios.post("/api/contact", data);
          return response.data;
        },
        onSuccess: () => {
            toast.success("Form submitted successfully");
        },
        onError: (error) => {
          console.error(error)
        },
      })

    return (
        <>
        <Header />
            <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

                {/* <p className="text-center">Run your agency, in one place</p> */}
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="text-5xl font-bold text-center md:text-[200px] 2xl:text-[300px]">
                        ExamBuiler
                    </h1>
                </div>
                <div className="flex justify-center items-center relative md:mt-[-60px]">
                    <img
                        src={"/preview.png"}
                        alt="banner image"
                        height={1200}
                        width={1200}
                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                    />
                    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
                </div>
            </section>
            <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px] mb-5">
                <h2 className="text-4xl text-center">
                    {" "}
                    Contact Us
                </h2>
                <p className="text-muted-foreground text-center">
                    Feel free to contact us if you have any questions or need help with anything.
                </p>
            </section>

            <section className="pb-20">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-1/3 space-y-6 m-auto"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Name</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder="Name"
                                        {...field}
                                        className="dark:bg-gray-900"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Email</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder="Email"
                                        {...field}
                                        className="dark:bg-gray-900"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Message</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder="Message"
                                        className="dark:bg-gray-900"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className={"mt-5"}
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting && (
                            <Loader className={"mx-2 my-2 animate-spin"} />
                        )}{" "}
                        Submit
                    </Button>
                </form>
            </Form>
            </section>
        </>
    );
}
export default LandingPage;
