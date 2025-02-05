import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

const SectionTitle = ({ children, className }: Props) => {
	return (
		<h1
			className={cn(
				"relative z-10 text-5xl mb-10 md:text-4xl xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold tracking-wide w-full",
				className,
			)}>
			{children}
		</h1>
	);
};

export default SectionTitle;
