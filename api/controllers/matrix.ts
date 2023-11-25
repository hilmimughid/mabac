import { ModelAlternatif } from '../models/alternatif'
import { ModelKriteria } from '../models/ktriteria'
import { ModelMatrix } from '../models/matrix'
import { groupByAlternatif } from '../utils/helpers'

export const ControllerMatrix = {
  create: async (req: any, res: any) => {
    try {
      const { id_alternatif, id_kriteria, nilai } = req.body
      const data = {
        id_alternatif,
        id_kriteria,
        nilai: parseInt(nilai),
      }
      const result = await ModelMatrix.create(data)

      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  },

  findAll: async (req: any, res: any) => {
    try {
      const matrix = await ModelMatrix.findAll()
      const kriteria = await ModelKriteria.findAll()
      const alternatif = await ModelAlternatif.findAll()
      const result = groupByAlternatif(matrix, kriteria, alternatif)

      console.log('matrix', matrix)

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
