import { NextRequest } from 'next/server';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
	throw new Error('TMDB_API_KEY environment variable is not set');
}

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${TMDB_API_KEY}`
	}
};

/**
 * TMDB Authentication API endpoint
 */
export async function GET(request: NextRequest) {
	try {
		const response = await fetch('https://api.themoviedb.org/3/authentication', options);
		const data = await response.json();
		
		return Response.json(data);
	} catch (error) {
		console.error('TMDB Auth Error:', error);
		return Response.json(
			{ error: 'Failed to authenticate with TMDB' }, 
			{ status: 500 }
		);
	}
}
