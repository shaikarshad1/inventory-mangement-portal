export class Order {
    orderId!:number;
    orderDateTime!:string;
    locationNumber!:number;
    materialName!:string;
    orderQty!:number;
    orderStatus!:string;
    userid:string | null=localStorage.getItem('userName');

    constructor(){}
}

