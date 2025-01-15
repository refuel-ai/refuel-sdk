export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Options for a request to the Refuel API
 */
export interface RequestOptions<T> {
    /**
     * HTTP method to use
     *
     * @default "GET"
     */
    method?: string;

    /** Data to send in the body of the request */
    data?: T;

    /** Number of retries attempted */
    retries?: number;

    /** Initial retry timeout (in milliseconds) */
    initialRetryTimeout?: number;

    /** Maximum number of retries */
    maxRetries?: number;

    /** Status codes to retry on */
    retryStatusCodes?: number[];
}

/**
 * Options to initialize a Refuel client
 */
export type RefuelOptions = Pick<
    RequestOptions<unknown>,
    "retries" | "initialRetryTimeout" | "maxRetries" | "retryStatusCodes"
> & {
    /** Origin to send requests to */
    baseUrl?: string;

    /**
     * Refuel API key
     *
     * @see https://app.refuel.ai/settings
     */
    apiKey?: string;
};

/**
 * Application for labeling items
 */
export interface Application {
    /** Application ID */
    id: string;

    /** Date the application was created */
    created_at: string;

    /** Dataset ID the application is associated with */
    dataset_id: string;

    /** Application description */
    description?: string;

    /** Emoji for the application that can be used as the icon in the UI */
    emoji: string | null;

    /** Input columns for the application */
    input_columns: string[];

    /** Model name for the application */
    model_name: string;

    /** Application name */
    name: string;

    /** Project ID the application is associated with */
    project_id: string;

    /** Subtasks for the application */
    subtasks: Subtask[];

    /** Task ID the application is associated with */
    task_id: string;

    /** Name of the task the application is associated with */
    task_name: string;

    /** Date the related task was last updated */
    task_updated_at: string | null;

    /** Date the application was last updated */
    updated_at: string;
}

/**
 * Options to create an application
 */
export interface ApplicationCreateOptions {
    /** Project ID to deploy the application to */
    projectId: string;

    /** Task ID to deploy as an application */
    taskId: string;

    /** Application name */
    name?: string;
}

/**
 * Label for an item labeled by an application
 */
export interface ApplicationLabel {
    /** Label value */
    label: string[];

    /** Confidence score */
    confidence: number;

    /** Uncalibrated confidence score */
    raw_confidence: number;

    /** Explanation of the labeling decision */
    explanation?: string;
}

/**
 * Output of a synchronous application request
 */
export interface ApplicationOutputSync<FieldKeys extends string = string> {
    /** Refuel UUID for the output */
    refuel_uuid: string;

    /** Timestamp of the output */
    refuel_api_timestamp: string;

    /** Fields and their labels */
    refuel_fields: Record<FieldKeys, ApplicationLabel>;

    /** Telemetry metrics, such as how many tokens were used */
    usage?: Record<string, unknown>;
}

/**
 * Output of an asynchronous application request
 */
export interface ApplicationOutputAsync {
    /** Refuel UUID for the output */
    refuel_uuid: string;

    /** Timestamp of the output */
    refuel_api_timestamp: string;

    /** URI to the output value */
    uri: string;
}

/**
 * Response from an application request
 */
export interface ApplicationLabelResponse<
    T = ApplicationOutputSync | ApplicationOutputAsync
> {
    /** Application ID */
    application_id: string;

    /** Application name */
    application_name: string;

    /** Output of the application */
    refuel_output: T[];
}

/**
 * Options for an application request
 */
export interface ApplicationLabelOptions {
    /** Include an explanation of the labeling decision in the response */
    explain?: boolean;

    /** Process labels asynchronously */
    async?: boolean;

    /** Model to use */
    modelId?: string;

    /** Redact personally identifiable information */
    redactPII?: boolean;
}

/**
 * Data to create a project
 */
export interface ProjectData {
    /** Project name */
    project_name: string;

    /** Project description */
    description?: string;
}

/**
 * Project for your team
 */
export interface Project {
    /** Project ID */
    id: string;

    /** Date the project was created */
    created_at: string;

    /** Project description */
    description?: string;

    /** Project name */
    project_name: string;

