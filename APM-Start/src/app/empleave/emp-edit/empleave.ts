export interface Empleave
{
  id:number;
  leavetype:string;
  fromdt:Date;
  todt:Date;
  noOfDays:number;
  status:string;
}

export interface ListResolved
{
  empleave:Empleave;
  error?:any;
}
