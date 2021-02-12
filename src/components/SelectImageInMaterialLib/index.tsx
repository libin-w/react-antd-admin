/*
 * @Author: WangLibin
 * @Date: 2021-02-04 20:33:56
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-05 14:02:48
 * @Description: SelectImageInMaterialLib
 */
import { FC, useState } from 'react';
import UploadImage, { UploadImageType } from './UploadImage';
export interface SelectImageInMaterialLibInterface extends FC<{}> {
  UploadImage: UploadImageType;
}
const SelectImageInMaterialLib: SelectImageInMaterialLibInterface = () => {
  return null;
};
SelectImageInMaterialLib.UploadImage = UploadImage;
export default SelectImageInMaterialLib;
