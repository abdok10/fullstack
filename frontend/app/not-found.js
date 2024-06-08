import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col">
            <Image
                src="/404.svg"
                alt="404"
                width={500}
                height={500}
                className="object-contain"
            />

            <Link href="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
}
