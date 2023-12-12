export function createButton(iconClass, btnClass, onClick) {
  const button = document.createElement('button')
  const icon = document.createElement('i')
  icon.classList.add('bi', iconClass)
  button.classList.add('btn', btnClass)
  button.appendChild(icon)
  button.addEventListener('click', onClick)
  return button
}

export function createTableCell(text) {
  const td = document.createElement('td')
  td.textContent = text
  return td
}

export const createData = (value) => {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

export function createRow(item) {
  const tr = document.createElement('tr')

  const tdActions = document.createElement('td')

  return tr
}

export function editRow(item) {
  const nama = document.querySelector('#namaEdit')
  nama.value = item.nama
  const bobot = document.querySelector('#bobotEdit')
  bobot.value = item.bobot
  const edit = document.querySelector('#idEdit')
  edit.value = item.id
}

export function deleteRow(id, url) {
  const idBUtton = url.charAt(0).toUpperCase() + url.slice(1)
  const yakinButton = document.querySelector(`#buttonHapusSatu${idBUtton}`)

  yakinButton.addEventListener('click', () => {
    hapusData(`https://backend-spk.vercel.app/api/${url}/${id}`)
  })
}

export function editRowAlternatif(item, url) {
  console.log('item', item)
  const inputNamaAlternatif = document.querySelector('#inputEditAlternatif')
  const idAlternatif = document.querySelector('#idAltenatif')
  console.log('idAlternatif', idAlternatif)
  const id = item.id_alternatif ? item.id_alternatif : item.id
  idAlternatif.value = id
  inputNamaAlternatif.value =
    item.nama_alternatif !== undefined ? item.nama_alternatif : item.nama

  const selectNamaAlternatif = document.querySelector('#selectEditAlternatif')
  const childrenSelect = selectNamaAlternatif.children
  const penilaianAlternatif = document.querySelector('#penilaianEditAlternatif')
  penilaianAlternatif.required = true
  penilaianAlternatif.value = 0

  if (childrenSelect.length !== 0) {
    return
  }

  if (item.data === undefined) {
    return
  }

  item.data.forEach((itemData, index) => {
    let option = document.createElement('option')
    option.value = itemData.id_kriteria
    option.text = itemData.nama_kriteria
    selectNamaAlternatif.appendChild(option)
  })
}

export const createOption = (value) => {
  const option = document.createElement('option')
  option.value = value.id
  option.text = value.nama
  return option
}

export function groupByAlternatif(data) {
  const groupedData = []

  data.forEach((item) => {
    const idAlternatif = item.id_alternatif
    const existingGroup = groupedData.find(
      (group) => group.id_alternatif === idAlternatif,
    )

    if (!existingGroup) {
      groupedData.push({
        id_alternatif: idAlternatif,
        data: [
          {
            id_kriteria: item.id_kriteria,
            nilai: item.nilai,
          },
        ],
      })
    } else {
      existingGroup.data.push({
        id_kriteria: item.id_kriteria,
        nilai: item.nilai,
      })
    }
  })

  return groupedData
}

export const ambilData = async (url) => {
  try {
    const response = await fetch(`https://backend-spk.vercel.app/api/${url}`, {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const urutkanTerbesar = (data) => {
  return data.sort((a, b) => b.total_nilai - a.total_nilai)
}

export const hapusData = async (url) => {
  try {
    const reponse = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!reponse.ok) {
      throw new Error(`HTTP !error Status : ${reponse.status}`)
    }

    Swal.fire({
      title: 'Sukses',
      text: 'Data Berhasil Dihapus!',
      icon: 'success',
      timer: 3000, // durasi dalam milidetik
      timerProgressBar: true,
    }).then((result) => {
      // Jika pengguna menekan tombol OK atau timer berakhir
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        location.reload() // me-reload halaman
      }
    })

    const deleted = await reponse.json()
    return deleted
  } catch (error) {
    console.log(error)
  }
}

export const buatPDF = (idTable, pdf) => {
  const source = document.getElementById(idTable)
  const specialElementHandlers = {
    '#bypassme': function (element, renderer) {
      return true
    },
  }
  const margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522,
  }
  pdf.fromHTML(
    source,
    margins.left,
    margins.top,
    {
      width: margins.width,
      elementHandlers: specialElementHandlers,
    },
    function (dispose) {
      pdf.save('Test.pdf')
    },
    margins,
  )
}
