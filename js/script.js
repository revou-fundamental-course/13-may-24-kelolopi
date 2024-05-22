function showHitungLuasSegitiga(){
    document.getElementById('btnLuasSegitiga').className = 'fullButton active';
    document.getElementById('btnKelilingSegitiga').className = 'fullButton';
    document.getElementById('luasSegitigaDiv').style.display = 'block';
    document.getElementById('kelilingSegitigaDiv').style.display = 'none';
}

function showHitungKelilingSegitiga(){
    document.getElementById('btnLuasSegitiga').className = 'fullButton';
    document.getElementById('btnKelilingSegitiga').className = 'fullButton active';
    document.getElementById('luasSegitigaDiv').style.display = 'none';
    document.getElementById('kelilingSegitigaDiv').style.display = 'block';
}

document.getElementById("btnLuasSegitiga").addEventListener("click", showHitungLuasSegitiga); 
document.getElementById("btnKelilingSegitiga").addEventListener("click", showHitungKelilingSegitiga); 

showHitungLuasSegitiga();

document.getElementById("formLuas").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.getElementById('hasilLuasSegitigaDiv').innerHTML = '';

    let alasLuasSegitiga = document.getElementById('alasLuasSegitigaField').value;
    let tinggiLuasSegitiga = document.getElementById('tinggiLuasSegitigaField').value;
  
    if(!(isNumeric(alasLuasSegitiga) && isNumeric(tinggiLuasSegitiga))){
        alert("perhitungan gagal, terdapat inputan bukan angka");
        return;
    }

    alasLuasSegitiga = Number(alasLuasSegitiga);
    tinggiLuasSegitiga = Number(tinggiLuasSegitiga);

    const hasilLuasSegitiga = 1/2 * alasLuasSegitiga * tinggiLuasSegitiga;
    document.getElementById('hasilLuasSegitigaDiv').innerHTML = `
     <h3>Hasil Perhitungan</h3>
     <p>L = 1/2 x a x t<br>L = 1/2 x ${alasLuasSegitiga} x ${tinggiLuasSegitiga}<br>L = ${hasilLuasSegitiga}</p>
    `;

    document.getElementById("hasilLuasSegitigaDiv").scrollIntoView();
});

document.getElementById("formKeliling").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.getElementById('hasilKelilingSegitigaDiv').innerHTML = '';

    let sisiAKelilingSegitiga = document.getElementById('sisiAKelilingSegitigaField').value;
    let sisiBKelilingSegitiga = document.getElementById('sisiBKelilingSegitigaField').value;
    let sisiCKelilingSegitiga = document.getElementById('sisiCKelilingSegitigaField').value;
  
    if(!(isNumeric(sisiAKelilingSegitiga) && isNumeric(sisiBKelilingSegitiga) &&  isNumeric(sisiCKelilingSegitiga))){
        alert("perhitungan gagal, terdapat inputan bukan angka");
        return;
    }

    sisiAKelilingSegitiga = Number(sisiAKelilingSegitiga);
    sisiBKelilingSegitiga = Number(sisiBKelilingSegitiga);
    sisiCKelilingSegitiga = Number(sisiCKelilingSegitiga);

    const hasilKelilingSegitiga = sisiAKelilingSegitiga + sisiBKelilingSegitiga + sisiCKelilingSegitiga;
    document.getElementById('hasilKelilingSegitigaDiv').innerHTML = `
     <h3>Hasil Perhitungan</h3>
     <p>K = S1 + S2 + S3<br>K = ${sisiAKelilingSegitiga} + ${sisiBKelilingSegitiga} + ${sisiCKelilingSegitiga}<br>K = ${hasilKelilingSegitiga}</p>
    `;

    document.getElementById("hasilKelilingSegitigaDiv").scrollIntoView();
});

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}