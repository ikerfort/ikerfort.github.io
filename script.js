function validaContra(pass) {
    if (pass.length < 6) {
        alert("Contrasenya massa curta");
        return false;
    } else {
        alert("Contrasenya correcta");
        return true;
    }
}
function validaDOC(doc) {
    var docu = doc;
    var num, ultima_lletra, lletra;
    var expressio_regular_docu = /^[XYZ]?\d{5,8}[A-Z]$/;
    docu = docu.toUpperCase();
    if (expressio_regular_docu.test(docu) === true) {
        num = docu.substr(0, docu.length - 1);
        num = num.replace('X', 0);
        num = num.replace('Y', 1);
        num = num.replace('Z', 2);
        ultima_lletra = docu.substr(docu.length - 1, 1);
        alert("Ultima lletra " + ultima_lletra)
        num = num % 23;
        lletra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        lletra = lletra.substring(num, num + 1);
        if (lletra != ultima_lletra) {
            alert('DOCUMENT erroni, la lletra no se correspon');
            return false;
        } else {
            alert('DOCUNENT correcte');
            return true;
        }
    } else {
        alert('DOCUNENT erroni, la lletra no se correspon');
        return false;
    }

}

function validarForm() {
    var nom = document.getElementById("nom").value;
    var pass = document.getElementById("pass").value;
    var doc = document.getElementById("doc").value;
    alert(nom + ". Comencem a validar ... " + doc);
    if (validaContra(pass) && validaDOC(doc)) {
        alert("Tot correcte, gracies " + nom);
        document.getElenentById("formular").submit();
        return true;
    }
    else {
        return false;
    }
}
