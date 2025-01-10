/**
 * Handles operations related to applications.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Applications {
    /** @internal */
    constructor(base) {
        this.base = base;
    }
    /**
     * Deploy a specific task as an application
     *
     * @example
     * ```ts
     * const application = await refuel.applications.create({
     *     projectId,
     *     taskId,
     * });
     * ```
     */
    async create(options) {
        const params = new URLSearchParams();
        params.append("task_id", options.taskId);
        if (options.name) {
            params.append("name", options.name);
        }
        return this.base.request(`/projects/${options.projectId}/applications?${params.toString()}`, {
            method: "POST",
        });
    }
    /**
     * Get an application by ID
     *
     * @example
     * ```ts
     * const application = await refuel.applications.get(applicationId);
     * ```
     */
    async get(applicationId) {
        return this.base.request(`/applications/${applicationId}`);
    }
    /**
     * List all applications
     *
     * @example
     * ```ts
     * const applications = await refuel.applications.list();
     * ```
     */
    async list(projectId) {
        const endpoint = projectId
            ? `/projects/${projectId}/applications`
            : "/applications";
        return this.base.request(endpoint);
    }
    /**
     * Delete a deployed application
     *
     * @example
     * ```ts
     * await refuel.applications.delete(applicationId);
     * ```
     */
    async delete(applicationId) {
        return this.base.request(`/applications/${applicationId}`, {
            method: "DELETE",
        });
    }
    /**
     * Get labels for a specific item
     *
     * @example
     * ```ts
     * const labeledItem = await refuel.applications.getLabeledItem(
     *     applicationId,
     *     itemId,
     * );
     * ```
     */
    async getLabeledItem(applicationId, itemId) {
        return this.base.request(`/applications/${applicationId}/items/${itemId}`);
    }
    /**
     * Labels an item with your application
     *
     * @example
     * Label an item and console log the values
     * ```ts
     * const dataToLabel = [
     *     {
     *         menu_text: "Grilled chicken sandwich with avocado and chipotle mayo",
     *     },
     * ];
     *
     * const labeledItem = await refuel.applications.label(
     *     applicationId,
     *     dataToLabel,
     * );
     * console.log(labeledItem); // output label values
     * ```
     *
     * @example
     * You can also trigger the label processing to happen asynchronously
     * ```ts
     * const response = await refuel.applications.label(
     *     applicationId,
     *     dataToLabel,
     *     { async: true }
     * );
     *
     * const labeledItem = await refuel.applications.getLabeledItem(
     *     response.application_id,
     *     response.refuel_output[0].refuel_uuid,
     * );
     *
     * console.log(labeledItem); // output label values
     * ```
     */
    async label(applicationId, data, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model_id", options.modelId);
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
        return this.base.request(`/applications/${applicationId}/label?${params.toString()}`, {
            method: "POST",
            data,
        });
    }
    /**
     * Provide the correct label for an item
     *
     * @example
     * ```ts
     * const correctLabelData = {
     *     vegetarian: "no",
     * };
     *
     * await refuel.applications.feedback(
     *     applicationId,
     *     itemId,
     *     correctLabelData,
     * );
     * ```
     */
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
        return this.base.request(`/applications/${applicationId}/items/${itemId}/label`, {
            method: "POST",
            data: feedbackData,
        });
    }
}

/**
 * The source of a label value
 */
var LabelSource;
(function (LabelSource) {
    /** Label from an LLM */
    LabelSource["LLM"] = "LLM";
    /** Label from a human */
    LabelSource["HUMAN"] = "HUMAN";
})(LabelSource || (LabelSource = {}));
/**
 * The type of a column value
 */
var DatasetColumnType;
(function (DatasetColumnType) {
    DatasetColumnType["STRING"] = "string";
    DatasetColumnType["NUMBER"] = "number";
    DatasetColumnType["BOOLEAN"] = "boolean";
    DatasetColumnType["IMAGE_URL"] = "image_url";
    DatasetColumnType["PDF_URL"] = "pdf_url";
})(DatasetColumnType || (DatasetColumnType = {}));
/**
 * The category of a filter field
 */
var FilterFieldCategory;
(function (FilterFieldCategory) {
    /** Filter on a label */
    FilterFieldCategory["LABEL"] = "label";
    /** Filter on metadata */
    FilterFieldCategory["METADATA"] = "metadata";
    /** Filter on similar items */
    FilterFieldCategory["SIMILAR"] = "similar";
})(FilterFieldCategory || (FilterFieldCategory = {}));
/**
 * The operator to use for a filter
 */
