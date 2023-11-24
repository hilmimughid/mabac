import { ambilKriteria } from '../kriteria/kriteria.js'
import { ambilAlternatif, hapusAlternatif } from './alternatif.js'
import { ambilMatrix } from '../matrix/matrix.js'
import {
  createButton,
  createTableCell,
  createData,
  createRow,
  editRow,
  deleteRow,
  createOption,
  groupByAlternatif,
} from '../helper.js'

const select = document.querySelector('#formJenisKriteria')
const selectNama = document.querySelector('#formNamaAlternatif')

const tHead = document.querySelector('#matrixNilai')
const tBody = document.querySelector('#matrixNilaiBody')

document.addEventListener('DOMContentLoaded', async function () {
  const dataAlternatif = await ambilAlternatif()
  const dataKriteria = await ambilKriteria()
  const dataMatrix = await ambilMatrix()

  const data = groupByAlternatif(dataMatrix)

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

  dataAlternatif.forEach((item, index) => {
    const row = document.createElement('tr')
    const id = item.id
    const values = data.find((item) => item.id_alternatif === id)
    console.log('values', values)

    if (values) {
      const td = createData(item.nama)
      row.appendChild(td)
      values.data.forEach((item) => {
        const td = createData(item.nilai)
        td.textContent = item.nilai
        row.appendChild(td)
      })
    }
    tBody.appendChild(row)
  })
})
