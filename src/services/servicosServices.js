
export default class ServicosServices {

    static cadastrarServico = async ({ servico }) => {

        try {
            const register = await fetch(`${process.env.REACT_APP_BASE_URL}/servico/create`, {
                method: 'PUT',
                body: JSON.stringify({
                    nomeServico: servico.nomeServico,
                    valor: servico.valorServico,
                    tempoMedio: servico.tempoMedio,
                    isActive: true
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

    static listarServicos = async () => {
        try {
            const servicos = await fetch(`${process.env.REACT_APP_BASE_URL}/servico/list`, {
                method: 'GET'
            })
                .then(response => response.json());

            if (servicos) {
                return servicos
            }
            else {
                return error
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    static deletarServico = async (id) => {
        try {
            const servicoToDeleted = await fetch(`${process.env.REACT_APP_BASE_URL}/servico/delete/${id}`, {
                method: 'DELETE',

            })
                .then(response => response.json())
            if (servicoToDeleted) {
                return servicoToDeleted
            }
        }
        catch (err) {
            console.log(err)
        }
    }

}