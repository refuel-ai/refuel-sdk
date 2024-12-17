import { RefuelBase } from "../RefuelBase";
import { Calibration, CalibrationStatus } from "../types";

/**
 * Handles operations related to confidence calibrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Calibrations {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
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
    async create(taskId: string): Promise<Calibration> {
        return this.base.request<Calibration>(`/tasks/${taskId}/calibrations`, {
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
    async get(taskId: string, calibrationId: string): Promise<Calibration> {
        return this.base.request<Calibration>(
            `/tasks/${taskId}/calibrations/${calibrationId}`
        );
    }

    /**
     * List all confidence calibrations for a task
     *
     * @example
     * ```ts
     * const calibrations = await refuel.calibrations.list(taskId);
     * ```
     */
    async list(taskId: string): Promise<Calibration[]> {
        return this.base.request<Calibration[]>(
            `/tasks/${taskId}/calibrations`
        );
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
    async update(
        taskId: string,
        calibrationId: string,
        data: Partial<Pick<Calibration, "status">>
    ): Promise<Calibration> {
        return this.base.request<Calibration, Partial<Calibration>>(
            `/tasks/${taskId}/calibrations/${calibrationId}`,
            {
                method: "PATCH",
                data,
            }
        );
    }
}
