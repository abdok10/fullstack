"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layoutGrid";
import image1 from '@/public/donation_img1.jpg'
import image2 from '@/public/donation_img2.jpg'
import image3 from '@/public/donation_img3.jpg'
import image4 from '@/public/donation-6164135_640.png'

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
      <div>
      <p className="font-bold text-4xl text-white">Engagez-vous pour une cause</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Votre engagement en tant que volontaire peut avoir un impact significatif. Aidez-nous à atteindre nos objectifs et à soutenir nos initiatives en rejoignant notre réseau de bénévoles.
      </p>
    </div>    
    );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Chaque don compte</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Vos contributions financières nous permettent de poursuivre notre mission et de fournir des ressources essentielles à ceux qui en ont le plus besoin. Faites un don aujourd'hui.
      </p>
    </div>
  )
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Votre générosité compte</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Grâce à vos dons, nous pouvons offrir de l'aide à ceux qui en ont besoin et transformer des vies. Rejoignez-nous pour faire la différence.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
    <p className="font-bold text-4xl text-white">Devenez bénévole</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      En donnant de votre temps, vous contribuez à des causes importantes et aidez à construire une communauté plus forte. Rejoignez notre équipe de volontaires dès aujourd'hui.
    </p>
  </div>    
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: image1
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: image2
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: image3
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: image4
  },
];
