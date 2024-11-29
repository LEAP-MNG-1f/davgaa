export type GroupFoodType={
    _id:string,
    items:Food[]
}
export type Food={
    _id:string,
    price:number,
    name:string,
    ingredient:string,
    image:string,
    category:Category
}
export type Category={
    name:string,
    _id:string
}