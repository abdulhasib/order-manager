import gql from 'graphql-tag'

export const currentOrdersQuery = gql`
	{
		shisha_order(where: { status: { _eq: "new" } }) {
			created_at
			modified_at
			id
			employee {
				first_name
			}
		}
	}
`
