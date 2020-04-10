export interface Leave
{
  id:number;
  leavename:string;
  numberOfDays:number
}

export interface ListResolved
{
  leave:Leave;
  error?:any;
}
