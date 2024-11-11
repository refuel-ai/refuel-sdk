import { Applications } from "./Applications";
import { DEFAULT_BASE_URL } from "./consts";
import { Datasets } from "./Datasets";
import { Projects } from "./Projects";
import { RefuelBase } from "./RefuelBase";
import { Tasks } from "./Tasks";
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
    public projects: Projects;
    public tasks: Tasks;
    public team: Team;
    public usage: Usage;
    public users: Users;

    constructor(accessToken: string, options?: RefuelOptions) {
        const baseUrl = options?.baseUrl || DEFAULT_BASE_URL;
        this.base = new RefuelBase(accessToken, baseUrl);

        this.applications = new Applications(this.base);
        this.datasets = new Datasets(this.base);
        this.projects = new Projects(this.base);
        this.tasks = new Tasks(this.base);
        this.team = new Team(this.base);
        this.usage = new Usage(this.base);
        this.users = new Users(this.base);
    }
}

export * from "./types";
