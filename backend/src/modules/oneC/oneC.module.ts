import { FastifyInstance } from 'fastify'

export default class OneCModule {
  constructor(server: FastifyInstance) {
    this.getRoutes(server)
  }

  private getRoutes(server: FastifyInstance) {
    server.get('/api/', {
      handler: () => {}
    })
  }
}