function perimetroCuadrado(lado) {
    return lado*4;
}
function areaCuadrado(lado) {
    return lado*lado;
}


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+lado3;
}
function areaTriangulo(base,altura){
    return base*altura/2;
}

function periCirculo(radio){
    return ((radio*2)*Math.PI);

}
function areaCir(radio){
    return ((radio*radio)*Math.PI);
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetroCirculo = periCirculo(value);
    alert(perimetroCirculo);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const areaCirculo = areaCir(value);
    alert(areaCirculo);
}
