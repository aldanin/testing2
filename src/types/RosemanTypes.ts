import NozzleReader from './NozzleReader'
import CVS from './CVS'
import RFU from './RFU'

export type RosemanID = number;
export type Date = string;
export type ClientGuid = string;
export type StationaryDevice = NozzleReader | CVS | RFU;

export enum DeviceTypes {
  'NozzleReader' = 'NozzleReader',
  'RFU' = 'RFU',
  'CVS' = 'CVS'
}

export const PRODUCT_TYPES = {
  INVENTORY: 'Inventory',
}
