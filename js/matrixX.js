import { ambilData, createData } from './helper.js'

const tBody = document.querySelector('#matrixNilaiBody')
const tHead = document.querySelector('#matrixNilai')

document.addEventListener('DOMContentLoaded', async function () {
  const dataKriteria = await ambilData('kriteria')
  const nomralisasi = await ambilData('result?tipe=normalisasi')
  console.log('nomralisasi', nomralisasi)

  dataKriteria.forEach((item, index) => {
    const td = document.createElement('td')
    td.textContent = 'K' + index
    tHead.appendChild(td)
  })

  nomralisasi.forEach((item, index) => {
    const row = document.createElement('tr')
    const td = createData('A' + index)
    row.appendChild(td)
    item.data.forEach((itemTd) => {
      const td = createData(itemTd.nilai)
      row.appendChild(td)
    })
    tBody.appendChild(row)
  })
})
