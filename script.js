function inputKriteria() {
    var jumlahKriteria = document.getElementById("jumlahKriteria").value;
    var container = document.getElementById("formKriteria");
    container.innerHTML = "";

    for (var i = 0; i < jumlahKriteria; i++) {
        var formKriteria = document.createElement("form");
        formKriteria.id = "formKriteria" + i;
        var labelNamaKriteria = document.createElement("label");
        labelNamaKriteria.innerHTML = "Nama Kriteria " + (i + 1) + ": ";
        var inputNamaKriteria = document.createElement("input");
        inputNamaKriteria.type = "text";
        inputNamaKriteria.name = "inputNamaKriteria";
        var br1 = document.createElement("br");
        var labelJenisKriteria = document.createElement("label");
        labelJenisKriteria.innerHTML = "Jenis Kriteria " + (i + 1) + ": ";
        var inputJenisKriteria = document.createElement("select");
        inputJenisKriteria.name = "inputJenisKriteria";
        var option1 = document.createElement("option");
        option1.value = "Benefit";
        option1.text = "Benefit";
        var option2 = document.createElement("option");
        option2.value = "Cost";
        option2.text = "Cost";
        inputJenisKriteria.appendChild(option1);
        inputJenisKriteria.appendChild(option2);
        var br2 = document.createElement("br");
        var labelNilaiKriteria = document.createElement("label");
        labelNilaiKriteria.innerHTML = "Nilai Kriteria " + (i + 1) + ": ";
        var inputNilaiKriteria = document.createElement("input");
        inputNilaiKriteria.type = "text";
        inputNilaiKriteria.name = "inputNilaiKriteria";
        var br3 = document.createElement("br");
        formKriteria.appendChild(labelNamaKriteria);
        formKriteria.appendChild(inputNamaKriteria);
        formKriteria.appendChild(br1);
        formKriteria.appendChild(labelJenisKriteria);
        formKriteria.appendChild(inputJenisKriteria);
        formKriteria.appendChild(br2);
        formKriteria.appendChild(labelNilaiKriteria);
        formKriteria.appendChild(inputNilaiKriteria);
        formKriteria.appendChild(br3);
        container.appendChild(formKriteria);
    }

    // Tampilkan form submit
    document.getElementById("submitKriteria").style.display = "block";
}

function tabelKriteria() {
    var jumlah = document.getElementById("jumlahKriteria").value;
    var tabelContainer = document.getElementById("tabelContainer");
    tabelContainer.innerHTML = "";

    var tabel = document.createElement("table");
    tabel.style.border = "1px solid black";  // Menambahkan border pada tabel
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerHTML = "Kriteria";
    th1.style.border = "1px solid black";  // Menambahkan border pada header tabel
    var th2 = document.createElement("th");
    th2.innerHTML = "Jenis";
    th2.style.border = "1px solid black";  // Menambahkan border pada header tabel
    var th3 = document.createElement("th");
    th3.innerHTML = "Bobot";
    th3.style.border = "1px solid black";  // Menambahkan border pada header tabel
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    tabel.appendChild(thead);

    var tbody = document.createElement("tbody");
    for (var i = 0; i < jumlah; i++) {
        var formKriteria = document.getElementById("formKriteria" + i);
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = formKriteria.inputNamaKriteria.value;
        td1.style.border = "1px solid black";  // Menambahkan border pada data tabel
        var td2 = document.createElement("td");
        td2.innerHTML = formKriteria.inputJenisKriteria.value;
        td2.style.border = "1px solid black";  // Menambahkan border pada data tabel
        var td3 = document.createElement("td");
        td3.innerHTML = formKriteria.inputNilaiKriteria.value;
        td3.style.border = "1px solid black";  // Menambahkan border pada data tabel
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    tabel.appendChild(tbody);

    tabelContainer.appendChild(tabel);

    // Mencegah form submit dikirim
    return false;
}