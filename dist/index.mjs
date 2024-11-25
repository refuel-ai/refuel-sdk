class Applications {
    constructor(base) {
        this.base = base;
    }
    async create(options) {
        const params = new URLSearchParams();
        params.append("task_id", options.taskId);
        if (options.name) {
            params.append("name", options.name);
        }
        return this.base.request({
            method: "POST",
            endpoint: `/projects/${options.projectId}/applications?${params.toString()}`,
        });
    }
    async get(applicationId) {
        return this.base.request({
            method: "GET",
            endpoint: `/applications/${applicationId}`,
        });
    }
    async list(projectId) {
        const endpoint = projectId
            ? `/projects/${projectId}/applications`
            : "/applications";
        return this.base.request({
            method: "GET",
            endpoint,
        });
    }
    async delete(applicationId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/applications/${applicationId}`,
        });
    }
    async label(applicationId, data, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model_id", options.modelId);
        }
        if ((options === null || options === void 0 ? void 0 : options.telemetry) !== undefined) {
            params.append("telemetry", options.telemetry.toString());
        }
        if ((options === null || options === void 0 ? void 0 : options.explain) !== undefined) {
            params.append("explain", options.explain.toString());
        }
        if ((options === null || options === void 0 ? void 0 : options.redactPII) !== undefined) {
            params.append("redact_pii", options.redactPII.toString());
        }
        if ((options === null || options === void 0 ? void 0 : options.async) !== undefined) {
            params.append("is_async", options.async.toString());
        }
        return this.base.request({
            method: "POST",
            endpoint: `/applications/${applicationId}/label?${params.toString()}`,
            data,
        });
    }
    async getLabeledItem(applicationId, itemId) {
        return this.base.request({
            method: "GET",
            endpoint: `/applications/${applicationId}/items/${itemId}`,
        });
    }
    async feedback(applicationId, itemId, correctLabelData) {
        var _a, _b;
        const application = await this.get(applicationId);
        const subtaskMap = Object.fromEntries((_b = (_a = application.subtasks) === null || _a === void 0 ? void 0 : _a.map((subtask) => [
            subtask.name,
            subtask.id,
        ])) !== null && _b !== void 0 ? _b : []);
        const feedbackData = {};
        for (const [subtaskName, subtaskLabel] of Object.entries(correctLabelData)) {
            const subtaskId = subtaskMap[subtaskName];
            if (!subtaskId) {
                throw new Error(`Invalid field: ${subtaskName}`);
            }
            feedbackData[subtaskId] = { label: subtaskLabel };
        }
        return this.base.request({
            method: "POST",
            endpoint: `/applications/${applicationId}/items/${itemId}/label`,
            data: feedbackData,
        });
    }
}

const DEFAULT_BASE_URL = "https://cloud-api.refuel.ai";

class DatasetExports {
    constructor(base) {
        this.base = base;
    }
    async get(exportId, datasetId) {
        return this.base.request({
            method: "GET",
            endpoint: `/datasets/${datasetId}/exports/${exportId}`,
        });
    }
    async create(datasetId, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.email) {
            params.append("email", options.email);
        }
        if (options === null || options === void 0 ? void 0 : options.taskId) {
            params.append("task_id", options.taskId);
        }
        if ((options === null || options === void 0 ? void 0 : options.includeUUID) !== undefined) {
            params.append("include_uuid", options.includeUUID.toString());
        }
        if ((options === null || options === void 0 ? void 0 : options.includeLabels) !== undefined) {
            params.append("include_labels", options.includeLabels.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.taskRunId) {
            params.append("task_run_id", options.taskRunId);
        }
        if (Array.isArray(options === null || options === void 0 ? void 0 : options.filters)) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }
        return this.base.request({
            method: "POST",
            endpoint: `/datasets/${datasetId}/exports?${params.toString()}`,
        });
    }
}

class DatasetItems {
    constructor(base) {
        this.base = base;
    }
    async create(datasetId, data) {
        return this.base.request({
            method: "POST",
            endpoint: `/datasets/${datasetId}/items`,
            data,
        });
    }
    async get(datasetId, itemId) {
        return (await this.base.request({
            method: "GET",
            endpoint: `/datasets/${datasetId}/items/${itemId}`,
        }))[0];
    }
    async list(datasetId, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }
        if (options === null || options === void 0 ? void 0 : options.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.orderBy) {
            options.orderBy.forEach((orderBy) => {
                params.append("order_bys", orderBy);
            });
        }
        if (options === null || options === void 0 ? void 0 : options.offset) {
            params.append("offset", options.offset.toString());
        }
        return this.base.request({
            method: "GET",
            endpoint: `/datasets/${datasetId}?${params.toString()}`,
        });
    }
    async delete(datasetId, itemId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/datasets/${datasetId}/items/${itemId}`,
        });
    }
}

