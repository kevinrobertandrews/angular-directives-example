import { Features } from '../models/Features.interface';
import { UserType } from '../models/FeatureSet.type';

export const admin: Features = {
  name: FeatureSet.Admin,
  isLoggedIn: true,
};
