'use server'

import { revalidateTag } from 'next/cache'

export const handleCreateUserAction = async (data: any) => {
	const res = await fetch('http://localhost:8000/users', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	revalidateTag('list-users')
	return res.json()
}

export const handleUpdateUserAction = (data: any) => {
	console.log('>>> Check data: ', data)
}
