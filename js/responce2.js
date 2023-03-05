function resultado(){
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;



    if (document.getElementById('t1').checked==true) {p1=10}
    else {p1=0}

    if (document.getElementById('t2').checked==true) {p2=10}
    else {p2=0}


    if (document.getElementById('t3').checked==true) {p3=10}
    else {p3=0}


    if (document.getElementById('t4').checked==true) {p4=10}
    else {p4=0}


    if (document.getElementById('t5').checked==true) {p5=10}
    else {p5=0}


    if (document.getElementById('t6').checked==true) {p6=10}
    else {p6=0}


    if (document.getElementById('t7').checked==true) {p7=10}
    else {p7=0}


    if (document.getElementById('t8').checked==true) {p8=10}
    else {p8=0}


    if (document.getElementById('t9').checked==true) {p9=10}
    else {p9=0}


    if (document.getElementById('t10').checked==true) {p10=10}
    else {p10=0}


    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    if (nota>100) {
     alert("Lo hiciste exelente! sacaste un " + nota + "% increible!")
    }
    else{
        alert("Lo hiciste bien sacaste un " + nota + "%")
    }
    window.location = 'quest2.html'
}