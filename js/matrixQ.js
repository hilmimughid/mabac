import { ambilData, createData } from './helper.js'

const tBody = document.querySelector('#matrixNilaiBody')
const tHead = document.querySelector('#matrixNilai')

document.addEventListener('DOMContentLoaded', async function () {
  const dataKriteria = await ambilData('kriteria')
  const alternatif = await ambilData('result?tipe=alternatif')
  console.log('alternatif', alternatif)

  const tdKriteria = document.querySelector('#kriteria')
  const colspan = dataKriteria.length + 1
  dataKriteria.forEach((item, index) => {
    tdKriteria.setAttribute('colspan', colspan);
    const td = document.createElement('td')
    td.textContent = 'K' + (index+1)
    tHead.appendChild(td)
  })

  alternatif.forEach((item, index) => {
    const row = document.createElement('tr')
    const td = createData('A' + (index+1))
    row.appendChild(td)
    item.data.forEach((itemTd) => {
      const td = createData(itemTd.nilai)
      row.appendChild(td)
    })
    tBody.appendChild(row)
  })
})
