function validarEntrada() {

    var primeiroDigito = document.getElementById("primeiroDigito").value;
    var segundoDigito = document.getElementById("segundoDigito").value;
    var resto = document.getElementById("resto");

    if (!/^[\d]{9}$/.test(primeiroDigito) || !/^[\d]{2}$/.test(segundoDigito)) {
        resto.innerHTML = "Digite apenas números!!! Ou verifique se os campos estão preenchidos completamente!!!";
        return;
    }

    var somaPrimeiroDigito = 0;
    var somaSegundoDigito = 0;
    for (var i = 0; i < primeiroDigito.length; i++) {
        somaPrimeiroDigito += parseInt(primeiroDigito.charAt(i));
    }
    for (var i = 0; i < segundoDigito.length; i++) {
        somaSegundoDigito += parseInt(segundoDigito.charAt(i));
    }

    if (somaSegundoDigito == 0) {
        resto.innerHTML = "Entrada IN-válida";
        return;
    }

    if (somaPrimeiroDigito % somaSegundoDigito == 0 || somaPrimeiroDigito % somaSegundoDigito == 2 || somaPrimeiroDigito % somaSegundoDigito == 6 || somaPrimeiroDigito % somaSegundoDigito == 8) {
        resto.innerHTML = "Entrada válida";
    } else {
        resto.innerHTML = "Entrada IN-válida";
    }
}