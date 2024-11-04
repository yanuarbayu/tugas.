function inputNilai() {
    const jumlahMapel = document.getElementById('jumlahMapel').value;
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';

    // Validasi jumlah mata pelajaran
    if (isNaN(jumlahMapel) || jumlahMapel <= 0) {
        alert('Masukan jumlah mata pelajaran yang valid.');
        return;
    }

    for (let count = 0; count < jumlahMapel; count++) {
        inputFields.innerHTML += `
            <div class="input-group">
                <label for="nilai${count}">Nilai Mata Pelajaran ${count + 1}:</label>
                <input type="number" id="nilai${count}" min="0" max="100" placeholder="Masukkan nilai" required>
            </div>`;
    }

    document.getElementById('nilaiInputs').style.display = 'block';
}

function hitungRataRata() {
    const jumlahMapel = document.getElementById('jumlahMapel').value;
    let totalNilai = 0;

    for (let count = 0; count < jumlahMapel; count++) {
        const nilai = parseFloat(document.getElementById(`nilai${count}`).value);
        if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            alert(`Nilai untuk mata pelajaran ${count + 1} tidak valid. Harap masukkan nilai antara 0 dan 100.`);
            return;
        }
        totalNilai += nilai;
    }

    const rataRata = totalNilai / jumlahMapel;
    let grade = '';

    if (rataRata >= 90) {
        grade = 'A';
    } else if (rataRata >= 70) {
        grade = 'B';
    } else {
        grade = 'C';
    }

    document.getElementById('rataRata').innerText = `Nilai Rata-Rata: ${rataRata.toFixed(2)}`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
    document.getElementById('hasil').style.display = 'block';
}

function resetInput() {
    document.getElementById('jumlahMapel').value = '';
    document.getElementById('inputFields').innerHTML = '';
    document.getElementById('nilaiInputs').style.display = 'none';
    document.getElementById('hasil').style.display = 'none';
}