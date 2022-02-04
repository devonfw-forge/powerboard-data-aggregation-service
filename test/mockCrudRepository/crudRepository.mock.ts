export class MockRepository {
  constructor() { }
  public createQueryBuilder = jest.fn(() => this.queryBuilder);

  public manager = { transaction: (a: () => any) => Promise.resolve(a()) };
  public metadata = { connection: { options: { type: null } }, columns: [], relations: [] };

  public save = jest.fn();
  public delete = jest.fn();
  public update = jest.fn();
  public findOne = jest.fn();
  public findOneOrFail = jest.fn();
  public find = jest.fn();
  public getMany = jest.fn();

  public queryBuilder = {
    offset: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    addFrom: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    innerJoinAndSelect: jest.fn().mockReturnThis(),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    getManyAndCount: jest.fn(),
    getMany: jest.fn(),
    getOne: jest.fn(),
    delete: jest.fn().mockReturnThis(),
    execute: jest.fn().mockReturnThis(),
  };
}
export class SprintRepositoryMock extends MockRepository { }
export class TeamRepositoryMock extends MockRepository { }
export class SprintMetricRepositoryMock extends MockRepository { }
export class SprintSnapshotMetricRepositoryMock extends MockRepository { }
export class SprintWorkUnitRepositoryMock extends MockRepository { }
export class SprintSnapshotRepositoryMock extends MockRepository { }
export class SprintStatusRepositoryMock extends MockRepository { }
export class CodeQualitySnapshotRepositoryMock extends MockRepository { }