var FilterOperator;
(function (FilterOperator) {
    /** Equal to */
    FilterOperator["EQUAL"] = "=";
    /** Greater than */
    FilterOperator["GREATER_THAN"] = ">";
    /** Greater than or equal to */
    FilterOperator["GREATER_THAN_OR_EQUAL"] = ">=";
    /** ILIKE */
    FilterOperator["ILIKE"] = "ILIKE";
    /** In a list */
    FilterOperator["IN"] = "IN";
    /** Is not verified */
    FilterOperator["IS_NOT_VERIFIED"] = "IS NOT VERIFIED";
    /** Is verified */
    FilterOperator["IS_VERIFIED"] = "IS VERIFIED";
    /** Less than */
    FilterOperator["LESS_THAN"] = "<";
    /** Less than or equal to */
    FilterOperator["LESS_THAN_OR_EQUAL"] = "<=";
    /** Matches */
    FilterOperator["MATCHES"] = "~*";
    /** Not equal to */
    FilterOperator["NOT_EQUAL"] = "<>";
    /** Not ILIKE */
    FilterOperator["NOT_ILIKE"] = "NOT ILIKE";
    /** Not matches */
    FilterOperator["NOT_MATCHES"] = "!~*";
    /** Not null */
    FilterOperator["NOT_NULL"] = "IS NOT NULL";
    /** Null */
    FilterOperator["NULL"] = "IS NULL";
    /** Similar to another item */
    FilterOperator["SIMILAR"] = "SIMILAR";
})(FilterOperator || (FilterOperator = {}));
/**
 * The mode to used to generate the schema for a subtask
 */
var SchemaMode;
(function (SchemaMode) {
    /** Automatically generate the schema from the guidelines */
    SchemaMode["AUTO"] = "auto";
    /** Manually specify the schema */
    SchemaMode["MANUAL"] = "manual";
})(SchemaMode || (SchemaMode = {}));
/**
 * The type of enrichment
 */
var TransformType;
(function (TransformType) {
    /** Search the web for information relevant to the input */
    TransformType["WEB_SEARCH"] = "web_search";
    /** Search for a location on a map */
    TransformType["MAP_SEARCH"] = "map_search";
    /** Transform a webpage into structured data */
    TransformType["WEBPAGE_TRANSFORM"] = "webpage_transform";
    /** Extract text from an image or document */
    TransformType["OCR"] = "ocr";
    /** Use a custom API to transform the data */
    TransformType["CUSTOM_API"] = "custom_api";
})(TransformType || (TransformType = {}));
/**
 * The type of task
 */
var TaskType;
(function (TaskType) {
    /** Classify an item into one category */
    TaskType["CLASSIFICATION"] = "classification";
    /** Classify an item into one or more categories */
    TaskType["MULTILABEL_CLASSIFICATION"] = "multilabel_classification";
    /** Extract an answer from an item */
    TaskType["ANSWER_EXTRACTION"] = "answer_extraction";
    /** Extract structured data from a document */
    TaskType["DOCUMENT_EXTRACTION"] = "document_extraction";
    /** Extract attributes from an item */
    TaskType["ATTRIBUTE_EXTRACTION"] = "attribute_extraction";
    /** Chain of tasks */
    TaskType["TASK_CHAIN"] = "task_chain";
})(TaskType || (TaskType = {}));
var FeatureFlagValues;
(function (FeatureFlagValues) {
    FeatureFlagValues["ENABLED"] = "enabled";
    FeatureFlagValues["DISABLED"] = "disabled";
})(FeatureFlagValues || (FeatureFlagValues = {}));
/**
 * Possible states for a user
 */
var UserState;
(function (UserState) {
    /** User is active */
    UserState["ACTIVE"] = "ACTIVE";
    /** User has been invited to the team */
    UserState["INVITED"] = "INVITED";
    /** User has been created but not invited */
    UserState["CREATED"] = "CREATED";
})(UserState || (UserState = {}));
/**
 * The format of a metric
 */
var MetricFormat;
(function (MetricFormat) {
    /** Numeric metric */
    MetricFormat["NUMERIC"] = "numeric";
    /** Percentage metric */
    MetricFormat["PERCENTAGE"] = "percentage";
    /** Histogram metric */
    MetricFormat["HISTOGRAM"] = "histogram";
    /** Dictionary metric */
    MetricFormat["DICT"] = "dict";
})(MetricFormat || (MetricFormat = {}));
/**
 * The availability status of a labeling model
 */
var AvailabilityStatus;
(function (AvailabilityStatus) {
    AvailabilityStatus["UNAVAILABLE"] = "UNAVAILABLE";
    AvailabilityStatus["AVAILABLE"] = "AVAILABLE";
})(AvailabilityStatus || (AvailabilityStatus = {}));
/**
 * The status of a finetuning run
 */
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
/**
 * The status of a confidence calibration
 */
var CalibrationStatus;
(function (CalibrationStatus) {
    CalibrationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    CalibrationStatus["DELETED"] = "DELETED";
    CalibrationStatus["INTERRUPTED"] = "INTERRUPTED";
    CalibrationStatus["COMPLETED"] = "COMPLETED";
})(CalibrationStatus || (CalibrationStatus = {}));
/**
 * The model used for confidence calibration
 */
