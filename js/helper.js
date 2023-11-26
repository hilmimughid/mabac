export function createButton(iconClass, btnClass, onClick) {
  const button = document.createElement('button')
  const icon = document.createElement('i')
  icon.classList.add('bi', iconClass)
  button.classList.add('btn', btnClass)
  button.appendChild(icon)
  button.addEventListener('click', onClick)
  return button
}

export function createTableCell(text) {
  const td = document.createElement('td')
  td.textContent = text
  return td
}

export const createData = (value) => {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

export function createRow(item) {
  const tr = document.createElement('tr')

  const tdActions = document.createElement('td')

  //   console.log('tr', tr)
  //   console.log('td', tdActions)
  return tr
}

export function editRow(item) {
  const nama = document.querySelector('#namaEdit')
  nama.value = item.nama
  const bobot = document.querySelector('#bobotEdit')
  bobot.value = item.bobot
  const edit = document.querySelector('#idEdit')
  edit.value = item.id
}

export function deleteRow(id) {
  const yakinButton = document.querySelector('#buttonHapusSatuKriteria')
  yakinButton.addEventListener(
    'click',
    hapusData(`http://localhost:8000/api/kriteria/${id}`),
  )
}

export const createOption = (value) => {
  const option = document.createElement('option')
  option.value = value.id
  option.text = value.nama
  return option
}

export function groupByAlternatif(data) {
  const groupedData = []

  data.forEach((item) => {
    const idAlternatif = item.id_alternatif
    const existingGroup = groupedData.find(
      (group) => group.id_alternatif === idAlternatif,
    )

    if (!existingGroup) {
      groupedData.push({
        id_alternatif: idAlternatif,
        data: [
          {
            id_kriteria: item.id_kriteria,
            nilai: item.nilai,
          },
        ],
      })
    } else {
      existingGroup.data.push({
        id_kriteria: item.id_kriteria,
        nilai: item.nilai,
      })
    }
  })

  return groupedData
}

export const ambilData = async (url) => {
  try {
    const response = await fetch(`http://localhost:8000/api/${url}`, {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const urutkanTerbesar = (data) => {
  return data.sort((a, b) => b.total_nilai - a.total_nilai)
}

export const hapusData = async (url) => {
  try {
    const reponse = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!reponse.ok) {
      throw new Error(`HTTP !error Status : ${reponse.status}`)
    }

    const deleted = await reponse.json()
    return deleted
  } catch (error) {
    console.log(error)
    throw error
  }
}
