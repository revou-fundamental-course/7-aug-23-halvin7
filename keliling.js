document.addEventListener('DOMContentLoaded', function () {
    const sisia = document.getElementById('sisia');
    const sisib = document.getElementById('sisib');
    const sisic = document.getElementById('sisic');
    const hitungkeliling = document.getElementById('hitungkeliling');
    const outputk = document.getElementById('outputk');

    hitungkeliling.addEventListener('click', function () {
        let a = parseFloat(sisia.value);
        let b = parseFloat(sisib.value);
        let c = parseFloat(sisic.value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            output.innerHTML = 'Masukkan angka valid untuk alas dan tinggi.';
        } else {
            let keliling = a + b + c;
            outputk.innerHTML =
                'k = S1 + S2 + S3 <br>' +
                'k = ' + a + ' + ' + b + ' + ' + c + '<br>' +
                'k =  ' + keliling;
        }

    });
});
