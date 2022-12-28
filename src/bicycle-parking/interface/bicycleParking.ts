export interface BicycleParkingsRes {
  message: string;
  bicycleParkings: BicycleParking[];
  count: number;
}

export interface BicycleParking {
  description: string;
  latitude: number;
  longitude: number;
  rackType: RackType;
  rackCount: number;
  shelterIndicator: ShelterIndicator;
}

export enum RackType {
  HdbRacks = 'HDB_RACKS',
  YellowBox = 'Yellow Box',
}

export enum ShelterIndicator {
  N = 'N',
  Y = 'Y',
}
