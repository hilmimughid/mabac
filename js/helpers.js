const submitKriteria = async () => {
  try {
    const formData = new FormData(document.querySelector('#tambahKriteria'))

    const value = {
      nama: formData.get('nama'),
      bobot: formData.get('bobot'),
      jenis: formData.get('jenis'),
    }
    const reponse = await fetch('http://localhost:8000/api/kriteria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })

    if (!reponse.ok) {
      throw new Error({ message: reponse.statusText })
    }

    const data = await reponse.json()
    return { message: 'post data success', data: data }
  } catch (error) {
    console.log(error)
  }
}

const ambilKriteria = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/kriteria', {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  const data = await ambilKriteria()

  console.log('data', data)

  const tabel = document.querySelector('#tbodyKriteria')

  data.map((item) => {
    const tr = document.createElement('tr')

    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')

    const button1 = document.createElement('button')
    const i1 = document.createElement('i')
    i1.classList.add('bi', 'bi-pencil-square')
    button1.classList.add('btn', 'btn-warning')
    button1.appendChild(i1)

    const button2 = document.createElement('button')
    const i2 = document.createElement('i')
    i2.classList.add('bi', 'bi-trash3-fill')
    button2.classList.add('btn', 'btn-danger')
    button2.appendChild(i2)

    const tipe = item.jenis ? 'benefit' : 'cost'

    td1.textContent = item.nama
    td2.textContent = tipe
    td3.textContent = item.bobot

    td4.appendChild(button1)
    td4.appendChild(button2)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tabel.appendChild(tr)
  })
})

// console.log('tabel', tabel)

// for (var i = 1, row; (row = tabel.rows[i]); i++) {
//   // Mendapatkan nilai dalam setiap sel (td) dalam baris
//   for (var j = 0, col; (col = row.cells[j]); j++) {
//     console.log('col.innerHTML', col.innerHTML) // Menampilkan nilai sel di konsol
//   }
// }

// console.log('tabel', tabel)
