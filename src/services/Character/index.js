import api from '../api';

export async function list(page) {
	try {
		const { data } = await api.get(`character?page=${page}`);

		if (data.result.lenght === 0) {
			return {
				message: 'Não foi possível listar os personagens.',
				success: false,
				error: data.error,
			};
		}

		return {
			message: 'Personagens listados com sucesso.',
			success: true,
			characters: data.result,
			info: data.info,
		};
	} catch (error) {
		return {
			message: 'Não foi possível listar os personagens.',
			success: false,
			errors: error,
		};
	}
}
