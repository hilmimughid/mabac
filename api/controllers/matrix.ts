import { ModelMatrix } from '../models/matrix'

export const ControllerMatrix = {
  create: async (req: any, res: any) => {
    try {
      const { id_alternatif, id_kriteria, nilai } = req.body
      const data = {
        id_alternatif,
        id_kriteria,
        nilai: parseInt(nilai),
      }
      console.log('data matrix', data)
      const result = await ModelMatrix.create(data)
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },

  findAll: async (req: any, res: any) => {
    try {
      const result = await ModelMatrix.findAll()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },

  findById: async (req: any, res: any) => {
    try {
      const result = await ModelMatrix.findById(req.params.id)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },

  update: async (req: any, res: any) => {
    try {
      const result = await ModelMatrix.update(req.params.id, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },

  delete: async (req: any, res: any) => {
    try {
      await ModelMatrix.delete(req.params.id)
      res.status(200).json({ message: 'Data Deleted' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },
}
