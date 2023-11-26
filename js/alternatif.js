import { ambilData } from './helper.js'
import { createData, createOption } from './helper.js'

const select = document.querySelector('#formJenisKriteria')
const selectNama = document.querySelector('#formNamaAlternatif')

const tHead = document.querySelector('#matrixNilai')
const tBody = document.querySelector('#matrixNilaiBody')

document.addEventListener('DOMContentLoaded', async function () {
  const dataAlternatif = await ambilData('alternatif')
  const dataKriteria = await await ambilData('kriteria')
  const dataMatrix = await ambilData('matrix')
  console.log('dataMatrix', dataMatrix)

  dataKriteria.forEach((item) => {
    const td = document.createElement('td')
    td.textContent = item.nama
    tHead.appendChild(td)
  })

  dataKriteria.forEach((item) => {
    const option = createOption(item)
    select.appendChild(option)
  })

  dataAlternatif.forEach((item) => {
    const option = createOption(item)
    selectNama.appendChild(option)
  })

  dataMatrix.forEach((item) => {
    const row = document.createElement('tr')
    const td = createData(item.nama_alternatif)
    row.appendChild(td)
    item.data.forEach((itemTd) => {
      const td = createData(itemTd.nilai)
      row.appendChild(td)
    })
    tBody.appendChild(row)
  })
})