    /** Team the project is associated with */
    team: string | null;

    /** Date the project was last updated */
    updated_at: string;
}

export interface Telemetry {
    /** Model name */
    model_name: string;

    /** Type of telemetry (e.g. "input_tokens") */
    telemetry_type: string;

    /** Value of the telemetry (e.g. 100) */
    telemetry_value: unknown;
}

/**
 * The source of a label value
 */
export enum LabelSource {
    /** Label from an LLM */
    LLM = "LLM",

    /** Label from a human */
    HUMAN = "HUMAN",
}

/**
 * Label for an item
 */
export interface DatasetItemLabel {
    /** Confidence score */
    confidence: number | null;

    /** User who created the label */
    created_by: string | null;

    /** Error message if the label creation failed */
    error_msg: string | null;

    /** Expected label (either from ground truth in dataset or human verified value) */
    expected_label: string | null;

    /** An explanation of the labeling decision */
    explanation: string | null;

    /** Related subtask ID */
    id: string;

    /** Label value */
    label: string;

    /** Original label from the LLM */
    llm_label: string | null;

    /** Multilabel confidence */
    multilabel_confidence: Record<string, number> | null;

    /** Whether the label was overridden */
    overridden: boolean;

    /** Uncalibrated confidence score */
    raw_confidence: number | null;

    /** Raw response from the LLM */
    raw_response: string | null;

    /** List of labels the LLM selected from */
    selected_labels: string[] | null;

    /** The source of the label */
    source: LabelSource;
}

/**
 * Data to update a label
 */
export type DatasetItemLabelUpdateData =
    | {
          label: string | number | boolean;
          explanation?: string | null;
      }
    | {
          label?: string | number | boolean | null;
          explanation: string;
      };

/**
 * Data to update labels for an item
 */
export interface DatasetItemLabelsUpdate {
    [subtaskId: string]: DatasetItemLabelUpdateData;
}

/**
 * Labels for an item
 */
export interface DatasetItemLabels {
    [subtaskId: string]: DatasetItemLabel;
}

/**
 * Item in a dataset
 */
export interface LabeledDatasetItem {
    /** Fields and their values */
    fields: Record<string, unknown> | null;

    /** Labels for the item */
    labels: DatasetItemLabels | null;

    /** Telemetry for the item (e.g. how many tokens were used) */
    telemetry: Telemetry[] | null;

    /** Whether the item is in the eval set */
    in_evalset: boolean;
}

/**
 * Metadata for a column
 */
export interface Metadata {
    /** Existing label task IDs */
    existingLabelTaskIds?: string[] | null;

    /** Whether the column is a confidence score */
    is_confidence: boolean | null;

    /** Whether the column is an LLM label */
    is_llm_label: boolean | null;

    /** Source of the column value */
    source: "refuel" | "user" | null;

    /** Task ID */
    taskId: string | null;

    /** Type of the column value */
    type: "string" | "integer" | "boolean" | "date";
}

/**
 * Metadata for columns in a dataset
 */
export interface ColumnMetadata {
    [key: string]: Metadata;
}

/**
 * The type of a column value
 */
export enum DatasetColumnType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    IMAGE = "image",
    PDF = "pdf",
}

/**
 * A column in the dataset schema
 */
export interface DatasetSchemaColumn {
    /** Column name */
    name: string;

    /** Column type */
    type: DatasetColumnType;

    /** Order of the column */
    order: number;

    primary_key?: boolean;

    timestamp?: boolean;
}

/**
 * The schema for a dataset
 */
export interface DatasetSchema {
    /** Properties in the schema */
    properties: Record<string, DatasetSchemaColumn>;

    /** Type of the schema */
    type: string;

    /** The schema URI */
    $schema: string;
}

export enum DatasetIngestStatus {
    FAILED = "failed",
    IN_PROGRESS = "in_progress",
    SUCCESS = "success",
}

export interface DatasetFromList {
    /** Dataset ID */
    id: string;

    /** Dataset name */
    dataset_name: string;

    /** Date the dataset was created */
    created_at: string;

    /** Date the dataset was last updated */
    updated_at: string | null;

