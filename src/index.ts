import { Applications } from "./Applications";
import { DEFAULT_BASE_URL } from "./consts";
import { Datasets } from "./Datasets";
import { Integrations } from "./Integrations";
import { Projects } from "./Projects";
import { RefuelBase } from "./RefuelBase";
import { Tasks } from "./Tasks";
import { Taxonomies } from "./Taxonomies";
import { TaxonomyLabels } from "./TaxonomyLabels";
import { Team } from "./Team";
import { Usage } from "./Usage";
import { Users } from "./Users";

interface RefuelOptions {
    baseUrl?: string;
}

export class Refuel {
    private base: RefuelBase;

    public applications: Applications;
    public datasets: Datasets;
    public integrations: Integrations;
    public projects: Projects;
    public tasks: Tasks;
    public taxonomies: Taxonomies;
    public taxonomyLabels: TaxonomyLabels;
    public team: Team;
    public usage: Usage;
    public users: Users;

    constructor(accessToken: string, options?: RefuelOptions) {
        const baseUrl = options?.baseUrl || DEFAULT_BASE_URL;
        this.base = new RefuelBase(accessToken, baseUrl);

        this.applications = new Applications(this.base);
        this.datasets = new Datasets(this.base);
        this.integrations = new Integrations(this.base);
        this.projects = new Projects(this.base);
        this.tasks = new Tasks(this.base);
        this.taxonomies = new Taxonomies(this.base);
        this.taxonomyLabels = new TaxonomyLabels(this.base);
        this.team = new Team(this.base);
        this.usage = new Usage(this.base);
        this.users = new Users(this.base);
    }
}

export * from "./types";