var CalibrationModel;
(function (CalibrationModel) {
    CalibrationModel["LINEAR_REGRESSION"] = "LINEAR_REGRESSION";
})(CalibrationModel || (CalibrationModel = {}));
var SamplingStrategy;
(function (SamplingStrategy) {
    SamplingStrategy["RANDOM"] = "random";
    SamplingStrategy["STRATIFIED"] = "stratified";
    SamplingStrategy["SORTED"] = "sorted";
})(SamplingStrategy || (SamplingStrategy = {}));
var EvalsetSamplingStrategy;
(function (EvalsetSamplingStrategy) {
    EvalsetSamplingStrategy["NO_SAMPLING"] = "no sampling";
    EvalsetSamplingStrategy["RANDOM"] = "random";
    EvalsetSamplingStrategy["STRATIFIED"] = "stratified";
    EvalsetSamplingStrategy["BALANCED"] = "balanced";
})(EvalsetSamplingStrategy || (EvalsetSamplingStrategy = {}));
var SampleColumnType;
(function (SampleColumnType) {
    SampleColumnType["LABEL"] = "label";
    SampleColumnType["METADATA"] = "metadata";
    SampleColumnType["CONFIDENCE"] = "confidence";
})(SampleColumnType || (SampleColumnType = {}));

/**
 * Handles operations related to confidence calibrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Calibrations {
    constructor(base) {
        this.base = base;
    }
    /**
     * Calibrate the confidence of a task
     *
     * @example
     * ```ts
     * const calibration = await refuel.calibrations.create(taskId);
     * ```
     */
    async create(taskId) {
        return this.base.request(`/tasks/${taskId}/calibrations`, {
            method: "POST",
            data: {
                status: CalibrationStatus.IN_PROGRESS,
            },
        });
    }
    /**
     * Get a confidence calibration by ID
     *
     * @example
     * ```ts
     * const task = await refuel.calibrations.get(taskId, calibrationId);
     * ```
     */
    async get(taskId, calibrationId) {
        return this.base.request(`/tasks/${taskId}/calibrations/${calibrationId}`);
    }
    /**
     * List all confidence calibrations for a task
     *
     * @example
     * ```ts
     * const calibrations = await refuel.calibrations.list(taskId);
     * ```
     */
    async list(taskId) {
        return this.base.request(`/tasks/${taskId}/calibrations`);
    }
    /**
     * Update a confidence calibration
     *
     * @example
     * ```ts
     * const calibration = await refuel.calibrations.update(taskId, calibrationId, {
     *  status: CalibrationStatus.INTERRUPTED
     * });
     * ```
     */
    async update(taskId, calibrationId, data) {
        return this.base.request(`/tasks/${taskId}/calibrations/${calibrationId}`, {
            method: "PATCH",
            data,
        });
    }
}

/**
 * Handles operations related to dataset exports.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class DatasetExports {
    /** @internal */
    constructor(base) {
        this.base = base;
    }
    /**
     * Get the URL of a dataset export
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.get(exportId, datasetId);
     * ```
     */
    async get(exportId, datasetId) {
        return this.base.request(`/datasets/${datasetId}/exports/${exportId}`);
    }
    /**
     * Email a secure, expiring link to download a dataset
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.create(datasetId, { email: "example@example.com" });
     * ```
     */
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
        return this.base.request(`/datasets/${datasetId}/exports?${params.toString()}`, {
            method: "POST",
        });
    }
}