class Datasets {
    constructor(base) {
        this.base = base;
    }
    async get(datasetId) {
        return this.base.request({
            method: "GET",
            endpoint: `/datasets/${datasetId}`,
        });
    }
    async list(projectId) {
        const params = new URLSearchParams();
        if (projectId) {
            params.append("project_id", projectId);
        }
        return this.base.request({
            method: "GET",
            endpoint: `/datasets?${params.toString()}`,
        });
    }
    async delete(datasetId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/datasets/${datasetId}`,
        });
    }
}

class FinetunedModels {
    constructor(base) {
        this.base = base;
    }
    async create(data) {
        return this.base.request({
            method: "POST",
            endpoint: `/projects/${data.project_id}/finetuned_models`,
            data,
        });
    }
    async get(modelId) {
        return this.base.request({
            method: "GET",
            endpoint: `/finetuned_models/${modelId}`,
        });
    }
    async list(projectId, taskId) {
        const params = new URLSearchParams();
        if (taskId) {
            params.append("task_id", taskId);
        }
        return this.base.request({
            method: "GET",
            endpoint: `/projects/${projectId}/finetuned_models?${params.toString()}`,
        });
    }
    async update(modelId, data) {
        return this.base.request({
            method: "PATCH",
            endpoint: `/finetuned_models/${modelId}`,
            data,
        });
    }
    async delete(modelId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/finetuned_models/${modelId}`,
        });
    }
}

class Integrations {
    constructor(base) {
        this.base = base;
    }
    async get(integrationId) {
        return this.base.request({
            method: "GET",
            endpoint: `/integrations/${integrationId}`,
        });
    }
    async list() {
        return this.base.request({
            method: "GET",
            endpoint: "/integrations",
        });
    }
    async update(integrationId, data) {
        return this.base.request({
            method: "PATCH",
            endpoint: `/integrations/${integrationId}`,
            data,
        });
    }
}

