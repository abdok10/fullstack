"use client";

import Label from "./Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from "./Button";
import { Plus } from "lucide-react";
import AddDonationForm from "./AddDonationForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const HeaderDashboard = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/donations");
      setDonations(response.data.donations);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="w-full flex items-center justify-between px-[10px]">
        <Label className={"text-[20px]"}>Donation List</Label>
        {/* Check plus icon */}
        <Button
          variant={"default"}
          className="hover:rounded-xl transition-all"
          size={"icon"}
        >
          <Dialog>
            <DialogTrigger>
              <Plus className="w-6 h-6" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col items-center justify-center gap-[10px] w-full">
                <DialogTitle className="flex flex-col items-center justify-center gap-[10px]">
                  <Label className="text-[17px] tracking-[1px] text-muted-foreground">
                    Add New Donation Here ❤️
                  </Label>
                </DialogTitle>
                <DialogDescription className="text-center text-zinc-500">
                  Vos contributions financières nous permettent de poursuivre
                  notre mission et de fournir des ressources essentielles à ceux
                  qui en ont le plus besoin. Faites un don aujourd'hui.
                </DialogDescription>
              </DialogHeader>
              <AddDonationForm />
            </DialogContent>
          </Dialog>
        </Button>
      </div>
      <Tabs defaultValue="other" className="">
        <TabsList>
          <TabsTrigger value="money">Money</TabsTrigger>
          <TabsTrigger value="clothes">Clothes</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        <TabsContent value="money" className="grid grid-cols-3 gap-4">
          {donations.length > 0 &&
            donations.map((donation) => {
              const { type } = donation;
              if (type === "money") {
                return (
                  <TabsContent value={type} key={donation._id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{donation.title}</CardTitle>
                        <CardDescription>
                          {donation.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <p>{donation.type}</p>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                );
              }
            })}
        </TabsContent>
        <TabsContent value="clothes" className="grid grid-cols-3 gap-4">
          {donations.length > 0 &&
            donations.map((donation) => {
              const { type } = donation;
              if (type === "clothes") {
                return (
                  <TabsContent value={type} key={donation._id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{donation.title}</CardTitle>
                        <CardDescription>
                          {donation.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <p>{donation.type}</p>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                );
              }
            })}
        </TabsContent>
        <TabsContent value="food" className="grid grid-cols-3 gap-4">
          {donations.length > 0 &&
            donations.map((donation) => {
              const { type } = donation;
              if (type === "food") {
                return (
                  <TabsContent value={type} key={donation._id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{donation.title}</CardTitle>
                        <CardDescription>
                          {donation.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <p>{donation.type}</p>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                );
              }
            })}
        </TabsContent>
        <TabsContent value="other" className="grid grid-cols-3 gap-4">
          {donations.length > 0 &&
            donations.map((donation) => {
              const { type } = donation;
              if (type === "other") {
                return (
                  <TabsContent value={type} key={donation._id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{donation.title}</CardTitle>
                        <CardDescription>
                          {donation.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <p>{donation.type}</p>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                );
              }
            })}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HeaderDashboard;
