export const UserCard = ({ name, tel, username }) => {



	return (
		<tr className="bg-white border-b hover:bg-gray-50 fade-in">
			<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize">{name}</th>
			<td className="px-6 py-4">{tel}</td>
			<td className="px-6 py-4">{username}</td>
		</tr>
	)
}
