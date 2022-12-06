import { Job } from "@/api/types";
import { Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedDegrees: string[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  degrees: Degree[];
}
