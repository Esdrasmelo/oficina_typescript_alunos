export interface IDefaultRepository<RepositoryReturnType, DataType> {
  getAll: () => Promise<RepositoryReturnType[]>;
  create: (data: DataType) => Promise<RepositoryReturnType>;
  update: (id: number, data: Partial<DataType>) => Promise<RepositoryReturnType>;
  delete: (id: number) => Promise<RepositoryReturnType>;
}
