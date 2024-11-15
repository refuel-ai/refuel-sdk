'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class Applications {
    constructor(base) {
        this.base = base;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "POST",
                endpoint: "/applications",
                data,
            });
        });
    }
    get(applicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/applications/${applicationId}`,
            });
        });
    }
    list(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = projectId
                ? `/projects/${projectId}/applications`
                : "/applications";
            return this.base.request({
                method: "GET",
                endpoint,
            });
        });
    }
    delete(applicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/applications/${applicationId}`,
            });
        });
    }
    label(applicationId, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            if (options === null || options === void 0 ? void 0 : options.modelId) {
                params.append("model_id", options.modelId);
            }
            return this.base.request({
                method: "POST",
                endpoint: `/applications/${applicationId}/label?${params.toString()}`,
                data,
            });
        });
    }
}

const DEFAULT_BASE_URL = "https://cloud-api.refuel.ai";

class Datasets {
    constructor(base) {
        this.base = base;
    }
    list(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            if (projectId) {
                params.append("project_id", projectId);
            }
            return this.base.request({
                method: "GET",
                endpoint: `/datasets?${params.toString()}`,
            });
        });
    }
    delete(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/datasets/${datasetId}`,
            });
        });
    }
}

class Projects {
    constructor(base) {
        this.base = base;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("project_name", data.project_name);
            params.append("description", data.description);
            return this.base.request({
                method: "POST",
                endpoint: `/projects?${params.toString()}`,
                data,
            });
        });
    }
    get(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/projects/${projectId}`,
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: "/projects",
            });
        });
    }
    delete(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/projects/${projectId}`,
            });
        });
    }
}

class RefuelBase {
    constructor(accessToken, baseUrl) {
        this.accessToken = accessToken;
        this.baseUrl = baseUrl;
    }
    request(_a) {
        return __awaiter(this, arguments, void 0, function* ({ method, endpoint, data, }) {
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
            const response = yield fetch(url, {
                method,
                headers,
                body,
            });
            const responseJSON = yield response.json();
            if (!response.ok) {
                throw new Error((responseJSON === null || responseJSON === void 0 ? void 0 : responseJSON.error_msg) ||
                    "An error occurred while making the API request.");
            }
            return (responseJSON.data || responseJSON);
        });
    }
}

class Tasks {
    constructor(base) {
        this.base = base;
    }
    get(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/tasks/${taskId}`,
            });
        });
    }
    list(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";
            return this.base.request({
                method: "GET",
                endpoint,
            });
        });
    }
    update(taskId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "PATCH",
                endpoint: `/tasks/${taskId}`,
                data,
            });
        });
    }
    delete(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/tasks/${taskId}`,
            });
        });
    }
}

class Taxonomies {
    constructor(base) {
        this.base = base;
    }
    create(taskId_1) {
        return __awaiter(this, arguments, void 0, function* (taskId, labels = []) {
            const data = {
                labels: Array.isArray(labels) ? labels : [labels],
            };
            return this.base.request({
                method: "POST",
                endpoint: `/tasks/${taskId}/taxonomies`,
                data,
            });
        });
    }
    get(taskId, taxonomyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            });
        });
    }
    delete(taskId, taxonomyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            });
        });
    }
}

class TaxonomyLabels {
    constructor(base) {
        this.base = base;
    }
    create(taskId, taxonomyId, labels) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new FormData();
            data.append("labels", JSON.stringify(Array.isArray(labels) ? labels : [labels]));
            return this.base.request({
                method: "POST",
                endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
                data,
            });
        });
    }
    list(taskId, taxonomyId, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    update(taskId, taxonomyId, labelId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "PATCH",
                endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
                data,
            });
        });
    }
    delete(taskId, taxonomyId, labelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "DELETE",
                endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
            });
        });
    }
}

class Team {
    constructor(base) {
        this.base = base;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: "/team",
            });
        });
    }
    regenerateApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.base.request({
                method: "PATCH",
                endpoint: "/team",
                data: {
                    update_api_key: true,
                },
            });
            return (yield this.get()).refuel_api_key;
        });
    }
}

class Usage {
    constructor(base) {
        this.base = base;
    }
    get(startDate, endDate, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}

class Users {
    constructor(base) {
        this.base = base;
    }
    create(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(Array.isArray(email) ? email : [email]);
            return this.base.request({
                method: "POST",
                endpoint: "/users",
                data,
            });
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/users/${userId}`,
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.base.request({
                method: "GET",
                endpoint: `/users`,
            });
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

class Refuel {
    constructor(accessToken, options) {
        const baseUrl = (options === null || options === void 0 ? void 0 : options.baseUrl) || DEFAULT_BASE_URL;
        this.base = new RefuelBase(accessToken, baseUrl);
        this.applications = new Applications(this.base);
        this.datasets = new Datasets(this.base);
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