    /** Ingest status */
    ingest_status: DatasetIngestStatus | null;

    /** Dataset schema */
    dataset_schema: DatasetSchema;

    /** Source of the dataset */
    source: string;

    /** Project IDs this dataset is associated with */
    projects: string[] | null;
}

export interface Dataset {
    /** Dataset ID */
    id: string;

    /** Metadata for the columns */
    column_metadata: ColumnMetadata | null;

    /** Dataset name */
    name: string;

    /** Dataset schema */
    schema: DatasetSchema | null;

    /** Ingest status */
    ingest_status: DatasetIngestStatus | null;

    /** Number of items included in the response */
    response_count: number;

    /** Total number of items in the dataset */
    total_count: number;

    /** Project IDs this dataset is associated with */
    project_ids: string[] | null;

    /** Tasks that will be scheduled to run on new items in the dataset */
    scheduled_ids: string[] | null;
}

export interface DatasetUnlabeled extends Dataset {
    items: Record<string, unknown>[];
}

export interface DatasetLabeled extends Dataset {
    items: LabeledDatasetItem[];
}

/**
 * The category of a filter field
 */
export enum FilterFieldCategory {
    /** Filter on a label */
    LABEL = "label",

    /** Filter on metadata */
    METADATA = "metadata",
}

/**
 * The operator to use for a filter
 */
export enum FilterOperator {
    /** Equal to */
    EQUAL = "=",

    /** Greater than */
    GREATER_THAN = ">",

    /** Greater than or equal to */
    GREATER_THAN_OR_EQUAL = ">=",

    /** ILIKE */
    ILIKE = "ILIKE",

    /** In a list */
    IN = "IN",

    /** Is not verified */
    IS_NOT_VERIFIED = "IS NOT VERIFIED",

    /** Is verified */
    IS_VERIFIED = "IS VERIFIED",

    /** Less than */
    LESS_THAN = "<",

    /** Less than or equal to */
    LESS_THAN_OR_EQUAL = "<=",

    /** Matches */
    MATCHES = "~*",

    /** Not equal to */
    NOT_EQUAL = "<>",

    /** Not ILIKE */
    NOT_ILIKE = "NOT ILIKE",

    /** Not matches */
    NOT_MATCHES = "!~*",

    /** Not null */
    NOT_NULL = "IS NOT NULL",

    /** Null */
    NULL = "IS NULL",
}

/**
 * An operator option
 */
export type FilterOperatorOption = {
    /** Label for the operator */
    label: string;

    /** Value of the operator */
    value: FilterOperator;

    /** Category of the operator */
    category: "operator";

    /** Types supported by the operator */
    supportedTypes: string[];
};

/**
 * The type of a filter value
 */
export type FilterValueType = "string" | "metadata" | "label" | "list";

/**
 * A filter to apply to a dataset or task run
 */
export interface SQLFilter {
    /** Filter type */
    filter_type: FilterFieldCategory;

    /** Field to filter on */
    field: string;

    /** Operator to use */
    operator: FilterOperator;

    /** Value type */
    value_type?: FilterValueType;

    /** Value to filter on */
    value?: string | string[];

    /** Subtask ID */
    subtask_id?: string;
}

export type SortDirection = "ascending" | "descending";

/**
 * The mode to used to generate the schema for a subtask
 */
export enum SchemaMode {
    /** Automatically generate the schema from the guidelines */
    AUTO = "auto",

    /** Manually specify the schema */
    MANUAL = "manual",
}

export interface Subtask {
    /** Subtask ID */
    id: string;

    /** Default value */
    default_value?: string | null;

    /** Guidelines */
    guidelines: string | null;

    /** Columns with a URL to an image */
    image_columns: string[] | null;

    /** Input columns */
    input_columns: string[] | null;

    /** Ground truth column */
    label_column: string | null;

    /** Number of labels to send to the LLM to select from */
    label_selection?: number | null;

    /** Labels */
    labels: string[] | null;

    /** Subtask name */
    name: string | null;

    /** Order of the subtask */
    order?: number | null;