class DatasetItems {
    /** @internal */
    constructor(base) {
        this.base = base;
    }
    /**
     * Add data to a dataset
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasetItems.create(datasetId, [{ "name": "John Doe" }, { "name": "Jane Doe" }]);
     * ```
     */
    async create(datasetId, data) {
        return this.base.request(`/datasets/${datasetId}/items`, {
            method: "POST",
            data,
        });
    }
    /**
     * Get a dataset item by ID
     *
     * @example
     * ```ts
     * const item = await refuel.datasetItems.get(datasetId, itemId);
     * ```
     */
    async get(datasetId, itemId, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.taskId) {
            params.append("task_id", options.taskId);
        }
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model_id", options.modelId);
        }
        const path = (options === null || options === void 0 ? void 0 : options.taskId)
            ? `/tasks/${options.taskId}/datasets/${datasetId}/items/${itemId}`
            : `/datasets/${datasetId}/items/${itemId}`;
        const response = await this.base.request(`${path}?${params.toString()}`);
        if (Array.isArray(response)) {
            return response[0];
        }
        return response;
    }
    async list(options) {
        const params = new URLSearchParams();
        let path;
        if (options.taskId && options.evalSet) {
            path = `/tasks/${options.taskId}/evalset`;
        }
        else if (options.taskId && options.seedSet) {
            path = `/tasks/${options.taskId}/seedset`;
        }
        else if (options.taskId && options.datasetId) {
            path = `/tasks/${options.taskId}/datasets/${options.datasetId}`;
        }
        else if (options.datasetId) {
            path = `/datasets/${options.datasetId}`;
        }
        else {
            throw new Error("Missing required parameters");
        }
        if (options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }
        if (options.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }
        if (options.orderBy) {
            const orderBys = Array.isArray(options.orderBy)
                ? options.orderBy
                : [options.orderBy];
            orderBys.forEach((orderBy) => {
                params.append("order_bys", JSON.stringify(orderBy));
            });
        }
        if (options.offset) {
            params.append("offset", options.offset.toString());
        }
        return this.base.request(`${path}?${params.toString()}`);
    }
    /**
     * Delete a dataset item
     *
     * @example
     * ```ts
     * await refuel.datasetItems.delete(datasetId, itemId);
     * ```
     */
    async delete(itemId, options) {
        const itemIds = Array.isArray(itemId) ? itemId : [itemId];
        let basePath;
        if (options.taskId && options.seedSet) {
            basePath = `/tasks/${options.taskId}/seedset/items`;
        }
        else if (options.taskId && options.evalSet) {
            basePath = `/tasks/${options.taskId}/evalset/items`;
        }
        else if (options.datasetId) {
            basePath = `/datasets/${options.datasetId}/items`;
        }
        else {
            throw new Error("Missing required parameters");
        }
        await Promise.all(itemIds.map((id) => this.base.request(`${basePath}/${id}`, {
            method: "DELETE",
        })));
    }
    async addToEvalSet(taskId, datasetId, options) {
        if (options === null || options === void 0 ? void 0 : options.itemId) {
            const itemIds = Array.isArray(options.itemId)
                ? options.itemId
                : [options.itemId];
            return Promise.all(itemIds.map((id) => {
                const params = new URLSearchParams({
                    dataset_id: datasetId,
                    item_id: id,
                });
                return this.base.request(`/tasks/${taskId}/evalset/items?${params.toString()}`, {
                    method: "POST",
                });
            }));
        }
        const params = new URLSearchParams({
            dataset_id: datasetId,
        });
        if (options === null || options === void 0 ? void 0 : options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }
        const data = {
            sample_strategy: EvalsetSamplingStrategy.NO_SAMPLING,
            ...options === null || options === void 0 ? void 0 : options.samplingEvent,
        };
        return this.base.request(`/tasks/${taskId}/evalset/items?${params.toString()}`, {
            method: "POST",
            data,
        });
    }
}

/**
 * Handles operations related to datasets.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Datasets {
    /** @internal */
    constructor(base) {
        this.base = base;
    }
    /**
     * Get a dataset by ID
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasets.get(datasetId);
     * ```
     */
    async get(datasetId) {
        return this.base.request(`/datasets/${datasetId}`);
    }
    /**
     * List all datasets
     *
     * @example
     * ```ts
     * const datasets = await refuel.datasets.list();
     * ```
     */
    async list(projectId) {
        const params = new URLSearchParams();
        if (projectId) {
            params.append("project_id", projectId);
        }
        return this.base.request(`/datasets?${params.toString()}`);
    }
    /**
     * Delete a dataset
     *
     * @example
     * ```ts
     * await refuel.datasets.delete(datasetId);
     * ```
     */
    async delete(datasetId) {
        return this.base.request(`/datasets/${datasetId}`, {
            method: "DELETE",
        });
    }
}

class FinetunedModels {
    /** @internal */
    constructor(base) {
        this.base = base;
    }
    /**
     * Create a new finetuned model
     *
     * @example
     * ```ts
     * const model = await refuel.finetunedModels.create({
     *     project_id: "c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c",
     *     task_id: "9b2e7f15-6d4a-4c31-b518-3a69e0f98d42",
     *     datasets: ["c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c"],
     *     base_model: "refuel-llm-2-large",
     *     augmented_finetuning_model: "gpt-4o",
     *     hyperparameters: {
     *         learning_rate_multiplier: 20,
     *         num_epochs: 10,
     *         lora_r: 32,
     *     },
     *     lora: true,
     * });
     * ```
     */
    async create(data) {
        return this.base.request(`/projects/${data.project_id}/finetuned_models`, {
            method: "POST",
            data,
        });
    }
    /**
     * Get a finetuned model by ID
     *
     * @example
     * ```ts
     * const model = await refuel.finetunedModels.get(modelId);
     * ```
     */
    async get(modelId) {
        return this.base.request(`/finetuned_models/${modelId}`);
    }
    /**
     * List all finetuned models for a project or task
     *
     * @example
     * ```ts
     * const models = await refuel.finetunedModels.list(projectId);
     * ```
     */
    async list(projectId, taskId) {
        const params = new URLSearchParams();
        if (taskId) {
            params.append("task_id", taskId);
        }
        return this.base.request(`/projects/${projectId}/finetuned_models?${params.toString()}`);
    }
    async update(modelId, data) {
        return this.base.request(`/finetuned_models/${modelId}`, {
            method: "PATCH",
            data,
        });
    }
    /**
     * Delete a finetuned model
     *
     * @example
     * ```ts
     * await refuel.finetunedModels.delete(modelId);
     * ```
     */
    async delete(modelId) {
        return this.base.request(`/finetuned_models/${modelId}`, {
            method: "DELETE",
        });
    }
    /**
     * Check if a task is trainable
     *
     * @example
     * ```ts
     * const isTrainable = await refuel.finetunedModels.isTaskTrainable(taskId);
     * ```
     */
    async isTaskTrainable(taskId) {
        const response = await this.base.request(`/tasks/${taskId}/trainable`);
        return response.trainable;
    }
}

