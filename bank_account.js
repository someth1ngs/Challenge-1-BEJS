let saldo = 0;

function updateSaldoDisplay() {
    document.getElementById('saldoDisplay').innerText = "Saldo: Rp" + formatRupiah(saldo);
}

function formatRupiah(angka) {
    return angka.toLocaleString('id-ID');
}

function tambahSaldo() {
    let tambah = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: "));
    if (!isNaN(tambah)) {
        saldo += tambah;
        updateSaldoDisplay(); // Perbarui tampilan saldo
        window.alert("Saldo baru: Rp" + formatRupiah(saldo));
    } else {
        window.alert("Mohon masukkan jumlah saldo yang valid.");
    }
}

function kurangiSaldo() {
    let kurang = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    if (!isNaN(kurang)) {
        if (kurang > saldo) {
            window.alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
        } else {
            saldo -= kurang;
            updateSaldoDisplay(); // Perbarui tampilan saldo
            window.alert("Saldo baru: Rp" + formatRupiah(saldo));
        }
    } else {
        window.alert("Mohon masukkan jumlah saldo yang valid.");
    }
}

// Panggil fungsi updateSaldoDisplay() untuk menampilkan saldo awal
updateSaldoDisplay();