    /** Hash of the guidelines used to generate the schema */
    schema_guidelines_hash?: string | null;

    /** Schema mode */
    schema_mode?: SchemaMode | null;

    /** JSON Schema the LLM output must conform to
     * @see {@link https://platform.openai.com/docs/guides/structured-outputs#supported-schemas}
     */
    schema?: string | null;

    /** Subtask type */
    type: TaskType | null;

    /** Related taxonomy ID */
    taxonomy_id?: string | null;
}

/**
 * The type of enrichment
 */
export enum TransformType {
    /** Search the web for information relevant to the input */
    WEB_SEARCH = "web_search",

    /** Search for a location on a map */
    MAP_SEARCH = "map_search",

    /** Transform a webpage into structured data */
    WEBPAGE_TRANSFORM = "webpage_transform",

    /** Extract text from an image or document */
    OCR = "ocr",

    /** Use a custom API to transform the data */
    CUSTOM_API = "custom_api",
}

/**
 * An enrichment that can be added to a task
 */
export interface Transform
    extends Pick<
        Subtask,
        "id" | "name" | "guidelines" | "input_columns" | "order"
    > {
    /** Type of enrichment */
    type: TransformType;

    /** Columns to output */
    output_columns: string[] | null;

    /** Parameters for the enrichment */
    params: Record<string, unknown>;
}

/**
 * The type of task
 */
export enum TaskType {
    /** Classify an item into one category */
    CLASSIFICATION = "classification",

    /** Classify an item into one or more categories */
    MULTILABEL_CLASSIFICATION = "multilabel_classification",

    /** Extract an answer from an item */
    ANSWER_EXTRACTION = "answer_extraction",

    /** Extract structured data from a document */
    DOCUMENT_EXTRACTION = "document_extraction",

    /** Extract attributes from an item */
    ATTRIBUTE_EXTRACTION = "attribute_extraction",

    /** Chain of tasks */
    TASK_CHAIN = "task_chain",
}

/**
 * Labeling task
 */
export interface Task {
    /** Task ID */
    id: string | null;

    /** Whether to compute confidence scores */
    compute_confidence: boolean;

    /** Context for the LLM to use when labeling */
    context: string | null;

    /** Date the task was created */
    created_at: string | null;

    /** Dataset ID */
    dataset_id: string | null;

    /** Whether the task is deployed as an application */
    deployed: boolean | null;

    /** Description of the task */
    description: string | null;

    /** Emoji for the task */
    emoji: string | null;

    /** Number of few-shot examples to use */
    few_shot_num: number | null;

    /** Whether the task is mutable */
    mutable: boolean;

    /** Project ID */
    project_id: string | null;

    /** Whether the task is runnable */
    runnable: boolean;

    /** Selected model ID */
    selected_model_id: string | null;

    /** Subtasks */
    subtasks: Partial<Subtask>[] | null;

    /** Task name */
    task_name: string | null;

    /** Task type */
    task_type: TaskType | null;

    /** Transforms */
    transforms?: Partial<Transform>[] | null;

    /** Date the task was last updated */
    updated_at: string | null;

    /**
     * Whether to use beam search, which tries out
     * multiple choices at each step to find the best
     * overall result
     */
    use_beam_search: boolean | null;

    /** Whether to use the LLM cache */
    use_llm_cache: boolean | null;
}

/**
 * Telemetry metric for an application or task
 */
export interface UsageMetric {
    /** Application ID */
    application_id?: string;

    /** Date the metric was recorded */
    date: string;

    /** Model ID */
    model_id?: string;

    /** Task ID */
    task_id?: string;

    /** Value of the metric */
    value: number;
}

/**
 * Key for a telemetry metric
 */
export type UsageMetricKey =
    | "volume"
    | "input_tokens"
    | "output_tokens"
    | "error_4xx"
    | "error_5xx"
    | "latency"
    | "volume_web_search";

/**
 * Data for a telemetry metric
 */
export type UsageData = {
    [key in UsageMetricKey]: UsageMetric[];
};

export enum FeatureFlagValues {
    ENABLED = "enabled",
    DISABLED = "disabled",
}

/**
 * Team for your organization
 */
