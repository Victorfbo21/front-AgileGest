
export default class ColaboradorService {

    static cadastrarColaborador = async (name, phone, email, data_nascimento, funcao) => {
        try {
            const register = await fetch(`${process.env.REACT_APP_BASE_URL}/colab`, {
                method: 'PUT',
                body: JSON.stringify({
                    nome: name,
                    telefone: phone,
                    email: email,
                    dataNascimento: data_nascimento,
                    funcao: funcao
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