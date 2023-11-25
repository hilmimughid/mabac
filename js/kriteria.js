import { ambilData, createButton, createTableCell } from './helper.js'

document.addEventListener('DOMContentLoaded', async function () {
  const kriteria = await ambilData('kriteria')

  const tbody = document.querySelector('#tbodyKriteria')

  function createRow(item) {
    const tr = document.createElement('tr')
    const tipe = item.jenis ? 'benefit' : 'cost'

    tr.appendChild(createTableCell(item.nama))
    tr.appendChild(createTableCell(tipe))
    tr.appendChild(createTableCell(item.bobot))

    const editButton = createButton('bi-pencil-square', 'btn-warning')
    editButton.classList.add('mx-2')

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

  function editRow(id) {
    // Implement the edit functionality here
    console.log('Edit row with ID:', id)
  }

  function deleteRow(id) {
    const rowToDelete = document.getElementById(`row_${id}`)
    if (rowToDelete) {
      rowToDelete.remove()
      hapusKriteria(id)
    }
  }

  kriteria.forEach((item) => {
    const row = createRow(item)
    row.id = `row_${item.id}`
    tbody.appendChild(row)
  })
})
