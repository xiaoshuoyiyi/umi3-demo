/**
 * 更多页面列表项参数
 */
export interface MoreListItem{
    id:number | string;
    name:string;
    age:number | string;
    city:string
}
/**
 * 更多页面列表筛选参数
 */
export interface MoreListParams{
    id?:number | string;
    name?:string;
    age?:number | string;
    city?:string
}