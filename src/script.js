const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

function horarioAtual(){

    const agora = new Date();

    return agora.toLocaleTimeString(
        "pt-BR",
        {
            hour:"2-digit",
            minute:"2-digit"
        }
    );
}

function scrollChat(){

    messages.scrollTop =
    messages.scrollHeight;
}

function enviarMensagem(){

    const texto = input.value.trim();

    if(texto === ""){
        return;
    }

    const novaMensagem =
    document.createElement("div");

    novaMensagem.classList.add(
        "message",
        "sent"
    );

    novaMensagem.innerHTML = `
    <div class="message-content">
        ${texto}
    </div>

    <div class="message-time">
        ${horarioAtual()}
    </div>
    `;

    messages.appendChild(
        novaMensagem
    );

    input.value = "";

    scrollChat();
}

sendBtn.addEventListener(
    "click",
    enviarMensagem
);

input.addEventListener(
    "keypress",
    function(e){

        if(e.key === "Enter"){

            e.preventDefault();

            enviarMensagem();
        }
    }
);

const pesquisa =
document.querySelector(".search-input");

pesquisa.addEventListener(
    "keyup",
    function(){

        const valor =
        this.value.toLowerCase();

        const contatos =
        document.querySelectorAll(
            ".conversation"
        );

        contatos.forEach(contato=>{

            const nome =
            contato.querySelector("h3")
            .innerText
            .toLowerCase();

            contato.style.display =
            nome.includes(valor)
            ? "flex"
            : "none";
        });

    }
);

const conversas =
document.querySelectorAll(".conversation");

const headerName =
document.getElementById("headerName");

const headerAvatar =
document.getElementById("headerAvatar");

const headerStatus =
document.getElementById("headerStatus");

conversas.forEach(conversa => {

    conversa.addEventListener("click", () => {

        document
            .querySelector(".conversation.active")
            ?.classList.remove("active");

        conversa.classList.add("active");

        // Nome

        const nome =
        conversa.querySelector("h3").innerText;

        headerName.innerText = nome;

        // Avatar

        const avatar =
        conversa.querySelector(".avatar").src;

        headerAvatar.src = avatar;

        // Status

        const status =
        conversa.querySelector(".status");

        if(status.classList.contains("online")){

            headerStatus.innerText = "Online";

        }else{

            headerStatus.innerText = "Offline";

        }

    });

});