export interface RefuelTeam {
    /** Date the team was created */
    created_at: string;

    /** Feature flags for the team */
    feature_flags: Record<string, FeatureFlagValues> | null;

    /** Team name */
    name: string;

    /** Refuel API key
     *
     * This can be used to authenticate requests to the Refuel API or with the Refuel SDKs
     */
    refuel_api_key: string;
}

/**
 * Possible states for a user
 */
export enum UserState {
    /** User is active */
    ACTIVE = "ACTIVE",

    /** User has been invited to the team */
    INVITED = "INVITED",

    /** User has been created but not invited */
    CREATED = "CREATED",
}

/**
 * User for your team
 */
export interface User {
    /** User name */
    name: string | null;

    /** User email */
    email: string;

    /** Team the user is associated with */
    team: string;

    /** URL to the user's picture */
    picture: string | null;

    /** User state */
    state: UserState;
}

/**
 * Logged in user
 */
export interface AuthenticatedUser extends User {
    /** User ID */
    id: string;

    /** API key */
    api_key: string | null;

    /** Date the user was created */
    created_at: string;

    /** Permissions the user has */
    permissions: string[];

    /** Date the user was last updated */
    updated_at: string;

    /** Access token used to authenticate requests */
    access_token: string;
}

/**
 * Response from inviting users to the team
 */
export interface InviteUsersResponse {
    /** Users that failed to be invited */
    failed: string[];

    /** Users that were invited */
    success: string[];
}

/**
 * A taxonomy label
 */
export interface TaxonomyLabel {
    /** Label ID */
    id: string;

    /** Label name */
    name: string;

    /** Label description */
    description: string;

    /** @alpha Label level */
    level: number | null;

    /** @alpha Parent labels */
    parents: string[];
}

/**
 * Data to create or update a taxonomy label
 */
export interface TaxonomyLabelData {
    /** Label name */
    name: string;

    /** Label description */
    description?: string | null;
}

/**
 * Request body to create or update taxonomy labels
 */
export interface TaxonomyLabelRequestBody {
    /** Labels to create or update */
    labels: TaxonomyLabelData[];
}

/**
 * Response from getting taxonomy labels
 */
export interface TaxonomyLabelsResponse {
    /** ID of the task the labels are associated with */
    id: string;

    /** Date the labels were created */
    created_at: string;

    /** Labels */
    labels: TaxonomyLabel[];

    /** ID of the task the labels are associated with */
    task_id: string;

    /** Total number of labels */
    total_count: number;

    /** Date the labels were last updated */
    updated_at: string;
}

/**
 * Configuration for an integration to an external service
 */
export type IntegrationConfig = Record<string, string | null>;

/**
 * An integration with an external service
 */
export interface Integration {
    /** Integration ID */
    id: string;

    /** Name of the external service */
    name: string;

    /** Integration category */
    category: string;

    /** Integration description */
    description: string;

    /** Whether the integration is connected */
    is_connected: boolean;

    /** Whether the integration is available */
    is_available: boolean;

    /** Integration configuration */
    config: IntegrationConfig;

    /** URL to the logo of the external service */
    logo_url: string;

    /** URL to the docs of the external service */
    docs_url: string;
}

/**
 * Options for exporting a dataset
 */
export interface ExportDatasetOptions {
    /** Email to send the export to */
    email?: string;

    /** Filters to apply to the dataset */
    filters?: SQLFilter[];

    /** Whether to include labels in the export */
    includeLabels?: boolean;

    /** Whether to include the Refuel UUID in the export */
    includeUUID?: boolean;

    /** Task ID */
    taskId?: string;

    /** Task run ID */
    taskRunId?: string;

    /** Whether this export is from a seed set */
    seedSet?: boolean;

    /** Whether this export is from an evaluation set */
    evalSet?: boolean;

    /** Dataset ID */
    datasetId?: string;
}

/**
 * Options for getting the URL of a dataset export
 */
export interface GetDatasetExportOptions {
    /** Dataset ID */
    datasetId?: string;

    /** Task ID */
    taskId?: string;

    /** Whether this export is from a seed set */
    seedSet?: boolean;

