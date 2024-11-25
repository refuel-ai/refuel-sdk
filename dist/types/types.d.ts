export interface Application {
    id: string;
    created_at: string;
    dataset_id: string;
    description?: string;
    emoji: string | null;
    input_columns: string[];
    model_name: string;
    name: string;
    project_id: string;
    subtasks: Subtask[];
    task_id: string;
    task_name: string;
    task_updated_at: string | null;
    updated_at: string;
}
export interface ApplicationCreateOptions {
    projectId: string;
    taskId: string;
    name?: string;
}
export interface ApplicationLabel {
    label: string[];
    confidence: number;
    raw_confidence: number;
    explanation?: string;
}
export interface ApplicationOutputSync<FieldKeys extends string = string> {
    refuel_uuid: string;
    refuel_api_timestamp: string;
    refuel_fields: Record<FieldKeys, ApplicationLabel>;
    usage?: Record<string, unknown>;
}
export interface ApplicationOutputAsync {
    refuel_uuid: string;
    refuel_api_timestamp: string;
    uri: string;
}
export interface ApplicationLabelResponse<T = ApplicationOutputSync | ApplicationOutputAsync> {
    application_id: string;
    application_name: string;
    refuel_output: T[];
}
export interface ApplicationLabelOptions {
    explain?: boolean;
    async?: boolean;
    modelId?: string;
    redactPII?: boolean;
    telemetry?: boolean;
}
export interface ProjectData {
    project_name: string;
    description: string;
}
export interface Project {
    id: string;
    created_at: string;
    description?: string;
    project_name: string;
    team: string | null;
    updated_at: string;
}
export interface Telemetry {
    model_name: string;
    telemetry_type: string;
    telemetry_value: any;
}
export declare enum LabelSource {
    LLM = "LLM",
    HUMAN = "HUMAN"
}
export interface Label {
    confidence: number | null;
    created_by: string | null;
    error_msg: string | null;
    expected_label: string | null;
    explanation: string | null;
    /** related subtask_id */
    id: string;
    label: string;
    llm_label: string | null;
    multilabel_confidence: Record<string, number> | null;
    overridden: boolean;
    raw_confidence: number | null;
    raw_response: string | null;
    selected_labels: string[] | null;
    source: LabelSource;
}
export interface LabeledDatasetItem {
    fields: Record<string, unknown> | null;
    labels: Label[] | null;
    telemetry: Telemetry[] | null;
    in_evalset: boolean;
}
export interface Metadata {
    existingLabelTaskIds?: string[] | null;
    is_confidence: boolean | null;
    is_llm_label: boolean | null;
    source: "refuel" | "user" | null;
    taskId: string | null;
    type: "string" | "integer" | "boolean" | "date";
}
export interface ColumnMetadata {
    [key: string]: Metadata;
}
export declare enum DatasetColumnType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    IMAGE_URL = "image_url",
    PDF_URL = "pdf_url"
}
export interface DatasetSchemaColumn {
    name: string;
    type: DatasetColumnType;
    order: number;
}
export interface DatasetSchema {
    properties: Record<string, DatasetSchemaColumn>;
    type: string;
    $schema: string;
}
export interface DatasetFromList {
    id: string;
    dataset_name: string;
    created_at: string;
    updated_at: string | null;
    ingest_status: string | null;
    dataset_schema: DatasetSchema;
    source: string;
}
export interface Dataset {
    id: string;
    column_metadata: ColumnMetadata | null;
    name: string;
    schema: DatasetSchema | null;
    ingest_status: string | null;
    items: Record<string, string>[];
    response_count: number;
    total_count: number;
}
export declare enum FilterFieldCategory {
    LABEL = "label",
    METADATA = "metadata",
    SIMILAR = "similar"
}
export declare enum FilterOperator {
    EQUAL = "=",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    ILIKE = "ILIKE",
    IN = "IN",
    IS_NOT_VERIFIED = "IS NOT VERIFIED",
    IS_VERIFIED = "IS VERIFIED",
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<=",
    MATCHES = "~*",
    NOT_EQUAL = "<>",
    NOT_ILIKE = "NOT ILIKE",
    NOT_MATCHES = "!~*",
    NOT_NULL = "IS NOT NULL",
    NULL = "IS NULL",
    SIMILAR = "SIMILAR"
}
export type FilterOperatorOption = {
    label: string;
    value: FilterOperator;
    category: "operator";
    supportedTypes: string[];
};
export type FilterValueType = "string" | "metadata" | "label" | "list";
export interface SQLFilter {
    filter_type: FilterFieldCategory;
    field: string;
    operator: FilterOperator;
    value_type?: FilterValueType;
    value?: string | string[];
    subtask_id?: string;
}
export type SortDirection = "ascending" | "descending";
export declare enum SchemaMode {
    AUTO = "auto",
    MANUAL = "manual"
}
export interface Subtask {
    id: string;
    default_value?: string | null;
    guidelines: string | null;
    image_columns: string[] | null;
    input_columns: string[] | null;
    label_column: string | null;
    label_selection?: number | null;
    labels: string[] | null;
    name: string | null;
    order?: number | null;
    schema_guidelines_hash?: string | null;
    schema_mode?: SchemaMode | null;
    schema?: string | null;
    type: TaskType | null;
}
export declare enum TransformType {
    WEB_SEARCH = "web_search",
    MAP_SEARCH = "map_search",
    WEBPAGE_TRANSFORM = "webpage_transform",
    OCR = "ocr",
    CUSTOM_API = "custom_api"
}
export interface Transform extends Pick<Subtask, "id" | "name" | "guidelines" | "input_columns" | "order"> {
    type: TransformType;
    output_columns: string[] | null;
    params: Record<string, unknown>;
}
export declare enum TaskType {
    TASK_CHAIN = "task_chain"
}
export interface Task {
    id: string | null;
    compute_confidence: boolean;
    context: string | null;
    created_at: string | null;
    dataset_id: string | null;
    deployed: boolean | null;
    description: string | null;
    emoji: string | null;
    few_shot_num: number | null;
    mutable: boolean;
    project_id: string | null;
    runnable: boolean;
    selected_model_id: string | null;
    subtasks: Partial<Subtask>[] | null;
    task_name: string | null;
    task_type: TaskType | null;
    transforms?: Partial<Transform>[] | null;
    updated_at: string | null;
    use_beam_search: boolean | null;
    use_llm_cache: boolean | null;
}
export interface UsageMetric {
    application_id?: string;
    date: string;
    model_id?: string;
    task_id?: string;
    value: number;
}
export type UsageMetricKey = "volume" | "input_tokens" | "output_tokens" | "error_4xx" | "error_5xx" | "latency" | "volume_web_search";
export type UsageData = {
    [key in UsageMetricKey]: UsageMetric[];
};
export declare enum FeatureFlagValues {
    ENABLED = "enabled",
    DISABLED = "disabled"
}
export interface RefuelTeam {
    created_at: string;
    feature_flags: Record<string, FeatureFlagValues> | null;
    name: string;
    refuel_api_key: string;
}
export declare enum UserState {
    ACTIVE = "ACTIVE",
    INVITED = "INVITED",
    CREATED = "CREATED"
}
export interface User {
    name: string | null;
    email: string;
    team: string;
    picture: string | null;
    state: UserState;
}
export interface AuthenticatedUser extends User {
    id: string;
    api_key: string | null;
    created_at: string;
    permissions: string[];
    updated_at: string;
    access_token: string;
}
export interface InviteUsersResponse {
    failed: string[];
    success: string[];
}
export interface TaxonomyLabel {
    id: string;
    name: string;
    description: string;
    level: number | null;
    parents: string[];
}
export interface TaxonomyLabelData {
    name: string;
    description?: string | null;
}
export interface TaxonomyLabelRequestBody {
    labels: TaxonomyLabelData[];
}
export interface TaxonomyLabelsResponse {
    id: string;
    created_at: string;
    labels: TaxonomyLabel[];
    task_id: string;
    total_count: number;
    updated_at: string;
}
export type IntegrationConfig = Record<string, string | null>;
export interface Integration {
    id: string;
    name: string;
    category: string;
    description: string;
    is_connected: boolean;
    is_available: boolean;
    config: IntegrationConfig;
    logo_url: string;
}
export interface ExportDatasetOptions {
    email?: string;
    filters?: SQLFilter[];
    includeLabels?: boolean;
    includeUUID?: boolean;
    taskId?: string;
    taskRunId?: string;
}
export interface ExportDatasetResponse {
    export_id: string;
    uri: string;
}
export interface DatasetItemsOptions {
    filters?: SQLFilter[];
    maxItems?: number;
    offset?: number;
    orderBy?: string[];
}
export declare enum MetricFormat {
    NUMERIC = "numeric",
    PERCENTAGE = "percentage",
    HISTOGRAM = "histogram",
    DICT = "dict"
}
export interface MetricResult {
    name: string;
    value: any;
    type: MetricFormat;
    support: number;
    subtaskId: string;
}
export interface TaskRunMetrics {
    task: MetricResult[] | null;
    subtasks: Record<string, MetricResult[]> | null;
}
export interface EvaluationStat {
    metrics?: TaskRunMetrics | null;
    model?: string | null;
}
export interface FinetuningHyperparameters {
    adapter: string;
    learning_rate: number;
    lora_r: number;
    num_epochs: number;
}
export interface FinetuningRunStage {
    detail: string | null;
    index: number;
    stage_id: string;
    status: "NOT STARTED" | "IN PROGRESS" | "COMPLETED" | "FAILED";
}
export declare enum AvailabilityStatus {
    UNAVAILABLE = "UNAVAILABLE",
    AVAILABLE = "AVAILABLE"
}
export declare enum FinetuningRunStatus {
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
    INTERRUPTED = "INTERRUPTED"
}
export interface LabelingModel {
    id: string;
    availability_status: AvailabilityStatus;
    base_model: string;
    created_at: string | null;
    datasets: string[];
    evaluation_stats: EvaluationStat[];
    finetuning_run_status: FinetuningRunStatus | null;
    finetuning_run_timeline: FinetuningRunStage[] | null;
    hyperparameters: FinetuningHyperparameters | null;
    name: string;
    project_id: string | null;
    provider: string;
    task_id: string | null;
    training_stats: {
        training_loss: [number, number][] | null;
        evaluation_loss: [number, number][] | null;
        checkpoint_index: number[];
    } | null;
    updated_at: string | null;
}
export interface FinetunedModelCreateOptions {
    augmented_finetuning_model: string | null;
    base_model: string;
    max_training_rows?: number;
    comparison_model: string;
    datasets: string[];
    hyperparameters: {
        learning_rate_multiplier: number;
        num_epochs: number;
        lora_r?: number;
    };
    lora: boolean;
    project_id: string;
    task_id: string;
}
export interface TeamModel {
    name: string;
    provider: string;
    display_name: string;
    params: Record<string, unknown>;
}
export type TaskRunStatus = "restarted" | "not_started" | "active" | "completed" | "failed" | "preview" | "cancelled";
export interface TaskRun {
    id: string;
    project_id: string;
    task_id: string;
    task_name: string;
    model_name: string;
    dataset_id: string;
    dataset_name: string;
    status: TaskRunStatus;
    is_eval_run: boolean;
    created_at: string;
    updated_at: string;
    model_ids: string[];
}
export interface TaskRunOptions {
    datasetId?: string;
    evalSet?: boolean;
}
