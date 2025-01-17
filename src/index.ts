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
import { Usage } from "./Usage";
import { Users } from "./Users";

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
export class Refuel {
    public readonly base: RefuelBase;

    public readonly applications: Applications;
    public readonly calibrations: Calibrations;
    public readonly datasetExports: DatasetExports;
    public readonly datasetItems: DatasetItems;
    public readonly datasets: Datasets;
    public readonly finetunedModels: FinetunedModels;
    public readonly integrations: Integrations;
    public readonly labels: Labels;
    public readonly projects: Projects;
    public readonly taskModels: TaskModels;
    public readonly taskRuns: TaskRuns;
    public readonly tasks: Tasks;
    public readonly taxonomies: Taxonomies;
    public readonly taxonomyLabels: TaxonomyLabels;
    public readonly team: Team;
    public readonly teamModels: TeamModels;
    public readonly usage: Usage;
    public readonly users: Users;

    constructor(options?: RefuelOptions | string) {
        let apiKey = typeof options === "string" ? options : options?.apiKey;

        if (!apiKey && typeof process !== "undefined") {
            apiKey = process.env.REFUEL_API_KEY;
        }

        if (!apiKey) {
            throw new Error("Refuel API key is required");
        }

        this.base = new RefuelBase(
            apiKey,
            typeof options === "string" ? undefined : options
        );

        this.applications = new Applications(this.base);
        this.calibrations = new Calibrations(this.base);
        this.datasets = new Datasets(this.base);
        this.datasetItems = new DatasetItems(this.base);
        this.datasetExports = new DatasetExports(this.base);
        this.finetunedModels = new FinetunedModels(this.base);
        this.integrations = new Integrations(this.base);
        this.labels = new Labels(this.base);
        this.projects = new Projects(this.base);
        this.taskModels = new TaskModels(this.base);
        this.taskRuns = new TaskRuns(this.base);
        this.tasks = new Tasks(this.base);
        this.taxonomies = new Taxonomies(this.base);
        this.taxonomyLabels = new TaxonomyLabels(this.base);
        this.team = new Team(this.base);
        this.teamModels = new TeamModels(this.base);
        this.usage = new Usage(this.base);
        this.users = new Users(this.base);
    }
}

export * from "./types";
export * from "./utils";
