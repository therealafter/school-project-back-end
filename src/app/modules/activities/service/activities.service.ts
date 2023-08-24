import { Activity } from "../../../shared/infra/database/entities/activity.entity";

export class ActivitiesService {
  public async showAll(): Promise<typeof Activity[]> {
    const activities = await Activity.findAll() as [];
    return activities;
  }
}