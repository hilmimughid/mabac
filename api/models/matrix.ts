import { prisma } from '../utils/db'

export const ModelMatrix = {
  create: async (data: any) => {
    return await prisma.matrix.create({ data })
  },
  findAll: async () => {
    return await prisma.matrix.findMany()
  },
  findById: async (id: string) => {
    return await prisma.matrix.findUnique({ where: { id } })
  },
  update: async (id: string, data: any) => {
    return await prisma.matrix.update({ where: { id }, data })
  },
  delete: async (id: string) => {
    return await prisma.matrix.delete({ where: { id } })
  },
}
