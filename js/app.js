import { ambilKriteria, hapusKriteria } from './kriteria/kriteria.js'
import { ambilAlternatif, hapusAlternatif } from './alternatif/alternatif.js'

document.addEventListener('DOMContentLoaded', async function () {
  const data = await ambilKriteria()
  const dataAlternatif = await ambilAlternatif()
  console.log('dataAlternatif', dataAlternatif)

  const tbody = document.querySelector('#tbodyKriteria')

  function createButton(iconClass, btnClass, onClick) {
    const button = document.createElement('button')
    const icon = document.createElement('i')
    icon.classList.add('bi', iconClass)
    button.classList.add('btn', btnClass)
    button.appendChild(icon)
    button.addEventListener('click', onClick)
    return button
  }

  function createTableCell(text) {
    const td = document.createElement('td')
    td.textContent = text
    return td
  }

  function createRow(item) {
    const tr = document.createElement('tr')
    const tipe = item.jenis ? 'benefit' : 'cost'

    tr.appendChild(createTableCell(item.nama))
    tr.appendChild(createTableCell(tipe))
    tr.appendChild(createTableCell(item.bobot))

    const editButton = createButton('bi-pencil-square', 'btn-warning')
    const deleteButton = createButton('bi-trash3-fill', 'btn-danger', () =>
      deleteRow(item.id),
    )

    const tdActions = document.createElement('td')
    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    tr.appendChild(tdActions)

    return tr
  }

  function editRow(id) {
    // Implement the edit functionality here
    console.log('Edit row with ID:', id)
  }

  function deleteRow(id) {
    // Implement the delete functionality here
    console.log('Delete row with ID:', id)
    const rowToDelete = document.getElementById(`row_${id}`)
    if (rowToDelete) {
      rowToDelete.remove()
      hapusKriteria(id)
    }
  }

  data.forEach((item) => {
    const row = createRow(item)
    row.id = `row_${item.id}`
    tbody.appendChild(row)
  })
})
