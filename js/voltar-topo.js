export function voltarTopo() {
    const botaoTopo = document.getElementById("voltar-topo");

    botaoTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}