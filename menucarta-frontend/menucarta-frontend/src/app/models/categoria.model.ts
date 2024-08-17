import { Producto } from "./producto.model";

export interface Categoria {
    id:string;
    nombre:string;
    img:string;
    productos: Producto[];
}