/**
 * Handles operations related to third party integrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Integrations {
    constructor(base) {
        this.base = base;
    }
    /**
     * Get a third party integration by ID
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.get(integrationId);
     * ```
     */
    async get(integrationId) {
        return this.base.request(`/integrations/${integrationId}`);
    }
    /**
     * List all third party integrations
     *
     * @example
     * ```ts
     * const integrations = await refuel.integrations.list();
     * ```
     */
    async list() {
        return this.base.request("/integrations");
    }
    /**
     * Update a third party integration
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.update(integrationId, { is_connected: false });
     * ```
     */
    async update(integrationId, data) {
        return this.base.request(`/integrations/${integrationId}`, {
            method: "PATCH",
            data,
        });
    }
}

/**
 * Handles operations related to labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Labels {
    constructor(base) {
        this.base = base;
    }
    getLabelsFromResponse(response) {
        const labels = response.items[0].labels;
        if (!labels) {
            throw new Error("No labels found");
        }
        return labels;
    }
    /**
     * List all labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId);
     * ```
     */
    async list(taskId, datasetId, itemId, options) {
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model_id", options.modelId);
        }
        if (options === null || options === void 0 ? void 0 : options.subtaskId) {
            params.append("subtask_id", options.subtaskId);
        }
        if (typeof (options === null || options === void 0 ? void 0 : options.generateMissingLabels) === "boolean") {
            params.append("generate_missing_labels", options.generateMissingLabels.toString());
        }
        if (typeof (options === null || options === void 0 ? void 0 : options.generateMissingExplanations) === "boolean") {
            params.append("generate_missing_explanations", options.generateMissingExplanations.toString());
        }
        const response = await this.base.request(`/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`);
        return this.getLabelsFromResponse(response);
    }
    /**
     * Update labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.update(taskId, datasetId, itemId, { "subtask_id": "label_value" });
     * ```
     */
    async update(taskId, datasetId, itemId, labels) {
        const response = await this.base.request(`/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label`, {
            method: "POST",
            data: labels,
        });
        return this.getLabelsFromResponse(response);
    }
    /**
     * Approve labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
     * ```
     */
    async approve(taskId, datasetId, itemId, options) {
        const existingLabels = await this.list(taskId, datasetId, itemId, options);
        let updatedLabels = {};
        if (options === null || options === void 0 ? void 0 : options.subtaskId) {
            const existingSubtaskLabels = existingLabels[options.subtaskId];
            if (!existingSubtaskLabels) {
                throw new Error(`No labels found for subtask ${options.subtaskId}`);
            }
            updatedLabels[options.subtaskId] = existingSubtaskLabels;
        }
        else {
            updatedLabels = existingLabels;
        }
        return this.update(taskId, datasetId, itemId, updatedLabels);
    }
    async generateExplanations(taskId, datasetId, itemId, options) {
        const params = new URLSearchParams();
        params.append("generate_missing_explanations", "true");
        if (options === null || options === void 0 ? void 0 : options.subtaskId) {
            params.append("subtask_id", options.subtaskId);
        }
        if (options === null || options === void 0 ? void 0 : options.modelId) {
            params.append("model_id", options.modelId);
        }
        const response = await this.base.request(`/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`);
        return this.getLabelsFromResponse(response);
    }
}

/**
 * Handles operations related to projects.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Projects {
    constructor(base) {
        this.base = base;
    }
    /**
     * Create a new project
     *
     * @example
     * ```ts
     * const project = await refuel.projects.create({
     *     project_name: "My Project",
     * });
     * ```
     */
    async create(data) {
        const params = new URLSearchParams();
        params.append("project_name", data.project_name);
        params.append("description", data.description || "");
        return this.base.request(`/projects?${params.toString()}`, {
            method: "POST",
            data,
        });
    }
    /**
     * Get a project by ID
     *
     * @example
     * ```ts
     * const project = await refuel.projects.get(projectId);
     * ```
     */
    async get(projectId) {
        return this.base.request(`/projects/${projectId}`);
    }
    /**
     * List all projects
     *
     * @example
     * ```ts
     * const projects = await refuel.projects.list();
     * ```
     */
    async list() {
        return this.base.request("/projects");
    }
    /**
     * Delete a project and all associated resources
     *
     * @example
     * ```ts
     * await refuel.projects.delete(projectId);
     * ```
     */
    async delete(projectId) {
        return this.base.request(`/projects/${projectId}`, {
            method: "DELETE",
        });
    }
}

const DEFAULT_BASE_URL = "https://cloud-api.refuel.ai";
const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_INITIAL_RETRY_TIMEOUT = 2500;
const DEFAULT_RETRY_STATUS_CODES = [202, 429, 504];