    /** Whether this export is from an evaluation set */
    evalSet?: boolean;
}

/**
 * Response from exporting a dataset
 */
export interface ExportDatasetResponse {
    /** ID of the export */
    export_id: string;

    /** URI of the export */
    uri: string;
}

/**
 * Sort order direction
 */
export type OrderDirection = "ASC" | "DESC";

/**
 * Order by options
 */
export interface OrderBy {
    /** Field to order by */
    field: string;

    /** Order direction */
    direction: OrderDirection;

    /** Order by a subtask ID */
    subtask_id?: string;
}

/**
 * Options for getting dataset items
 */
export interface ListDatasetItemsOptions {
    /** Dataset ID */
    datasetId?: string;

    /** Task ID */
    taskId?: string;

    /** Whether to get results from the seed set */
    seedSet?: boolean;

    /** Whether to get results from the evaluation set */
    evalSet?: boolean;

    /** ID of the model to use */
    modelId?: string;

    /** Filters to apply to the dataset */
    filters?: SQLFilter[];

    /** Maximum number of items to return */
    maxItems?: number;

    /** Offset to start the items at */
    offset?: number;

    /** Order by */
    orderBy?: OrderBy | OrderBy[];
}

export interface GetDatasetItemOptions {
    /** Task ID */
    taskId?: string;

    /** Model ID */
    modelId?: string;
}

/**
 * The format of a metric
 */
export enum MetricFormat {
    /** Numeric metric */
    NUMERIC = "numeric",

    /** Percentage metric */
    PERCENTAGE = "percentage",

    /** Histogram metric */
    HISTOGRAM = "histogram",

    /** Dictionary metric */
    DICT = "dict",
}

/**
 * A metric result
 */
export interface MetricResult {
    /** Metric name */
    name: string;

    /** Metric value */
    value: unknown;

    /** Metric type */
    type: MetricFormat;

    /** Support */
    support: number;

    /** Subtask ID */
    subtaskId: string;
}

/**
 * Metrics for a task run
 */
export interface TaskRunMetrics {
    /** Metrics for the overall task */
    task: MetricResult[] | null;

    /** Metrics for the subtasks */
    subtasks: Record<string, MetricResult[]> | null;
}

/**
 * Evaluation statistics for a model
 */
export interface EvaluationStat {
    /** Metrics for the task run */
    metrics?: TaskRunMetrics | null;

    /** Model ID */
    model?: string | null;
}

/**
 * Finetuning hyperparameters
 */
export interface FinetuningHyperparameters {
    adapter?: string;

    /**
     * Adjusts how fast the model learns — the higher it
     * is, the quicker it adapts but with increased risk of
     * instability
     */
    learning_rate_multiplier: number;

    /**
     * Sets how much the model adapts during finetuning —
     * the higher the rank, the more complex patterns it
     * can learn, but it also requires more training data
     * to avoid overfitting
     */
    lora_r?: 8 | 16 | 32 | 64;

    /**
     * Sets the number of times the model will go through
     * the entire training data to improve its learning
     */
    num_epochs: number;
}

/**
 * A stage in the finetuning run timeline
 */
export interface FinetuningRunStage {
    /** Stage details */
    detail: string | null;

    /** Stage index */
    index: number;

    /** Stage ID */
    stage_id: string;

    /** Stage status */
    status: "NOT STARTED" | "IN PROGRESS" | "COMPLETED" | "FAILED";
}

/**
 * The availability status of a labeling model
 */
export enum AvailabilityStatus {
    UNAVAILABLE = "UNAVAILABLE",
    AVAILABLE = "AVAILABLE",
}

/**
 * The status of a finetuning run
 */
export enum FinetuningRunStatus {
    INITIALIZATION_IN_PROGRESS = "INITIALIZATION IN PROGRESS",
    INITIALIZATION_COMPLETE = "INITIALIZATION COMPLETE",

    DATASET_PREP_NOT_STARTED = "DATASET PREPARATION NOT STARTED",
    DATASET_PREP_IN_PROGRESS = "DATASET PREPARATION IN PROGRESS",
    DATASET_PREP_COMPLETED = "DATASET PREPARATION COMPLETED",
    DATASET_PREP_FAILED = "DATASET PREPARATION FAILED",

