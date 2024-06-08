'use client';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import logo from '@/public/plura-logo.svg';
import Image from 'next/image';
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import formSchema from './../validation/index';

export function ContactCard() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = (data) => {
        sendEmail(data);
        console.log(data);
    };

    const { mutate: sendEmail, isLoading: isLoadingSubmit } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post("/api/contact", data);
            return response.data;
        },
        onSuccess: () => {
            toast.success("Form submitted successfully");
        },
        onError: (error) => {
            console.error(error);
            toast.error("Failed to submit the form");
        },
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Contact Us
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex flex-col gap-[15px]">
                    <DialogTitle className="flex flex-col items-center justify-center gap-[10px]">
                        <Image
                            src={logo}
                            width={160}
                            height={160}
                            alt="Logo"
                            className='object-contain'
                        />
                        <div className="text-center text-muted-foreground tracking-[1px]">Start chatting with us now</div>
                    </DialogTitle>
                </DialogHeader>
                <div style={{ marginTop: '30px' }}>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full space-y-6 m-auto"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
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
                                {isLoadingSubmit ? (
                                    <>
                                        <Loader className="w-4 h-4 animate-spin" />
                                        Submitting ....
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
