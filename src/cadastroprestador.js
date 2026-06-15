document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cpf = document.getElementById("cpf").value.trim();

        if (!nome || !email || !telefone || !cpf) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        const cpfNumeros = cpf.replace(/\D/g, "");

        if (cpfNumeros.length !== 11) {
            alert("CPF inválido.");
            return;
        }

        const dadosPrestador = {
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            nascimento: document.getElementById("nascimento").value,
            cep: document.getElementById("cep").value,
            endereco: document.getElementById("endereco").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            area: document.getElementById("area").value,
            bio: document.getElementById("bio").value
        };

        localStorage.setItem(
            "prestadorSkillTide",
            JSON.stringify(dadosPrestador)
        );

        alert("Perfil cadastrado com sucesso!");

        form.reset();
    });

});