    RESOURCE_ALLOCATION_NOT_STARTED = "RESOURCE ALLOCATION NOT STARTED",
    RESOURCE_ALLOCATION_IN_PROGRESS = "RESOURCE ALLOCATION IN PROGRESS",
    RESOURCE_ALLOCATION_COMPLETED = "RESOURCE ALLOCATION COMPLETED",
    RESOURCE_ALLOCATION_FAILED = "RESOURCE ALLOCATION FAILED",

    TRAINING_NOT_STARTED = "TRAINING NOT STARTED",
    TRAINING_IN_PROGRESS = "TRAINING IN PROGRESS",
    TRAINING_COMPLETED = "TRAINING COMPLETED",
    TRAINING_FAILED = "TRAINING FAILED",

    DEPLOY_NOT_STARTED = "DEPLOYMENT NOT STARTED",
    DEPLOY_IN_PROGRESS = "DEPLOYMENT IN PROGRESS",
    DEPLOY_COMPLETED = "DEPLOYMENT COMPLETED",
    DEPLOY_FAILED = "DEPLOYMENT FAILED",

    EVALUATION_NOT_STARTED = "EVALUATION NOT STARTED",
    EVALUATION_IN_PROGRESS = "EVALUATION IN PROGRESS",
    EVALUATION_COMPLETED = "EVALUATION COMPLETED",
    EVALUATION_FAILED = "EVALUATION FAILED",

    INTERRUPTED = "INTERRUPTED",
}

/**
 * LLM labeling model
 */
export interface LabelingModel {
    /** Labeling model ID */
    id: string;

    /** Availability status */
    availability_status: AvailabilityStatus;

    /** Generate labels with this model and include them in the training data */
    augmented_finetuning_model: string | null;

    /** Base model */
    base_model: string;

    /** Model to evaluate the finetuned model against */
    comparison_model?: string | null;

    /** Date the labeling model was created */
    created_at: string | null;

    /** Datasets the labeling model is associated with */
    datasets: string[];

    /** Evaluation statistics */
    evaluation_stats: EvaluationStat[];

    /** Finetuning run status */
    finetuning_run_status: FinetuningRunStatus | null;

    /** Finetuning run timeline */
    finetuning_run_timeline: FinetuningRunStage[] | null;

    /** Finetuning hyperparameters */
    hyperparameters: FinetuningHyperparameters | null;

    /** Whether to use LoRA finetuning */
    lora: boolean;

    /** Labeling model name */
    name: string;

    /** Project ID */
    project_id: string | null;

    /** Provider */
    provider: string;

    /** Task ID */
    task_id: string | null;

    /** Training statistics */
    training_stats: {
        /**
         * Shows how well the model is learning from
         * the training data over time, with lower
         * values indicating better performance
         */
        training_loss: [number, number][] | null;

        /**
         * Measures the model's performance on unseen
         * data to detect overfitting, ideally decreasing
         * along with training loss.
         */
        evaluation_loss: [number, number][] | null;

        /**
         * Points during training where the model's
         * progress was saved, useful for tracking
         * and correlating loss values.
         */
        checkpoint_index: number[];
    } | null;

    /** Date the labeling model was last updated */
    updated_at: string | null;
}

/**
 * Options for creating a finetuned model
 */
export type FinetunedModelCreateOptions = Pick<
    LabelingModel,
    | "augmented_finetuning_model"
    | "base_model"
    | "comparison_model"
    | "datasets"
    | "hyperparameters"
    | "lora"
    | "project_id"
    | "task_id"
>;

/**
 * LLM model available to a team
 */
export interface TeamModel {
    /** Model name */
    name: string;

    /** Model provider */
    provider: string;

    /** Model display name */
    display_name: string;

    /** Model parameters */
    params: Record<string, unknown>;
}

/**
 * The status of a task run
 */
export type TaskRunStatus =
    | "restarted"
    | "not_started"
    | "active"
    | "completed"
    | "failed"
    | "preview"
    | "cancelled";

