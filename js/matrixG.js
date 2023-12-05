import { ambilData, createData } from './helper.js'

const tBody = document.querySelector('#matrixNilaiBody')
const tHead = document.querySelector('#matrixNilai')

document.addEventListener('DOMContentLoaded', async function () {
  const dataKriteria = await ambilData('kriteria')
  const batas = await ambilData('result?tipe=batas')
  console.log('batas', batas)

  const tdKriteria = document.querySelector('#kriteria')
  const colspan = dataKriteria.length + 1
  dataKriteria.forEach((item, index) => {
    tdKriteria.setAttribute('colspan', colspan)
    const td = document.createElement('td')
    td.textContent = 'K' + (index + 1)
    tHead.appendChild(td)
  })

  const row = document.createElement('tr')
  batas.forEach((item, index) => {
    const td = createData(item.total_penjumlahan)
    row.appendChild(td)
  })
  tBody.appendChild(row)
})
