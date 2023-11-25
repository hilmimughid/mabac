import {
  ambilData,
  createButton,
  createTableCell,
  deleteRow,
  editRow,
} from './helper.js'

document.addEventListener('DOMContentLoaded', async function () {
  const kriteria = await ambilData('kriteria')

  const tbody = document.querySelector('#tbodyKriteria')

  function createRow(item) {
    const tr = document.createElement('tr')
    const tipe = item.jenis ? 'benefit' : 'cost'

    tr.appendChild(createTableCell(item.nama))
    tr.appendChild(createTableCell(tipe))
    tr.appendChild(createTableCell(item.bobot))

    const editButton = createButton('bi-pencil-square', 'btn-warning', () => {
      editRow(item)
    })
    editButton.classList.add('mx-2')
    editButton.setAttribute('data-target', '#modalEditKriteria')
    editButton.setAttribute('data-toggle', 'modal')
    editButton.setAttribute('type', 'button')
    editButton.id = item.id

    const deleteButton = createButton('bi-trash3-fill', 'btn-danger', () =>
      deleteRow(item.id),
    )
    deleteButton.classList.add('mx-2')

    const tdActions = document.createElement('td')
    tdActions.classList.add('d-flex')
    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    tr.appendChild(tdActions)
    return tr
  }

  kriteria.forEach((item) => {
    const row = createRow(item)
    row.id = `row_${item.id}`
    tbody.appendChild(row)
  })
})
