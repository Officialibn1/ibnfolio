import React, { ReactNode } from "react";

const ShrimmerButton = ({ children }: { children: ReactNode }) => {
	return (
		<button className='inline-flex h-12 z-10 mx-auto animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
			{children}
		</button>
	);
};

export default ShrimmerButton;
