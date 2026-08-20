// ======================================
// IGREJA VIVA
// JavaScript
// ======================================


// DATA

const hoje = new Date();

const dataFormatada =
    String(hoje.getDate()).padStart(2, "0") +
    "/" +
    String(hoje.getMonth() + 1).padStart(2, "0") +
    "/" +
    hoje.getFullYear();


document.getElementById("date").textContent =
    dataFormatada;


document.getElementById("liturgyDate").textContent =
    dataFormatada;


// ======================================
// LITURGIA
// ======================================

const liturgias = {

    "20/8": {

        titulo:
            "São Bernardo, abade e doutor da Igreja",

        leitura:
            "A liturgia apresenta a Palavra de Deus própria da celebração de hoje.",

        evangelho:
            "O Evangelho convida-nos a permanecer fiéis a Cristo e a viver a fé com amor."

    },

    "21/8": {

        titulo:
            "São Pio X, papa",

        leitura:
            "A Palavra de Deus ilumina a missão da Igreja e chama os fiéis à conversão.",

        evangelho:
            "Cristo chama seus discípulos a viverem o Evangelho com fidelidade."

    },

    "22/8": {

        titulo:
            "Bem-aventurada Virgem Maria, Rainha",

        leitura:
            "A Igreja contempla a presença de Maria na história da salvação.",

        evangelho:
            "Maria aponta para Cristo e nos ensina a acolher a vontade de Deus."

    }

};


const chave =
    hoje.getDate() +
    "/" +
    (hoje.getMonth() + 1);


const liturgia =
    liturgias[chave] || {

        titulo:
            "Liturgia do Dia",

        leitura:
            "Consulte as leituras da celebração de hoje na fonte oficial.",

        evangelho:
            "Consulte o Evangelho do dia na fonte oficial."

    };


document.getElementById("heroTitle").textContent =
    liturgia.titulo;


document.getElementById("liturgyTitle").textContent =
    liturgia.titulo;


document.getElementById("reading").textContent =
    liturgia.leitura;


document.getElementById("gospel").textContent =
    liturgia.evangelho;


// ======================================
// NOTÍCIAS
// ======================================

const noticias = [

    {
        categoria: "VATICANO",

        titulo:
            "Acompanhe as principais notícias da Santa Sé",

        texto:
            "Confira diariamente as novidades e acontecimentos do Vaticano.",

        link:
            "https://www.vaticannews.va/pt/vaticano.html"
    },

    {
        categoria: "PAPA",

        titulo:
            "Atividades e mensagens do Santo Padre",

        texto:
            "Acompanhe discursos, encontros e atividades do Papa.",

        link:
            "https://www.vaticannews.va/pt/papa.html"
    },

    {
        categoria: "IGREJA",

        titulo:
            "A vida da Igreja pelo mundo",

        texto:
            "Notícias sobre comunidades, dioceses e iniciativas católicas.",

        link:
            "https://www.vaticannews.va/pt/igreja.html"
    },

    {
        categoria: "SANTA SÉ",

        titulo:
            "Documentos oficiais do Vaticano",

        texto:
            "Consulte diretamente os documentos publicados pela Santa Sé.",

        link:
            "https://www.vatican.va/"
    }

];


function carregarNoticias() {

    const container =
        document.getElementById("newsContainer");


    container.innerHTML = "";


    noticias.forEach((noticia, index) => {

        const article =
            document.createElement("article");


        article.className =
            "news" +
            (index === 0 ? " featured" : "");


        article.innerHTML = `

            <div>

                <div class="category">
                    ${noticia.categoria}
                </div>

                <h3>
                    ${noticia.titulo}
                </h3>

                <p>
                    ${noticia.texto}
                </p>

            </div>

            <a
                href="${noticia.link}"
                target="_blank"
                rel="noopener"
            >
                Ler notícia →
            </a>

        `;


        container.appendChild(article);

    });


    atualizarTicker();

}


function atualizarTicker() {

    const ticker =
        document.getElementById("ticker");


    ticker.textContent =
        noticias
            .map(n => "✦ " + n.titulo)
            .join("     •     ");

}


carregarNoticias();


// ======================================
// BOTÃO ATUALIZAR
// ======================================

document
    .getElementById("refreshNews")
    .addEventListener("click", function () {

        this.textContent = "Atualizando...";


        setTimeout(() => {

            carregarNoticias();

            this.textContent = "↻ Atualizar";

        }, 700);

    });


// ======================================
// TEMA
// ======================================

const themeButton =
    document.getElementById("themeButton");


if (
    localStorage.getItem("igrejaTema") ===
    "dark"
) {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "igrejaTema",
        dark ? "dark" : "light"
    );


    themeButton.textContent =
        dark ? "☀" : "☾";

});


// ======================================
// LOGIN VISUAL
// ======================================

const modal =
    document.getElementById("loginModal");


const loginButton =
    document.getElementById("loginButton");


const closeModal =
    document.getElementById("closeModal");


loginButton.addEventListener("click", () => {

    modal.classList.remove("hidden");

});


closeModal.addEventListener("click", () => {

    modal.classList.add("hidden");

});


document
    .querySelector(".modal-background")
    .addEventListener("click", () => {

        modal.classList.add("hidden");

    });


document
    .getElementById("loginForm")
    .addEventListener("submit", event => {

        event.preventDefault();


        const email =
            document.getElementById("email").value;


        if (email) {

            localStorage.setItem(
                "igrejaUsuario",
                email
            );


            modal.classList.add("hidden");


            loginButton.textContent =
                "Minha conta";

        }

    });


// ======================================
// RESTAURAR LOGIN
// ======================================

if (localStorage.getItem("igrejaUsuario")) {

    loginButton.textContent =
        "Minha conta";

}


// ======================================
// BARRA DE PROGRESSO
// ======================================

window.addEventListener("scroll", () => {

    const altura =
        document.documentElement.scrollHeight -
        window.innerHeight;


    const progresso =
        (window.scrollY / altura) * 100;


    document.getElementById(
        "progress"
    ).style.width =
        progresso + "%";

});
