import { Applications } from "./Applications";
import { Calibrations } from "./Calibrations";
import { DatasetExports } from "./DatasetExports";
import { DatasetItems } from "./DatasetItems";
import { Datasets } from "./Datasets";
import { FinetunedModels } from "./FinetunedModels";
import { Integrations } from "./Integrations";
import { Labels } from "./Labels";
import { Projects } from "./Projects";
import { RefuelBase } from "./RefuelBase";
import { TaskModels } from "./TaskModels";
import { TaskRuns } from "./TaskRuns";
import { Tasks } from "./Tasks";
import { Taxonomies } from "./Taxonomies";
import { TaxonomyLabels } from "./TaxonomyLabels";
import { Team } from "./Team";
import { TeamModels } from "./TeamModels";
import { RefuelOptions } from "./types";
import { TeamUsage } from "./TeamUsage";
import { Users } from "./Users";
import { ApplicationUsage } from "./ApplicationUsage";
import { TaskRunMetrics } from "./TaskRunMetrics";
/**
 * Main class for interacting with the Refuel API.
 *
 * @example
 * ```ts
 * // Initialize the Refuel class with your access token
 * const refuel = new Refuel(accessToken);
 *
 * // List all projects
 * const projects = await refuel.projects.list();
 * console.log(projects);
 * ```
 */
export declare class Refuel {
    readonly base: RefuelBase;
    readonly applications: Applications;
    readonly applicationUsage: ApplicationUsage;
    readonly calibrations: Calibrations;
    readonly datasetExports: DatasetExports;
    readonly datasetItems: DatasetItems;
    readonly datasets: Datasets;
    readonly finetunedModels: FinetunedModels;
    readonly integrations: Integrations;
    readonly labels: Labels;
    readonly projects: Projects;
    readonly taskModels: TaskModels;
    readonly taskRunMetrics: TaskRunMetrics;
    readonly taskRuns: TaskRuns;
    readonly tasks: Tasks;
    readonly taxonomies: Taxonomies;
    readonly taxonomyLabels: TaxonomyLabels;
    readonly team: Team;
    readonly teamModels: TeamModels;
    readonly teamUsage: TeamUsage;
    readonly users: Users;
    constructor(options?: RefuelOptions | string);
}
export * from "./types";
export * from "./utils";
