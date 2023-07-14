let etanol, gasolina

function calcular() {
    etanol = parseFloat(formularioFlex.valoretanol.value.replace("," , "."))/*substitui a virgula por ponto */
    gasolina = parseFloat(formularioFlex.valorgasolina.value.replace("," , "."))/*substitui a virgula por ponto */

    if (etanol<=(0.72 * gasolina)) {
        document.querySelector('#status').src = "alcool.png";
    }else{
        document.querySelector('#status').src = "gasolina.png";
    }
}
function imagem(){
    document.querySelector('#status').src = "neutro.png"
}