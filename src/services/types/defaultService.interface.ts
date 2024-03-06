export interface IDefaultService<Payload> {
  create: (data: Payload) => Promise<any>;
  update: (id: number, data: Partial<Payload>) => Promise<any>;
  getAll: () => Promise<any>;
  delete: (id: number) => Promise<any>;
}
