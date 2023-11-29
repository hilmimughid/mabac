import {
  ambilData,
  createData,
  createOption,
  createButton,
  deleteRow,
  editRow,
  editRowAlternatif,
} from './helper.js'

const select = document.querySelector('#formJenisKriteria')
const selectNama = document.querySelector('#formNamaAlternatif')

const tHead = document.querySelector('#matrixNilai')
const tBody = document.querySelector('#matrixNilaiBody')

document.addEventListener('DOMContentLoaded', async function () {
  const dataAlternatif = await ambilData('alternatif')
  const dataKriteria = await await ambilData('kriteria')
  console.log('dataAlternatif', dataAlternatif)
  const dataMatrix = await ambilData('matrix')
  console.log('dataMatrix', dataMatrix)

  const tdKriteria = document.querySelector('#kriteria')
  const colspan = dataKriteria.length + 1
  dataKriteria.forEach((item) => {
    tdKriteria.setAttribute('colspan', colspan)
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
  let dataTabel = dataMatrix.length !== 0 ? dataMatrix : dataAlternatif

  dataTabel.forEach((item, index1) => {
    row = document.createElement('tr')

    let nama = dataMatrix.length !== 0 ? item.nama_alternatif : item.nama

    const td = createData(nama)
    console.log('td', td)
    row.appendChild(td)

    dataKriteria.forEach((item, index2) => {
      const td = document.createElement('td')
      const matrixData = dataMatrix[index1]?.data[index2]
      const tdNilai = matrixData?.nilai

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

    console.log('item', item)
    const editButton = createButton('bi-pencil-square', 'btn-warning', () =>
      editRowAlternatif(item, 'alternatif'),
    )

    editButton.classList.add('mx-2')
    editButton.setAttribute('data-target', '#modalEditAlternatif')
    editButton.setAttribute('data-toggle', 'modal')
    editButton.setAttribute('type', 'button')

    const tdButton = document.createElement('td')
    tdButton.appendChild(editButton)
    tdButton.appendChild(deleteButton)
    row.appendChild(tdButton)

    tBody.appendChild(row)
  })
})
