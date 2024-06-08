"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";

const Page = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      adresse,
      phone,
      userType,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <form onSubmit={submitForm}>
      {/* Name */}
      <div>
        <Label className="dark:text-gray-200" htmlFor="name">
          Name
        </Label>

        <Input
          id="name"
          type="text"
          value={name}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setName(event.target.value)}
          required
          autoFocus
        />

        <InputError messages={errors.name} className="mt-2" />
      </div>
      {/* Adresse */}
      <div>
        <Label className="dark:text-gray-200" htmlFor="adresse">
          Adresse
        </Label>

        <Input
          id="adresse"
          name="adresse"
          type="text"
          value={adresse}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setAdresse(event.target.value)}
          required
          autoFocus
        />

        <InputError messages={errors.adresse} className="mt-2" />
      </div>
      {/* Adresse */}
      <div>
        <Label className="dark:text-gray-200" htmlFor="phone">
          Phone
        </Label>

        <Input
          id="phone"
          type="text"
          value={phone}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setPhone(event.target.value)}
          required
          autoFocus
        />

        <InputError messages={errors.phone} className="mt-2" />
      </div>

      {/* userType */}
      <div className="mt-4">
        <Select value={userType} onValueChange={(e) => setUserType(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>User type</SelectLabel>
              <SelectItem value={'volunteer'}>Volunteer</SelectItem>
              <SelectItem value={'beneficiary'}>Beneficiary</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <InputError messages={errors.email} className="mt-2" />
      </div>
      {/* Email Address */}
      <div className="mt-4">
        <Label className="dark:text-gray-200" htmlFor="email">
          Email
        </Label>

        <Input
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <InputError messages={errors.email} className="mt-2" />
      </div>

      {/* Password */}
      <div className="mt-4">
        <Label className="dark:text-gray-200" htmlFor="password">
          Password
        </Label>

        <Input
          id="password"
          type="password"
          value={password}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="new-password"
        />

        <InputError messages={errors.password} className="mt-2" />
      </div>

      {/* Confirm Password */}
      <div className="mt-4">
        <Label className="dark:text-gray-200" htmlFor="passwordConfirmation">
          Confirm Password
        </Label>

        <Input
          id="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          className="block mt-1 w-full dark:bg-slate-800 px-2 py-1"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
        />

        <InputError messages={errors.password_confirmation} className="mt-2" />
      </div>

      <div className="flex items-center justify-end mt-4">
        <Link
          href="/login"
          className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
        >
          Already registered?
        </Link>

        <Button className="ml-4">Register</Button>
      </div>
    </form>
  );
};

export default Page;
