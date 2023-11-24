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
} export default cadastraUsuario;



export async function buscaUsuario (emailLogin) {
        const requisita = await fetch("http://localhost:8000/unico", {
            method: "post",
            body: JSON.stringify({
                email: emailLogin
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resposta = await requisita.json();
        return resposta;
}