
export interface Item_data { 
  _id ?: string ,
  no: string, 
  price:any, 
  percent: any,
  title:string,
  count: any,
  avatar: string;
}

export interface Avatar{ _id: string;  path:string}
export interface Card1_data { 
  _id?:string,
  background: string,
  like: any,
  time: string,
  title: string,
  avatar: Avatar[],
  name:string,
  value: any
  //link
}

export interface Card2_data { 
  _id?:string,
  background: string,
  avatar: string,
  name:string,
  by:string, 
  content:string 
}
export interface Card3_data { 
  _id?:string,
  url:string, 
  title:string, 
  content: string,
  link:string
}
export interface Card4_data { 
  _id?:string,
  left_img:string, 
  center_img:string, 
  right_img:string, 
  title: string 
  color: string;
}


