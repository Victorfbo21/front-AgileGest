
export default class ServicosServices {

    static cadastrarServico = async (nomeServico, valorServico, tempoMedio,) => {
        try {
            const register = await fetch(`${process.env.REACT_APP_BASE_URL}/servico`, {
                method: 'PUT',
                body: JSON.stringify({
                    nomeServico: nomeServico,
                    valor: valorServico,
                    tempoMedio: tempoMedio,
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

}