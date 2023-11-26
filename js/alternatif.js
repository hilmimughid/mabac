import { ambilData } from './helper.js'
import { createData, createOption, createButton, deleteRow } from './helper.js'

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
  const tdAksi = document.createElement('td')
  tdAksi.textContent = 'Aksi'
  tHead.appendChild(tdAksi)

  dataKriteria.forEach((item) => {
    const option = createOption(item)
    select.appendChild(option)
  })

  dataAlternatif.forEach((item) => {
    const option = createOption(item)
    selectNama.appendChild(option)
  })

  let row
  dataMatrix.forEach((item, index1) => {
    row = document.createElement('tr')
    const td = createData(item.nama_alternatif)
    row.appendChild(td)

    dataKriteria.forEach((item, index2) => {
      const td = document.createElement('td')
      const matrixData = dataMatrix[index1]?.data[index2] // Use optional chaining to handle potential undefined
      const tdNilai = matrixData?.nilai // Use optional chaining again

      td.textContent = tdNilai !== undefined ? tdNilai : ''

      row.appendChild(td)
    })
    const deleteButton = createButton('bi-trash3-fill', 'btn-danger', () =>
      deleteRow(item.id_alternatif, 'alternatif'),
    )

    deleteButton.classList.add('mx-2')
    deleteButton.setAttribute('data-target', '#modalHapusSatuAlternatif')
    deleteButton.setAttribute('data-toggle', 'modal')
    deleteButton.setAttribute('type', 'button')

    const tdButton = document.createElement('td')
    tdButton.appendChild(deleteButton)
    row.appendChild(deleteButton)

    tBody.appendChild(row)
  })
})
