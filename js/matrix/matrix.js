export const ambilMatrix = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/matrix', {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