class Projects {
    constructor(base) {
        this.base = base;
    }
    async create(data) {
        const params = new URLSearchParams();
        params.append("project_name", data.project_name);
        params.append("description", data.description);
        return this.base.request({
            method: "POST",
            endpoint: `/projects?${params.toString()}`,
            data,
        });
    }
    async get(projectId) {
        return this.base.request({
            method: "GET",
            endpoint: `/projects/${projectId}`,
        });
    }
    async list() {
        return this.base.request({
            method: "GET",
            endpoint: "/projects",
        });
    }
    async delete(projectId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/projects/${projectId}`,
        });
    }
}

class RefuelBase {
    constructor(accessToken, baseUrl) {
        this.accessToken = accessToken;
        this.baseUrl = baseUrl;
    }
    async request({ method, endpoint, data, }) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            Authorization: `Bearer ${this.accessToken}`,
        };
        let body;
        if (data instanceof FormData) {
            body = data;
        }
        else if (data) {
            headers["Content-Type"] = "application/json";
            body = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method,
            headers,
            body,
        });
        const responseJSON = await response.json();
        if (!response.ok) {
            throw new Error((responseJSON === null || responseJSON === void 0 ? void 0 : responseJSON.error_msg) ||
                "An error occurred while making the API request.");
        }
        return (responseJSON.data || responseJSON);
    }
}

class TaskModels {
    constructor(base) {
        this.base = base;
    }
    async list(taskId) {
        const response = await this.base.request({
            method: "GET",
            endpoint: `/tasks/${taskId}/models`,
        });
        return response.models;
    }
}

class TaskRuns {
    constructor(base) {
        this.base = base;
    }
    async list(taskId, options) {
        let endpoint = `/tasks/${taskId}/runs`;
        if ((options === null || options === void 0 ? void 0 : options.datasetId) && (options === null || options === void 0 ? void 0 : options.evalSet)) {
            throw new Error("Cannot provide both datasetId and evalSet");
        }
        if (options === null || options === void 0 ? void 0 : options.datasetId) {
            endpoint += `/${options.datasetId}`;
        }
        else if (options === null || options === void 0 ? void 0 : options.evalSet) {
            endpoint = `/tasks/${taskId}/evalset/runs`;
        }
        const response = await this.base.request({
            method: "GET",
            endpoint,
        });
        if (Array.isArray(response)) {
            return response;
        }
        return [response];
    }
}

class Tasks {
    constructor(base) {
        this.base = base;
    }
    async get(taskId) {
        return this.base.request({
            method: "GET",
            endpoint: `/tasks/${taskId}`,
        });
    }
    async list(projectId) {
        const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";
        return this.base.request({
            method: "GET",
            endpoint,
        });
    }
    async update(taskId, data) {
        return this.base.request({
            method: "PATCH",
            endpoint: `/tasks/${taskId}`,
            data,
        });
    }
    async delete(taskId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/tasks/${taskId}`,
        });
    }
}

class Taxonomies {
    constructor(base) {
        this.base = base;
    }
    async create(taskId, labels = []) {
        const data = {
            labels: Array.isArray(labels) ? labels : [labels],
        };
        return this.base.request({
            method: "POST",
            endpoint: `/tasks/${taskId}/taxonomies`,
            data,
        });
    }
    async get(taskId, taxonomyId) {
        return this.base.request({
            method: "GET",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
        });
    }
    async delete(taskId, taxonomyId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
        });
    }
    async duplicate(taskId, taxonomyId) {
        return this.base.request({
            method: "POST",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/duplicate`,
        });
    }
}

class TaxonomyLabels {
    constructor(base) {
        this.base = base;
    }
    async create(taskId, taxonomyId, labels) {
        const data = new FormData();
        data.append("labels", JSON.stringify(Array.isArray(labels) ? labels : [labels]));
        return this.base.request({
            method: "POST",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            data,
        });
    }
    async list(taskId, taxonomyId, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.offset) {
            params.append("offset", options.offset.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.filter) {
            params.append("filter", options === null || options === void 0 ? void 0 : options.filter);
        }
        return this.base.request({
            method: "GET",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}?${params.toString()}`,
        });
    }
    async update(taskId, taxonomyId, labelId, data) {
        return this.base.request({
            method: "PATCH",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
            data,
        });
    }
    async delete(taskId, taxonomyId, labelId) {
        return this.base.request({
            method: "DELETE",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
        });
    }
}

class Team {
    constructor(base) {
        this.base = base;
    }
    async get() {
        return this.base.request({
            method: "GET",
            endpoint: "/team",
        });
    }
    async regenerateApiKey() {
        await this.base.request({
            method: "PATCH",
            endpoint: "/team",
            data: {
                update_api_key: true,
            },
        });
        return (await this.get()).refuel_api_key;
    }
}

class TeamModels {
    constructor(base) {
        this.base = base;
    }
    async list() {
        return this.base.request({
            method: "GET",
            endpoint: "/models",
        });
    }
}

class Usage {
    constructor(base) {
        this.base = base;
    }
    async get(startDate, endDate, options) {
        const params = new URLSearchParams();
        params.append("start_date", startDate);
        params.append("end_date", endDate);
        if (options === null || options === void 0 ? void 0 : options.applicationId) {
            params.append("application_id", options.applicationId);
        }
        if (options === null || options === void 0 ? void 0 : options.taskId) {
            params.append("task_id", options.taskId);
        }
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model", options.modelId);
        }
        return this.base.request({
            method: "GET",
            endpoint: `/usage?${params.toString()}`,
        });
    }
}

