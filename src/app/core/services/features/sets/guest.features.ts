import { Features } from '../models/Features.interface';
import { UserType } from '../models/FeatureSet.type';

export const guest: Features = {
  name: FeatureSet.Guest,
  isLoggedIn: false,
};
