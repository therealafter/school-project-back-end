import { Router } from "express";
import { ActivityController } from "../../../../modules/activities/controller/activities.controller";

const routes = Router();

// Show All Activities
routes.get("/activities", new ActivityController().showAllActivities);

export { routes }