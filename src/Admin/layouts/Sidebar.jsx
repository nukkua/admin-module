import { NavLink } from "react-router-dom"
import { OrdersIcon } from "./icons/OrdersIcon"
import { ReportsIcon } from "./icons/ReportsIcon"
import { UsersIcon } from "./icons/UsersIcon"
import { EventsIcon } from "./icons/EventsIcon"

const itemsFromSideBar = [
	{
		id: 1,
		name: 'Clientes',
		icon: <UsersIcon />,
		to: "/"
	},

	{
		id: 2,
		name: 'Ordenes',
		icon: <OrdersIcon />,
		to: "/orders"
	},
	{
		id: 3,
		name: 'Eventos',
		icon: <EventsIcon />,
		to: "/events"
	},
	{
		id: 4,
		name: 'Reportes',
		icon: <ReportsIcon />,
		to: "/reports"
	}
]
export const Sidebar = () => {
	return (

		<aside className="flex flex-col px-4 py-5 h-screen w-64 overflow-y-auto fixed bg-white rounded-xl shadow-lg">
			<h1 className="text-xl font-extrabold uppercase mb-10 slide-in">Panel Administrativo</h1>
			<ul className="flex flex-col gap-2">
				{
					itemsFromSideBar.map((item) => (
						<li className="flex h-14 items-center border-b slide-in hover:bg-gray-50" key={item.id}>
							<NavLink className="flex gap-2 navlink" to={item.to}>
								{item.icon}
								{item.name}
							</NavLink>
						</li>
					))
				}
			</ul>
			<p className="slide-in hover:bg-gray-50">
				<NavLink className="flex gap-2 h-12 items-center navlink" to="/logout">
					<svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							<path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round"></path>
						</g>
					</svg>
					Cerrar Sesion
				</NavLink>
			</p>
		</aside>


	)
}
