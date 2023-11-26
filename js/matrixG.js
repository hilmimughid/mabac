import { ambilData, createData } from './helper.js'

const tBody = document.querySelector('#matrixNilaiBody')
const tHead = document.querySelector('#matrixNilai')

document.addEventListener('DOMContentLoaded', async function () {
  const dataKriteria = await ambilData('kriteria')
  const batas = await ambilData('result?tipe=batas')
  console.log('batas', batas)

  dataKriteria.forEach((item, index) => {
    const td = document.createElement('td')
    td.textContent = 'K' + index
    tHead.appendChild(td)
  })

  const row = document.createElement('tr')
  batas.forEach((item, index) => {
    const td = createData(item.total_nilai)
    row.appendChild(td)
  })
  tBody.appendChild(row)
})
