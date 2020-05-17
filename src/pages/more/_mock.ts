import { Request, Response } from 'express';

import { MoreListItem } from './data.d'
const channelTaleData:MoreListItem[] = [];

for(let i = 0; i < 20 ; i++){
    channelTaleData.push({
        id:i,
        name:`名字${i}`,
        age:i,
        city:`城市${i}`
    })
}

const searchChannelData = (name?:string) => {
    let result:MoreListItem[]
    if(name){
        result = channelTaleData.filter(item => {
            return item.name.indexOf(name) > -1;
        })
    }else{
        result = channelTaleData;
    }
    return result;
}

export default{
    'GET /api/getChannelData':{
        data:[...channelTaleData]
    },
    'POST /api/searchChannelData':(req: Request, res: Response) => {
        res.send({
            status:'ok',
            data:searchChannelData(req.body.name),
        })
    }
}