import { Request, Response } from "express"
import { container } from "tsyringe";
import { ActivitiesService } from "../service/activities.service";

export class ActivityController {
  async showAllActivities(request: Request, response: Response): Promise<Response> {
    const showAllActivitiesUseCase = container.resolve(ActivitiesService);
    const all = await showAllActivitiesUseCase.showAll();

    return response.status(200).send(all);
  }
}