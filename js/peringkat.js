import { ambilData, createData, urutkanTerbesar } from './helper.js'

const tBody = document.querySelector('#matrixNilaiBody')

document.addEventListener('DOMContentLoaded', async function () {
  const hasil = await ambilData('result?tipe=hasil')
  console.log('hasil', hasil)
  const hasilUrut = urutkanTerbesar(hasil)

  hasilUrut.forEach((item, index) => {
    const row = document.createElement('tr')
    const td0 = createData(index + 1)
    const td1 = createData(item.nama)
    const td2 = createData(item.total_nilai)

    row.appendChild(td0)
    row.appendChild(td1)
    row.appendChild(td2)

    tBody.appendChild(row)
  })
})