class RefuelAPIError extends Error {
    constructor(response, url = response === null || response === void 0 ? void 0 : response.url, status = response === null || response === void 0 ? void 0 : response.status) {
        super(`${(response === null || response === void 0 ? void 0 : response.statusText) || "Network error"} (${url})`);
        this.response = response;
        this.url = url;
        this.status = status;
        this.name = "RefuelAPIError";
    }
}
/** @internal */
class RefuelBase {
    constructor(accessToken, options = {}) {
        var _a, _b, _c, _d;
        this.accessToken = accessToken;
        this.baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : DEFAULT_BASE_URL;
        this.maxRetries = (_b = options.maxRetries) !== null && _b !== void 0 ? _b : DEFAULT_MAX_RETRIES;
        this.initialRetryTimeout =
            (_c = options.initialRetryTimeout) !== null && _c !== void 0 ? _c : DEFAULT_INITIAL_RETRY_TIMEOUT;
        this.retryStatusCodes =
            (_d = options.retryStatusCodes) !== null && _d !== void 0 ? _d : DEFAULT_RETRY_STATUS_CODES;
    }
    async request(endpoint, options) {
        const { method = "GET", data, maxRetries = this.maxRetries, initialRetryTimeout = this.initialRetryTimeout, retryStatusCodes = this.retryStatusCodes, } = options || {};
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
        let retries = 0;
        while (true) {
            let response = undefined;
            try {
                response = await fetch(url, {
                    method,
                    headers,
                    body,
                });
            }
            catch { }
            if (method.toUpperCase() === "GET" &&
                (!response || retryStatusCodes.includes(response.status))) {
                if (retries >= maxRetries) {
                    throw new RefuelAPIError(response, url);
                }
                // Proceed to retry logic
            }
            else if (!(response === null || response === void 0 ? void 0 : response.ok)) {
                // Non-retriable error
                throw new RefuelAPIError(response, url);
            }
            else {
                // Successful response
                const responseJSON = await response.json();
                return (responseJSON.data || responseJSON);
            }
            // Retry logic
            // Calculate exponential backoff with jitter
            const baseBackoff = initialRetryTimeout * Math.pow(2, retries);
            const jitter = Math.random() * 1000;
            const backoffTime = baseBackoff + jitter;
            // Wait for the calculated backoff time
            await new Promise((resolve) => setTimeout(resolve, backoffTime));
            retries += 1;
        }
    }
}

/**
 * Handles operations related to labeling models.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class TaskModels {
    constructor(base) {
        this.base = base;
    }
    /**
     * List all models available for a task
     *
     * @example
     * ```ts
     * const models = await refuel.taskModels.list(taskId);
     * ```
     */
    async list(taskId) {
        const response = await this.base.request(`/tasks/${taskId}/models`);
        return response.models;
    }
}

/**
 * Handles operations related to task runs.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class TaskRuns {
    constructor(base) {
        this.base = base;
    }
    /**
     * Create a task run
     *
     * @example
     * ```ts
     * const taskRun = await refuel.taskRuns.create(taskId, { datasetId });
     * ```
     */
    async create(taskId, options) {
        var _a;
        if (!(options === null || options === void 0 ? void 0 : options.datasetId) && !(options === null || options === void 0 ? void 0 : options.evalSet)) {
            throw new Error("Either datasetId or evalSet must be provided");
        }
        const params = new URLSearchParams();
        if (options === null || options === void 0 ? void 0 : options.limit) {
            params.append("limit", options.limit.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }
        if ((_a = options === null || options === void 0 ? void 0 : options.modelIds) === null || _a === void 0 ? void 0 : _a.length) {
            options.modelIds.forEach((modelId) => {
                params.append("model_ids", modelId);
            });
        }
        if (options === null || options === void 0 ? void 0 : options.datasetId) {
            params.append("dataset_id", options.datasetId);
        }
        const endpoint = (options === null || options === void 0 ? void 0 : options.evalSet)
            ? `/tasks/${taskId}/evalset/runs?${params.toString()}`
            : `/tasks/${taskId}/runs?${params.toString()}`;
        return this.base.request(endpoint, {
            method: "POST",
        });
    }
    /**
     * Cancel a task run
     *
     * @example
     * ```ts
     * await refuel.taskRuns.cancel(taskId, { datasetId });
     * ```
     */
    async cancel(taskId, options) {
        if (!options.datasetId && !options.evalSet) {
            throw new Error("Either datasetId or evalSet must be provided");
        }
        const params = new URLSearchParams();
        params.append("cancel_run", "true");
        if (options === null || options === void 0 ? void 0 : options.datasetId) {
            params.append("dataset_id", options.datasetId);
        }
        const endpoint = (options === null || options === void 0 ? void 0 : options.evalSet)
            ? `/tasks/${taskId}/evalset/runs`
            : `/tasks/${taskId}/runs?${params.toString()}`;
        return this.base.request(endpoint, {
            method: "POST",
        });
    }
    /**
     * List all task runs
     *
     * @example
     * ```ts
     * const taskRuns = await refuel.taskRuns.list(taskId);
     * ```
     */
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
        const response = await this.base.request(endpoint);
        if (Array.isArray(response)) {
            return response;
        }
        return [response];
    }
}

