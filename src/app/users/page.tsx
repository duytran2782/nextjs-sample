import UsersTable from '@/components/users/users.table'
import React from 'react'

interface IProps {
	params: { id: string }
	searchParams: { page: number }
}

const UsersPage = async ({ params, searchParams }: IProps) => {
	const limit = 1
	const page = +searchParams?.page ?? 1

	const res = await fetch(
		`http://localhost:8000/users?_page=${page}&_limit=${limit}`,
		{
			method: 'GET',
			next: { tags: ['list-users'] },
		}
	)
	const data = await res.json()

	const total_items = +(res.headers?.get('X-Total-Count') ?? 0)

	return (
		<div>
			<UsersTable
				users={data ? data : []}
				meta={{
					current: page,
					pageSize: limit,
					total: total_items,
				}}
			/>
		</div>
	)
}

export default UsersPage