/**
 * A task run
 */
export interface TaskRun {
    /** Task run ID */
    id: string;

    /** Project ID */
    project_id: string;

    /** Task ID */
    task_id: string;

    /** Task name */
    task_name: string;

    /** Model name */
    model_name: string;

    /** Dataset ID */
    dataset_id: string;

    /** Dataset name */
    dataset_name: string;

    /** Task run status */
    status: TaskRunStatus;

    /** Whether the task run is an evaluation run */
    is_eval_run: boolean;

    /** Date the task run was created */
    created_at: string;

    /** Date the task run was last updated */
    updated_at: string;

    /** Model(s) used to label the items in this run */
    model_ids: string[];
}

/**
 * Options for getting task runs
 */
export interface TaskRunListOptions {
    /** Dataset ID */
    datasetId?: string;

    /** Whether to get the eval set */
    evalSet?: boolean;
}

/**
 * Options for creating a task run
 */
export interface TaskRunCreateOptions {
    /** Maximum number of items to label */
    limit?: number;

    /** Whether to get the eval set */
    evalSet?: boolean;

    /** Filters to apply to the dataset */
    filters?: SQLFilter[];

    /** Model(s) used to label the items in this run */
    modelIds?: string[];

    /** Dataset ID */
    datasetId?: string;
}

/**
 * Options for canceling a task run
 */
export interface TaskRunCancelOptions {
    /** Whether this is an evaluation run */
    evalSet?: boolean;

    /** Dataset ID */
    datasetId?: string;
}

/**
 * Options for listing labels for an item
 */
export interface LabelListOptions {
    /** Override the model used for labeling */
    modelId?: string;

    /** Specify the subtask to label */
    subtaskId?: string;

    /**
     * Generate the label if it is missing
     *
     * @default false
     */
    generateMissingLabels?: boolean;

    /**
     * Generate explanations for the label
     *
     * @default false
     */
    generateMissingExplanations?: boolean;
}

/**
 * The status of a confidence calibration
 */
export enum CalibrationStatus {
    IN_PROGRESS = "IN_PROGRESS",
    DELETED = "DELETED",
    INTERRUPTED = "INTERRUPTED",
    COMPLETED = "COMPLETED",
}

/**
 * The model used for confidence calibration
 */
export enum CalibrationModel {
    LINEAR_REGRESSION = "LINEAR_REGRESSION",
}

/**
 * Confidence calibration
 */
export interface Calibration {
    /** Calibration ID */
    id: string;

    /** Calibration name */
    name: string;

    /** Project ID */
    project_id: string;

    /** Task ID */
    task_id: string;

    /** Calibration status */
    status: CalibrationStatus;

    /** Training hyperparameters */
    training_hyperparameters: string;

    /** Calibration model */
    model: CalibrationModel;

    /** Model artifacts */
    model_artifacts: Record<string, unknown>;

    /** Date the calibration was created */
    created_at: string;

    /** Date the calibration was last updated */
    updated_at: string;

    /** Team ID */
    team: string;
}

export enum SamplingStrategy {
    RANDOM = "random",
    STRATIFIED = "stratified",
    SORTED = "sorted",
}

export enum EvalsetSamplingStrategy {
    NO_SAMPLING = "no sampling",
    RANDOM = "random",
    STRATIFIED = "stratified",
    BALANCED = "balanced",
}

export enum SampleColumnType {
    LABEL = "label",
    METADATA = "metadata",
    CONFIDENCE = "confidence",
}

export interface SamplingColumn {
    column_name?: string;
    column_type: SampleColumnType;
    subtask_id?: string;
}

export interface SamplingEvent {
    sample_strategy: EvalsetSamplingStrategy;
    sample_size?: number;
    sampling_column?: SamplingColumn;
    num_buckets?: number;
    sample_size_per_group?: number;
}

export interface SampleDatasetParams {
    column?: string | null;
    filters?: string[];
    sample_name: string;
    sample_size: number;
    sample_type: SamplingStrategy;
    sort_direction?: string | null;
    dataset_id: string | null;
}
