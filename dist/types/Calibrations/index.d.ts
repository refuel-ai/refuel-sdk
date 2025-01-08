import { RefuelBase } from "../RefuelBase";
import { Calibration } from "../types";
/**
 * Handles operations related to confidence calibrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Calibrations {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Calibrate the confidence of a task
     *
     * @example
     * ```ts
     * const calibration = await refuel.calibrations.create(taskId);
     * ```
     */
    create(taskId: string): Promise<Calibration>;
    /**
     * Get a confidence calibration by ID
     *
     * @example
     * ```ts
     * const task = await refuel.calibrations.get(taskId, calibrationId);
     * ```
     */
    get(taskId: string, calibrationId: string): Promise<Calibration>;
    /**
     * List all confidence calibrations for a task
     *
     * @example
     * ```ts
     * const calibrations = await refuel.calibrations.list(taskId);
     * ```
     */
    list(taskId: string): Promise<Calibration[]>;
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
    update(taskId: string, calibrationId: string, data: Partial<Pick<Calibration, "status">>): Promise<Calibration>;
}
