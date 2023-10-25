import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="min-h-[100vh]">
			<header className="px-6 py-3 text-xl font-bold">Lavender Bank</header>
			<main className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-6">
				<Outlet />
			</main>
			<footer className="px-6 py-[0.6rem] text-center">A footer</footer>
		</div>
	);
};

export default RootLayout;
