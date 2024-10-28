import { NavLink } from "react-router-dom"

export const Navbar = () => {
	return (
		<header className="flex bg-primary px-3 h-16 xl:h-20 2xl:h-24 shadow-md w-full sm:px-10 xl:px-40 items-center fixed z-10">
			<NavLink
				to="/"
				className="navlink font-bold sm:text-3xl xl:text-3xl hover:text-gray-900 uppercase text-left m-0 leading-none flex items-center gap-3"
			>
				<img className="w-20 h-20 drop-shadow-lg" src="/llama.png" alt="" />
				<p>Chalita Oe</p>
			</NavLink>
		</header>
	)
}
