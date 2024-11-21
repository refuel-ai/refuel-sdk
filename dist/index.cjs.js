'use strict';

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

exports.LabelSource = void 0;
(function (LabelSource) {
    LabelSource["LLM"] = "LLM";
    LabelSource["HUMAN"] = "HUMAN";
})(exports.LabelSource || (exports.LabelSource = {}));
exports.DatasetColumnType = void 0;
(function (DatasetColumnType) {
    DatasetColumnType["STRING"] = "string";
    DatasetColumnType["NUMBER"] = "number";
    DatasetColumnType["BOOLEAN"] = "boolean";
    DatasetColumnType["IMAGE_URL"] = "image_url";
    DatasetColumnType["PDF_URL"] = "pdf_url";
})(exports.DatasetColumnType || (exports.DatasetColumnType = {}));
exports.FilterFieldCategory = void 0;
(function (FilterFieldCategory) {
    FilterFieldCategory["LABEL"] = "label";
    FilterFieldCategory["METADATA"] = "metadata";
    FilterFieldCategory["SIMILAR"] = "similar";
})(exports.FilterFieldCategory || (exports.FilterFieldCategory = {}));
exports.FilterOperator = void 0;
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
})(exports.FilterOperator || (exports.FilterOperator = {}));
exports.SchemaMode = void 0;
(function (SchemaMode) {
    SchemaMode["AUTO"] = "auto";
    SchemaMode["MANUAL"] = "manual";
})(exports.SchemaMode || (exports.SchemaMode = {}));
exports.TransformType = void 0;
(function (TransformType) {
    TransformType["WEB_SEARCH"] = "web_search";
    TransformType["MAP_SEARCH"] = "map_search";
    TransformType["WEBPAGE_TRANSFORM"] = "webpage_transform";
    TransformType["OCR"] = "ocr";
    TransformType["CUSTOM_API"] = "custom_api";
})(exports.TransformType || (exports.TransformType = {}));
exports.TaskType = void 0;
(function (TaskType) {
    TaskType["TASK_CHAIN"] = "task_chain";
})(exports.TaskType || (exports.TaskType = {}));
exports.FeatureFlagValues = void 0;
(function (FeatureFlagValues) {
    FeatureFlagValues["ENABLED"] = "enabled";
    FeatureFlagValues["DISABLED"] = "disabled";
})(exports.FeatureFlagValues || (exports.FeatureFlagValues = {}));
exports.UserState = void 0;
(function (UserState) {
    UserState["ACTIVE"] = "ACTIVE";
    UserState["INVITED"] = "INVITED";
    UserState["CREATED"] = "CREATED";
})(exports.UserState || (exports.UserState = {}));

class Refuel {
    constructor(accessToken, options) {
        const baseUrl = (options === null || options === void 0 ? void 0 : options.baseUrl) || DEFAULT_BASE_URL;
        this.base = new RefuelBase(accessToken, baseUrl);
        this.applications = new Applications(this.base);
        this.datasets = new Datasets(this.base);
        this.datasetExports = new DatasetExports(this.base);
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

exports.Refuel = Refuel;
//# sourceMappingURL=index.cjs.js.map
