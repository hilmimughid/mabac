export const ambilAlternatif = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/alternatif', {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const hapusAlternatif = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/alternatif/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to delete criteria with ID ${id}`)
    }

    console.log(`Criteria with ID ${id} deleted successfully`)
  } catch (error) {
    console.error('Error deleting criteria:', error)
  }
}
