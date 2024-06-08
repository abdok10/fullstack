"use client";

import { formDonation } from "@/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@headlessui/react";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";

const AddDonationForm = () => {
  const { user } = useAuth({ middleware: "auth" });
  const form = useForm({
    resolver: zodResolver(formDonation),
    defaultValues: {
      title: "",
      description: "",
      type: "money",
      status: "",
      user_id: user.id,
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    control,
    errors,
  } = form;

  const onSubmit = async (data) => {
    await axios.post("/api/donations", data);
    console.log(data);
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 m-auto"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
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
            name="description"
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
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.type}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Donation Type</SelectLabel>
                        <SelectItem value={"money"}>Volunteer</SelectItem>
                        <SelectItem value={"food"}>food</SelectItem>
                        <SelectItem value={"clothes"}>clothes</SelectItem>
                        <SelectItem value={"other"}>other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className={"mt-5"} type="submit">
            submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddDonationForm;
