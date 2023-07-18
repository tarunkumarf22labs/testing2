import { ISearchInterface, IVillaResultInterface } from 'src/Interface/Search';

export interface IMobileMap {
  location;
  data: ISearchInterface;
  villasResult: IVillaResultInterface;
  handleClick: (id: number) => void;
  cardTopPosition: number;
  location: string;
}
