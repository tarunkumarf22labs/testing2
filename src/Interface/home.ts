import { villaInterface } from '.';

export interface IVillas {
  data: {
    data: villaInterface[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
}
