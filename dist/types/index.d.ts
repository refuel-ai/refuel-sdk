import { Applications } from "./Applications";
import { Datasets } from "./Datasets";
import { Projects } from "./Projects";
import { Tasks } from "./Tasks";
import { Team } from "./Team";
import { Usage } from "./Usage";
import { Users } from "./Users";
interface RefuelOptions {
    baseUrl?: string;
}
export declare class Refuel {
    private base;
    applications: Applications;
    datasets: Datasets;
    projects: Projects;
    tasks: Tasks;
    team: Team;
    usage: Usage;
    users: Users;
    constructor(accessToken: string, options?: RefuelOptions);
}
export * from "./types";
