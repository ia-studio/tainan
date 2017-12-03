/**
 * Created by mattyyzac on 2016/10/14.
 */

// 縣市定義
export interface County {
  CountyCode: string;
  CountyName: string;
}

// 行政區定義
export interface District {
  DistrictCode: string;
  DistrictName: string;
}

// 里定義
export interface Region {
  RegionCode: string;
  RegionName: string;
}


//全台縣市
export let CountyCodes = () => {
  return [
    {"CountyCode":"6400000000","CountyName":"台南市"},{"CountyCode":"6500000000","CountyName":"新北市"},
    {"CountyCode":"6600000000","CountyName":"台中市"},{"CountyCode":"6700000000","CountyName":"台南市"},
    {"CountyCode":"6300000000","CountyName":"台北市"},{"CountyCode":"1001700000","CountyName":"基隆市"},
    {"CountyCode":"1000200000","CountyName":"宜蘭縣"},{"CountyCode":"1001800000","CountyName":"新竹市"},
    {"CountyCode":"1000400000","CountyName":"新竹縣"},{"CountyCode":"1000300000","CountyName":"桃園縣"},
    {"CountyCode":"1000500000","CountyName":"苗栗縣"},{"CountyCode":"1000700000","CountyName":"彰化縣"},
    {"CountyCode":"1000800000","CountyName":"南投縣"},{"CountyCode":"1002000000","CountyName":"嘉義市"},
    {"CountyCode":"1001000000","CountyName":"嘉義縣"},{"CountyCode":"1000900000","CountyName":"雲林縣"},
    {"CountyCode":"1001600000","CountyName":"澎湖縣"},{"CountyCode":"1001300000","CountyName":"屏東縣"},
    {"CountyCode":"1001400000","CountyName":"台東縣"},{"CountyCode":"1001500000","CountyName":"花蓮縣"},
    {"CountyCode":"0902000000","CountyName":"金門縣"},{"CountyCode":"0900700000","CountyName":"連江縣"}
  ];
}

// 台南市行政區
export let DistrictCodes = (isIncludeNoArea?: boolean) => {
  const wholeDistrict: any[] = [{"DistrictCode":"6700100000","DistrictName":"新營區"},{"DistrictCode":"6700200000","DistrictName":"鹽水區"},{"DistrictCode":"6700300000","DistrictName":"白河區"},{"DistrictCode":"6700400000","DistrictName":"柳營區"},{"DistrictCode":"6700500000","DistrictName":"後壁區"},{"DistrictCode":"6700600000","DistrictName":"東山區"},{"DistrictCode":"6700700000","DistrictName":"麻豆區"},{"DistrictCode":"6700800000","DistrictName":"下營區"},{"DistrictCode":"6700900000","DistrictName":"六甲區"},{"DistrictCode":"6701000000","DistrictName":"官田區"},{"DistrictCode":"6701100000","DistrictName":"大內區"},{"DistrictCode":"6701200000","DistrictName":"佳里區"},{"DistrictCode":"6701300000","DistrictName":"學甲區"},{"DistrictCode":"6701400000","DistrictName":"西港區"},{"DistrictCode":"6701500000","DistrictName":"七股區"},{"DistrictCode":"6701600000","DistrictName":"將軍區"},{"DistrictCode":"6701700000","DistrictName":"北門區"},{"DistrictCode":"6701800000","DistrictName":"新化區"},{"DistrictCode":"6701900000","DistrictName":"善化區"},{"DistrictCode":"6702000000","DistrictName":"新市區"},{"DistrictCode":"6702100000","DistrictName":"安定區"},{"DistrictCode":"6702200000","DistrictName":"山上區"},{"DistrictCode":"6702300000","DistrictName":"玉井區"},{"DistrictCode":"6702400000","DistrictName":"楠西區"},{"DistrictCode":"6702500000","DistrictName":"南化區"},{"DistrictCode":"6702600000","DistrictName":"左鎮區"},{"DistrictCode":"6702700000","DistrictName":"仁德區"},{"DistrictCode":"6702800000","DistrictName":"歸仁區"},{"DistrictCode":"6702900000","DistrictName":"關廟區"},{"DistrictCode":"6703000000","DistrictName":"龍崎區"},{"DistrictCode":"6703100000","DistrictName":"永康區"},{"DistrictCode":"6703200000","DistrictName":"東區"},{"DistrictCode":"6703300000","DistrictName":"南區"},{"DistrictCode":"6703400000","DistrictName":"北區"},{"DistrictCode":"6703500000","DistrictName":"安南區"},{"DistrictCode":"6703600000","DistrictName":"安平區"},{"DistrictCode":"6703700000","DistrictName":"中西區"},{"DistrictCode":"6411100000","DistrictName":"無法分區"}];

  if (isIncludeNoArea){
    return wholeDistrict;
  }
  else{
    wholeDistrict.splice(38, 1);
    return wholeDistrict;
  }
}

