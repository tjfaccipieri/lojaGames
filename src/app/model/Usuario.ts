import { Produto } from './Produto';
export class Usuario {
  public dataNascimento: Date;
  public id: number;
  public nome: string;
  public senha: string;
  public tipo: string;
  public usuario: string;
  public  produto: Produto[]
}