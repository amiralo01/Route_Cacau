import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
} from '@loopback/core';
import { repository } from '@loopback/repository';
import { CacauRepository, FornecedorRepository, LocalidadeIntermediariaRepository, LocalidadeRepository, RotaRepository, TipoCacauRepository } from '../repositories';
import { Fornecedor, TipoCacau } from '../models';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class SeederObserver implements LifeCycleObserver {
  
  constructor(
   @repository(CacauRepository) private cacauRepository: CacauRepository,
   @repository(TipoCacauRepository) private tipoCacauRepository : TipoCacauRepository,
   @repository(RotaRepository) private rotaRepository: RotaRepository,
   @repository(FornecedorRepository) private fornecedorRepository: FornecedorRepository,
  
   @repository(LocalidadeRepository) private localidadeRepository : LocalidadeRepository,
   @repository(LocalidadeIntermediariaRepository) private localidadesIntermetiariasRepository : LocalidadeIntermediariaRepository,
  ) {}
  

  /**
   * This method will be invoked when the application initializes. It will be
   * called at most once for a given application instance.
   */
  async init(): Promise<void> {
    // Add your logic for init
  }

  /**
   * This method will be invoked when the application starts.
   */
  async start(): Promise<void> {
    if(!process.env.ENV) return;
    if(process.env.ENV.toLocaleLowerCase() !== 'test') return;

    if((await this.rotaRepository.count()).count > 0 ) return;

    const forncecedor = await this.fornecedorRepository.create({
      email: 'cacau@gmail.com',
      nome: 'cacau show',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQQCAwX/xAAuEAABBAAEBAQFBQAAAAAAAAABAAIDEQQSITEFE2GRFFFxsSIyQoGhM0FSU4L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBv/EACYRAQEAAgECBQQDAAAAAAAAAAABAhEDEjETISJB8IGRwdFRYXH/2gAMAwEAAhEDEQA/AJ15l640AgKQCAQJA0DQA1NDdB38HPzBGWtEh+hz2h3Ym1uqjxMdb9nGSN8T3RyMcx7TRa4UQi5ZZuMrAIGgEHpcJHKwnEMa39WCNrYj/Fz3Vm9QL7q8fKWuHN55Y4e1/DuzC4LiGFw7GY1mExLI8rop2kMe6/mDuq3UyndFz5OPK247n9fpHxiTGSY944jXiIwGOoAaDbbf1U5b35uvBMJhPD7IlLqEAgEFWAxYwzpWSNL4JmcuVoNEj9iOoOqqXTnyYdWrO8dcbN4wQCSeJ3JjETZDbSWDaxW/p+Vtu04Y9G9TunxsrZsQXskdIMoGYithWg8qAWW7q+OXHHVjgpWEAgsgmiEMLC8x5ZHGWhq9poe17+aqVyyxu7fs7OPC6Zlq6dnsP3+munn0W+lM8X5r6m6Th0bxJh9HANID2uIuzYP2I7FPT7Mk5bNZNTT8OmabBEjYwGF1n4rdYNbjUa7pvGmOPLj8/wAS4x2CMY8I1wcTqHXoKv3JH2WXXs6YTk36kil0JA0G+a/LlzaZctdLuu63bOmNeKn/ALD8/M/15pus6Mf4Z5r8uXN8OXLXS7rum29M7sLGhBm0DQCAQNAIEg//2Q=='
    })
    const localidade = await this.localidadeRepository.create({
      avenida: 'Av 3',
      bairro: 'Bairro 1',
      cidade: 'Santarém',
    })
    const localidade2 = await this.localidadeRepository.create({
      avenida: 'Av 2',
      bairro: 'Bairro 2',
      cidade: 'Santarém',
    })
    const localidade3 = await this.localidadeRepository.create({
      avenida: 'Av 1',
      bairro: 'Bairro 3',
      cidade: 'Santarém',
    })
    const localidade4 = await this.localidadeRepository.create({
      avenida: 'Av 4',
      bairro: 'Bairro 2',
      cidade: 'Monte alegre',
    })

    const rota = await this.rotaRepository.create({
      fornecedorId: forncecedor.idFornecedor,
      localidadeFinal: localidade4.idLocalidade,
      localidadeOrigem: localidade.idLocalidade
    })
    await this.rotaRepository.rotas_locInter(rota.idRota).create({ localidadeInter: localidade2.idLocalidade })
    await this.rotaRepository.rotas_locInter(rota.idRota).create({ localidadeInter: localidade3.idLocalidade })
    const tipo = await this.tipoCacauRepository.create({ nome: '50% cacau' })
    await this.cacauRepository.create({ dataFab: new Date(), rotaId: rota.idRota, tipoCacauId: tipo.idTipo })
  }

  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
