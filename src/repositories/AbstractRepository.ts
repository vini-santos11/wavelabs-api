import { Repository } from 'typeorm';
import TEntity from '../models/AbstractModel';

class AbstractRepository extends Repository<TEntity> {
  private async findByDate(date: Date): Promise<TEntity | null> {
    const findEntity = await this.findOne({
      where: { date },
    });
    return findEntity || null;
  }
}

export default AbstractRepository;
