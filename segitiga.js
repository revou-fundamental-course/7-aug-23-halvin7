document.addEventListener('DOMContentLoaded', function () {
    const alas = document.getElementById('alas');
    const tinggi = document.getElementById('tinggi');
    const hitung = document.getElementById('hitung');
    const output = document.getElementById('output');

    hitung.addEventListener('click', function () {
        let a = parseFloat(alas.value);
        let t = parseFloat(tinggi.value);
        if (isNaN(a) || isNaN(t)) {
            output.innerHTML = 'Masukkan angka valid untuk alas dan tinggi.';
        } else {
            let luas = 0.5 * a * t;
            output.innerHTML =
                'L = 1/2 x a x l <br>' +
                'L = 1/2 x ' + a + 'x' + t + '<br>' +
                'L =  ' + luas;
        }

    });
});
