export interface ApplicationRequestBody {
    project_id: string;
    task_id: string;
}

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
    task_id: string;
    task_name: string;
    task_updated_at: string | null;
    updated_at: string;
}

export interface ApplicationLabel {
    label: string[];
    confidence: number;
    raw_confidence: number;
}

export interface ApplicationOutput {
    refuel_uuid: string;
    refuel_api_timestamp: string;
    refuel_fields: Record<string, ApplicationLabel>;
    usage: Record<string, unknown>;
}

export interface ApplicationResponse {
    application_id: string;
    application_name: string;
    refuel_output: ApplicationOutput[];
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

export enum LabelSource {
    LLM = "LLM",
    HUMAN = "HUMAN",
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

export interface DatasetItem {
    id: string;
    fields: Record<string, unknown> | null;
    labels: Label[] | null;
    telemetry: Telemetry[] | null;
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

export enum DatasetColumnType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    IMAGE_URL = "image_url",
    PDF_URL = "pdf_url",
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

export interface Dataset {
    id: string;
    column_metadata: ColumnMetadata | null;
    created_at: string;
    dataset_name: string;
    dataset_schema: DatasetSchema | null;
    ingest_status: string | null;
    items?: DatasetItem[];
    response_count: number;
    source: string | null;
    total_count: number;
}

export enum FilterFieldCategory {
    LABEL = "label",
    METADATA = "metadata",
    SIMILAR = "similar",
}

export enum FilterOperator {
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
    SIMILAR = "SIMILAR",
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

export enum SchemaMode {
    AUTO = "auto",
    MANUAL = "manual",
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

export enum TransformType {
    WEB_SEARCH = "web_search",
    MAP_SEARCH = "map_search",
    WEBPAGE_TRANSFORM = "webpage_transform",
    OCR = "ocr",
    CUSTOM_API = "custom_api",
}

export interface Transform
    extends Pick<
        Subtask,
        "id" | "name" | "guidelines" | "input_columns" | "order"
    > {
    type: TransformType;
    output_columns: string[] | null;
    params: Record<string, unknown>;
}

export enum TaskType {
    TASK_CHAIN = "task_chain",
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

export type UsageMetricKey =
    | "volume"
    | "input_tokens"
    | "output_tokens"
    | "error_4xx"
    | "error_5xx"
    | "latency"
    | "volume_web_search";

export type UsageData = {
    [key in UsageMetricKey]: UsageMetric[];
};

export enum FeatureFlagValues {
    ENABLED = "enabled",
    DISABLED = "disabled",
}

export interface RefuelTeam {
    created_at: string;
    feature_flags: Record<string, FeatureFlagValues> | null;
    name: string;
    refuel_api_key: string;
}

export interface User {
    id: string;
    created_at: string;
    team: string;
    email: string;
    name?: string;
    picture: string | null;
    permissions: string[];
    access_token: string | null;
    state: string | null;
}

export interface InviteUsersResponse {
    failed: string[];
    success: string[];
}