/**
 * Handles operations related to tasks.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Tasks {
    constructor(base) {
        this.base = base;
    }
    /**
     * Create a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.create({ task_name: "My Task", project_id: "123" });
     * ```
     */
    async create(data) {
        if (!data.task_name) {
            throw new Error("task name is required");
        }
        if (!data.project_id) {
            throw new Error("project id is required");
        }
        const params = new URLSearchParams({
            task_name: data.task_name,
            project_id: data.project_id,
        });
        return this.base.request(`/projects/${data.project_id}/tasks?${params.toString()}`, {
            method: "POST",
            data,
        });
    }
    /**
     * Get a task by ID
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.get(taskId);
     * ```
     */
    async get(taskId) {
        return this.base.request(`/tasks/${taskId}`);
    }
    /**
     * List all tasks
     *
     * @example
     * ```ts
     * const tasks = await refuel.tasks.list();
     * ```
     */
    async list(projectId) {
        const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";
        return this.base.request(endpoint);
    }
    /**
     * Update a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.update(taskId, { name: "New Name" });
     * ```
     */
    async update(taskId, data) {
        return this.base.request(`/tasks/${taskId}`, {
            method: "PATCH",
            data,
        });
    }
    /**
     * Delete a task
     *
     * @example
     * ```ts
     * await refuel.tasks.delete(taskId);
     * ```
     */
    async delete(taskId) {
        return this.base.request(`/tasks/${taskId}`, {
            method: "DELETE",
        });
    }
    /**
     * Duplicate a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.duplicate(taskId);
     * ```
     */
    async duplicate(taskId) {
        const task = await this.get(taskId);
        if (!task.id) {
            throw new Error("task id is required");
        }
        if (!task.project_id) {
            throw new Error("project id is required");
        }
        const duplicateName = `${task.task_name} (Copy)`;
        const params = new URLSearchParams({
            ref_task_id: task.id,
            project_id: task.project_id,
            task_name: duplicateName,
        });
        return this.base.request(`/projects/${task.project_id}/tasks?${params.toString()}`, {
            method: "POST",
        });
    }
    /**
     * Reset all LLM and human verified labels
     *
     * @example
     * ```ts
     * await refuel.tasks.reset(taskId);
     * ```
     */
    async reset(taskId) {
        const params = new URLSearchParams({
            clear_labels_and_feedback: "true",
        });
        return this.base.request(`/tasks/${taskId}?${params.toString()}`, {
            method: "POST",
        });
    }
    /**
     * Delete a subtask field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteSubtask(taskId, subtaskId);
     * ```
     */
    async deleteSubtask(taskId, subtaskId) {
        const subtaskIds = Array.isArray(subtaskId) ? subtaskId : [subtaskId];
        await Promise.all(subtaskIds.map((id) => this.base.request(`/tasks/${taskId}/subtasks/${id}`, {
            method: "DELETE",
        })));
    }
    /**
     * Delete an enrichment field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteEnrichment(taskId, enrichmentId);
     * ```
     */
    async deleteEnrichment(taskId, enrichmentId) {
        const enrichmentIds = Array.isArray(enrichmentId)
            ? enrichmentId
            : [enrichmentId];
        await Promise.all(enrichmentIds.map((id) => this.base.request(`/tasks/${taskId}/transforms/${id}`, {
            method: "DELETE",
        })));
    }
}

/**
 * Handles operations related to taxonomies.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Taxonomies {
    constructor(base) {
        this.base = base;
    }
    /**
     * Create a taxonomy for a task
     *
     * @example
     * ```ts
     * const taxonomy = await refuel.taxonomies.create(taskId, [
     *  { name: "Label 1" },
     *  { name: "Label 2" },
     * ]);
     * ```
     */
    async create(taskId, labels = []) {
        const data = {
            labels: Array.isArray(labels) ? labels : [labels],
        };
        return this.base.request(`/tasks/${taskId}/taxonomies`, {
            method: "POST",
            data,
        });
    }
    async get(taskId, taxonomyId) {
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}`);
    }
    /**
     * Delete a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomies.delete(taskId, taxonomyId);
     * ```
     */
    async delete(taskId, taxonomyId) {
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}`, {
            method: "DELETE",
        });
    }
    /**
     * Create a duplicate of an existing taxonomy
     *
     * @example
     * ```ts
     * const taxonomy = await refuel.taxonomies.duplicate(taskId, taxonomyId);
     * ```
     */
    async duplicate(taskId, taxonomyId) {
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}/duplicate`, {
            method: "POST",
        });
    }
}

