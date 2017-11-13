export enum AndOr {
  And = 1,
  Or,
}

export enum LogicOperation
{
  Equals=1,
  NotEquals,
  IsLessThan,
  IsLessThanOrEqualsTo,
  IsGreaterThan,
  IsGreaterThanOrEqualsTo,
}

export enum CommunicationState
{
  OK = 1,
}

export enum RFUType
{
  Vehicle = 1,
  NR = 2,
}

export enum SAMType
{
  Inactive = 1,
  COMDA = 2,
}

export enum DeviceStatus
{
  Fault = 1,
  OK = 2,
}
export enum ValidationMethod
{
  TDS = 1,
}
export enum IDType
{
  G3 = 1,
  G4 = 2
}

export enum IDHardware
{
  Old = 1,
  Protected = 2,
  Interrogator = 3,
  Interrogator_SVID = 4,
  SVID = 5,
  SVID_Odometer = 6,
  SVID_Canbus = 7,
  G4_Tag = 8,
  G4_Tag_Canbus = 9,
}

export enum DisconnectType
{
  Identification = 1,
  NozzleReader = 2,
}

export enum FaultType
{
  RFU = 1,
  CVS = 2,
  NozzleReader = 3,
  Station = 4,
}
export enum FuelType
{
  Soler = 1,
  Gasoline95 = 2,
  Gasoline98 = 3,
}
