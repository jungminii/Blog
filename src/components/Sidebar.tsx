"use client"

import Link from "next/link"
import { FC, ReactNode } from "react"

import Image from "next/image";
import dog from "../../public/image/picture.jpeg";

interface SpecificsProps {
    children: ReactNode;
}

const Sidebar: FC<SpecificsProps> = ({
    children,
}: SpecificsProps): ReactNode => {
    const moveBase = () => {
        window.location.replace("/");
    };

    return (
        <div className="flex flex-col h-full w-1/4 bg-[#3a7c3f] items-center pt-5">
            <Link href={"/"}>
                <Image src={dog} 
                  alt="pik" 
                  className="w-[250px] h-[250px] rounded-full shawdow-2xl" 
                  onClick= {moveBase}
                  />
            </Link>
            <p className="mt-10 text-[50px] font-bold">hi</p>
            <p className="text-center">This is jungmin!!!</p>
        </div>
    )
}

export default Sidebar;