/**
 * Handles operations related to taxonomy labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class TaxonomyLabels {
    constructor(base) {
        this.base = base;
    }
    /**
     * Add labels to a taxonomy
     *
     * @example
     * ```ts
     * const label = await refuel.taxonomyLabels.create(taskId, taxonomyId, [
     *  { name: "Label 1" },
     *  { name: "Label 2" },
     * ]);
     * ```
     */
    async create(taskId, taxonomyId, labels) {
        const data = new FormData();
        data.append("labels", JSON.stringify(Array.isArray(labels) ? labels : [labels]));
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}`, {
            method: "POST",
            data,
        });
    }
    /**
     * List all labels in a taxonomy
     *
     * @example
     * ```ts
     * const labels = await refuel.taxonomyLabels.list(taskId, taxonomyId);
     * ```
     */
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
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}?${params.toString()}`);
    }
    /**
     * Update a label in a taxonomy
     *
     * @example
     * ```ts
     * const label = await refuel.taxonomyLabels.update(taskId, taxonomyId, labelId, { name: "New Name" });
     * ```
     */
    async update(taskId, taxonomyId, labelId, data) {
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`, {
            method: "PATCH",
            data,
        });
    }
    /**
     * Delete a label from a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomyLabels.delete(taskId, taxonomyId, labelId);
     * ```
     */
    async delete(taskId, taxonomyId, labelId) {
        return this.base.request(`/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`, {
            method: "DELETE",
        });
    }
}

class Team {
    constructor(base) {
        this.base = base;
    }
    /**
     * Get the current team
     *
     * @example
     * ```ts
     * const team = await refuel.team.get();
     * ```
     */
    async get() {
        return this.base.request("/team");
    }
    /**
     * Regenerate the API key for the current team
     *
     * @example
     * ```ts
     * const apiKey = await refuel.team.regenerateApiKey();
     * ```
     */
    async regenerateApiKey() {
        const params = new URLSearchParams({ regenerate_api_key: "true" });
        await this.base.request(`/team?${params.toString()}`, {
            method: "POST",
        });
        return (await this.get()).refuel_api_key;
    }
    /**
     * Sign a URL
     *
     * @example
     * ```ts
     * const signedUrl = await refuel.team.signUrl("https://example.com");
     * ```
     */
    async signUrl(url) {
        const params = new URLSearchParams();
        params.append("url", url);
        return this.base.request(`/team/sign-url?${params.toString()}`);
    }
}

class TeamModels {
    constructor(base) {
        this.base = base;
    }
    async list() {
        return this.base.request("/models");
    }
}

class Usage {
    constructor(base) {
        this.base = base;
    }
    /**
     * Get usage data for a specific time period
     *
     * @example
     * ```ts
     * const usage = await refuel.usage.get("2024-01-01", "2024-01-31");
     * ```
     */
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
        return this.base.request(`/usage?${params.toString()}`);
    }
}

/**
 * Handles operations related to users.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
class Users {
    constructor(base) {
        this.base = base;
    }
    /**
     * Invite users to your team
     *
     * @example
     * ```ts
     * const response = await refuel.users.create(["user1@example.com", "user2@example.com"]);
     * ```
     */
    async create(email) {
        const data = Array.isArray(email) ? email : [email];
        return this.base.request("/users", {
            method: "POST",
            data,
        });
    }
    /**
     * Get a user by ID
     *
     * @example
     * ```ts
     * const user = await refuel.users.get(userId);
     * ```
     */
    async get(userId) {
        return this.base.request(`/users/${userId}`);
    }
    /**
     * List all users in your team
     *
     * @example
     * ```ts
     * const users = await refuel.users.list();
     * ```
     */
    async list() {
        return this.base.request("/users");
    }
}

const isLabeledDatasetItem = (item) => {
    return typeof item === "object" && item !== null && "labels" in item;
};
const isDatasetLabeled = (dataset) => {
    return (typeof dataset === "object" &&
        dataset !== null &&
        "items" in dataset &&
        Array.isArray(dataset === null || dataset === void 0 ? void 0 : dataset.items) &&
        isLabeledDatasetItem(dataset.items[0]));
};
const isTelemetry = (telemetry) => {
    return (typeof telemetry === "object" &&
        telemetry !== null &&
        "telemetry_type" in telemetry &&
        "telemetry_value" in telemetry);
};

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
class Refuel {
    constructor(options) {
        let apiKey = typeof options === "string" ? options : options === null || options === void 0 ? void 0 : options.apiKey;
        if (!apiKey && typeof process !== "undefined") {
            apiKey = process.env.REFUEL_API_KEY;
        }
        if (!apiKey) {
            throw new Error("Refuel API key is required");
        }
        this.base = new RefuelBase(apiKey, typeof options === "string" ? undefined : options);
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

export { AvailabilityStatus, CalibrationModel, CalibrationStatus, DatasetColumnType, EvalsetSamplingStrategy, FeatureFlagValues, FilterFieldCategory, FilterOperator, FinetuningRunStatus, LabelSource, MetricFormat, Refuel, SampleColumnType, SamplingStrategy, SchemaMode, TaskType, TransformType, UserState, isDatasetLabeled, isLabeledDatasetItem, isTelemetry };
//# sourceMappingURL=index.mjs.map
