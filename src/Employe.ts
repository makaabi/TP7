
export class Employe
{

  private _matricule: number;
  public get matricule(): number {
    return this._matricule;
  }
  public set matricule(value: number) {
    this._matricule = value;
  }
  private _nom: String;
  public get nom(): String {
    return this._nom;
  }
  public set nom(value: String) {
    this._nom = value;
  }
  private _fonction: String;
  public get fonction(): String {
    return this._fonction;
  }
  public set fonction(value: String) {
    this._fonction = value;
  }
 
  private _expert: boolean;
  public get expert(): boolean {
    return this._expert;
  }
  public set expert(value: boolean) {
    this._expert = value;
  }

constructor(matricule:number ,nom:string,fonction:string,expert:boolean)
{
  this._matricule =matricule;
  this._nom =nom ;
  this._fonction = fonction;
  this._expert = expert;
}


}
