function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('t0').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('t1').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('t2').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('t3').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('t4').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('t5').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('t6').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('t7').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('t8').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('t9').checked==true) {p10=1}
    else {p10=0}

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    alert(" Aciertaste " + nota + " Veces. Felicidades, hiciste un gran trabajo");
    window.location = 'cuestionario.html'
}