
export default class AtendimentosService {

    static novoAtendimento = async (nome_Cliente, servico, nome_Colaborador) => {
        try {
            const register = await fetch(`${process.env.REACT_APP_BASE_URL}/cliente`, {
                method: 'PUT',
                body: JSON.stringify({
                    nome: name,
                    telefone: phone,
                    email: email,
                    dataNascimento: data_nascimento
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json());

            if (register) {
                return register;
            }
            else {
                return error
            }

        } catch (error) {
            return null;
        }
    };

}