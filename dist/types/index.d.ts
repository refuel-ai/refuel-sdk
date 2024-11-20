import { Applications } from "./Applications";
import { Datasets } from "./Datasets";
import { Integrations } from "./Integrations";
import { Projects } from "./Projects";
import { Tasks } from "./Tasks";
import { Taxonomies } from "./Taxonomies";
import { TaxonomyLabels } from "./TaxonomyLabels";
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
    integrations: Integrations;
    projects: Projects;
    tasks: Tasks;
    taxonomies: Taxonomies;
    taxonomyLabels: TaxonomyLabels;
    team: Team;
    usage: Usage;
    users: Users;
    constructor(accessToken: string, options?: RefuelOptions);
}
export * from "./types";
