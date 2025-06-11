function CelParaFah(){
    let tempc = document.getElementById("entradaCelsius").value;
    let tempf = ((tempc / 5) * 9 +32);
    document.getElementById("saidaFahrenheit").value = tempf.toFixed(1)
}

document.getElementById("calculaTempF").addEventListener("click",CelParaFah);

function FahparaCel(){
    let tempf = document.getElementById("entradaF").value;
    let tempc = ((tempf -  32) * 5 / 9);
    document.getElementById("saidaC").value = tempc.toFixed(1)
}

document.getElementById("calculaTempC").addEventListener("click",FahparaCel);
