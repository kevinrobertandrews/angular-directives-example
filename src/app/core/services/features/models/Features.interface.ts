import { UserType } from './FeatureSet.type';

/***
 * Base interface for all features that are flagged in this project.
 */
export interface Features {
  name: UserType;
  /**
   * Can view the clients tab on the provider dashboard page.
   */
  isLoggedIn: boolean;
}
