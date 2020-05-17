import request from '@/utils/request';
import { MoreListParams } from './data.d'

export async function getChannelData (params?:MoreListParams){
    return request(`api/getChannelData`,{
        method:'GET',
        data:{...params}
    })
}