/*
async function encontraPeloEmail (email) {
    try {
        const requisita = await fetch("http://localhost:8000/unico", {
            method: "get",
            body: JSON.stringify({
                email: email
            })
        });
        const resposta = await requisita.json;
        return resposta;
    }

    catch {

    }
}

export default encontraPeloEmail;
*/

async function cadastraUsuario (email, senha) {
    try {
        const requisita = await fetch("http://localhost:8000/cadastro", {
            method: "post",
            body: JSON.stringify({
                email: email,
                senha: senha
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resposta = await requisita.json();
        return resposta;
    }

    catch {
        console.error("Deu erro!")
    }
}

export default cadastraUsuario;