/* una interfaz es como un molde de un tipo de dato */
export interface Person {
  firstname: string;
  lastname: string;
  age: number;
  /* con el ? declaramos que el dato es opcional */
  nickname?: string;
}
