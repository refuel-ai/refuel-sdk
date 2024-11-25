import { Applications } from "./Applications";
import { DatasetExports } from "./DatasetExports";
import { DatasetItems } from "./DatasetItems";
import { Datasets } from "./Datasets";
import { FinetunedModels } from "./FinetunedModels";
import { Integrations } from "./Integrations";
import { Projects } from "./Projects";
import { RefuelBase } from "./RefuelBase";
import { TaskModels } from "./TaskModels";
import { TaskRuns } from "./TaskRuns";
import { Tasks } from "./Tasks";
import { Taxonomies } from "./Taxonomies";
import { TaxonomyLabels } from "./TaxonomyLabels";
import { Team } from "./Team";
import { TeamModels } from "./TeamModels";
import { Usage } from "./Usage";
import { Users } from "./Users";
interface RefuelOptions {
    baseUrl?: string;
}
export declare class Refuel {
    readonly base: RefuelBase;
    readonly applications: Applications;
    readonly datasetExports: DatasetExports;
    readonly datasetItems: DatasetItems;
    readonly datasets: Datasets;
    readonly finetunedModels: FinetunedModels;
    readonly integrations: Integrations;
    readonly projects: Projects;
    readonly taskModels: TaskModels;
    readonly taskRuns: TaskRuns;
    readonly tasks: Tasks;
    readonly taxonomies: Taxonomies;
    readonly taxonomyLabels: TaxonomyLabels;
    readonly team: Team;
    readonly teamModels: TeamModels;
    readonly usage: Usage;
    readonly users: Users;
    constructor(accessToken: string, options?: RefuelOptions);
}
export * from "./types";
