import { Features } from '../models/Features.interface';
import { UserType } from '../models/FeatureSet.type';

export const user: Features = {
  name: FeatureSet.User,
  isLoggedIn: false,
};