class Users {
    constructor(base) {
        this.base = base;
    }
    async create(email) {
        const data = Array.isArray(email) ? email : [email];
        return this.base.request({
            method: "POST",
            endpoint: "/users",
            data,
        });
    }
    async get(userId) {
        return this.base.request({
            method: "GET",
            endpoint: `/users/${userId}`,
        });
    }
    async list() {
        return this.base.request({
            method: "GET",
            endpoint: `/users`,
        });
    }
}

var LabelSource;
(function (LabelSource) {
    LabelSource["LLM"] = "LLM";
    LabelSource["HUMAN"] = "HUMAN";
})(LabelSource || (LabelSource = {}));
var DatasetColumnType;
(function (DatasetColumnType) {
    DatasetColumnType["STRING"] = "string";
    DatasetColumnType["NUMBER"] = "number";
    DatasetColumnType["BOOLEAN"] = "boolean";
    DatasetColumnType["IMAGE_URL"] = "image_url";
    DatasetColumnType["PDF_URL"] = "pdf_url";
})(DatasetColumnType || (DatasetColumnType = {}));
var FilterFieldCategory;
(function (FilterFieldCategory) {
    FilterFieldCategory["LABEL"] = "label";
    FilterFieldCategory["METADATA"] = "metadata";
    FilterFieldCategory["SIMILAR"] = "similar";
})(FilterFieldCategory || (FilterFieldCategory = {}));
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["EQUAL"] = "=";
    FilterOperator["GREATER_THAN"] = ">";
    FilterOperator["GREATER_THAN_OR_EQUAL"] = ">=";
    FilterOperator["ILIKE"] = "ILIKE";
    FilterOperator["IN"] = "IN";
    FilterOperator["IS_NOT_VERIFIED"] = "IS NOT VERIFIED";
    FilterOperator["IS_VERIFIED"] = "IS VERIFIED";
    FilterOperator["LESS_THAN"] = "<";
    FilterOperator["LESS_THAN_OR_EQUAL"] = "<=";
    FilterOperator["MATCHES"] = "~*";
    FilterOperator["NOT_EQUAL"] = "<>";
    FilterOperator["NOT_ILIKE"] = "NOT ILIKE";
    FilterOperator["NOT_MATCHES"] = "!~*";
    FilterOperator["NOT_NULL"] = "IS NOT NULL";
    FilterOperator["NULL"] = "IS NULL";
    FilterOperator["SIMILAR"] = "SIMILAR";
})(FilterOperator || (FilterOperator = {}));
var SchemaMode;
(function (SchemaMode) {
    SchemaMode["AUTO"] = "auto";
    SchemaMode["MANUAL"] = "manual";
})(SchemaMode || (SchemaMode = {}));
var TransformType;
(function (TransformType) {
    TransformType["WEB_SEARCH"] = "web_search";
    TransformType["MAP_SEARCH"] = "map_search";
    TransformType["WEBPAGE_TRANSFORM"] = "webpage_transform";
    TransformType["OCR"] = "ocr";
    TransformType["CUSTOM_API"] = "custom_api";
})(TransformType || (TransformType = {}));
var TaskType;
(function (TaskType) {
    TaskType["TASK_CHAIN"] = "task_chain";
})(TaskType || (TaskType = {}));
var FeatureFlagValues;
(function (FeatureFlagValues) {
    FeatureFlagValues["ENABLED"] = "enabled";
    FeatureFlagValues["DISABLED"] = "disabled";
})(FeatureFlagValues || (FeatureFlagValues = {}));
var UserState;
(function (UserState) {
    UserState["ACTIVE"] = "ACTIVE";
    UserState["INVITED"] = "INVITED";
    UserState["CREATED"] = "CREATED";
})(UserState || (UserState = {}));
var MetricFormat;
(function (MetricFormat) {
    MetricFormat["NUMERIC"] = "numeric";
    MetricFormat["PERCENTAGE"] = "percentage";
    MetricFormat["HISTOGRAM"] = "histogram";
    MetricFormat["DICT"] = "dict";
})(MetricFormat || (MetricFormat = {}));
var AvailabilityStatus;
(function (AvailabilityStatus) {
    AvailabilityStatus["UNAVAILABLE"] = "UNAVAILABLE";
    AvailabilityStatus["AVAILABLE"] = "AVAILABLE";
})(AvailabilityStatus || (AvailabilityStatus = {}));
var FinetuningRunStatus;
(function (FinetuningRunStatus) {
    FinetuningRunStatus["INITIALIZATION_IN_PROGRESS"] = "INITIALIZATION IN PROGRESS";
    FinetuningRunStatus["INITIALIZATION_COMPLETE"] = "INITIALIZATION COMPLETE";
    FinetuningRunStatus["DATASET_PREP_NOT_STARTED"] = "DATASET PREPARATION NOT STARTED";
    FinetuningRunStatus["DATASET_PREP_IN_PROGRESS"] = "DATASET PREPARATION IN PROGRESS";
    FinetuningRunStatus["DATASET_PREP_COMPLETED"] = "DATASET PREPARATION COMPLETED";
    FinetuningRunStatus["DATASET_PREP_FAILED"] = "DATASET PREPARATION FAILED";
    FinetuningRunStatus["RESOURCE_ALLOCATION_NOT_STARTED"] = "RESOURCE ALLOCATION NOT STARTED";
    FinetuningRunStatus["RESOURCE_ALLOCATION_IN_PROGRESS"] = "RESOURCE ALLOCATION IN PROGRESS";
    FinetuningRunStatus["RESOURCE_ALLOCATION_COMPLETED"] = "RESOURCE ALLOCATION COMPLETED";
    FinetuningRunStatus["RESOURCE_ALLOCATION_FAILED"] = "RESOURCE ALLOCATION FAILED";
    FinetuningRunStatus["TRAINING_NOT_STARTED"] = "TRAINING NOT STARTED";
    FinetuningRunStatus["TRAINING_IN_PROGRESS"] = "TRAINING IN PROGRESS";
    FinetuningRunStatus["TRAINING_COMPLETED"] = "TRAINING COMPLETED";
    FinetuningRunStatus["TRAINING_FAILED"] = "TRAINING FAILED";
    FinetuningRunStatus["DEPLOY_NOT_STARTED"] = "DEPLOYMENT NOT STARTED";
    FinetuningRunStatus["DEPLOY_IN_PROGRESS"] = "DEPLOYMENT IN PROGRESS";
    FinetuningRunStatus["DEPLOY_COMPLETED"] = "DEPLOYMENT COMPLETED";
    FinetuningRunStatus["DEPLOY_FAILED"] = "DEPLOYMENT FAILED";
    FinetuningRunStatus["EVALUATION_NOT_STARTED"] = "EVALUATION NOT STARTED";
    FinetuningRunStatus["EVALUATION_IN_PROGRESS"] = "EVALUATION IN PROGRESS";
    FinetuningRunStatus["EVALUATION_COMPLETED"] = "EVALUATION COMPLETED";
    FinetuningRunStatus["EVALUATION_FAILED"] = "EVALUATION FAILED";
    FinetuningRunStatus["INTERRUPTED"] = "INTERRUPTED";
})(FinetuningRunStatus || (FinetuningRunStatus = {}));

class Refuel {
    constructor(accessToken, options) {
        const baseUrl = (options === null || options === void 0 ? void 0 : options.baseUrl) || DEFAULT_BASE_URL;
        this.base = new RefuelBase(accessToken, baseUrl);
        this.applications = new Applications(this.base);
        this.datasets = new Datasets(this.base);
        this.datasetItems = new DatasetItems(this.base);
        this.datasetExports = new DatasetExports(this.base);
        this.finetunedModels = new FinetunedModels(this.base);
        this.integrations = new Integrations(this.base);
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

export { AvailabilityStatus, DatasetColumnType, FeatureFlagValues, FilterFieldCategory, FilterOperator, FinetuningRunStatus, LabelSource, MetricFormat, Refuel, SchemaMode, TaskType, TransformType, UserState };
//# sourceMappingURL=index.mjs.map
