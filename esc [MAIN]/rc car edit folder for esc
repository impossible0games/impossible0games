class RCCarData {
    /**
     * Constructor for the RCCarData class.
     * Initializes the properties to store speed, torque, gear ratio, and voltage.
     */
    constructor() {
        /** @private {Array<number>} */
        this.speedData = [];

        /** @private {Array<number>} */
        this.torqueData = [];

        /** @private {Array<number>} */
        this.gearRatioData = [];

        /** @private {Array<number>} */
        this.voltageData = [];
    }

    /**
     * Collects speed data for the RC car.
     *
     * @param {number} speed - The speed value to be added.
     * @throws {Error} Throws an error if the speed is negative.
     */
    collectSpeed(speed) {
        if (speed < 0) {
            throw new Error("Speed cannot be negative.");
        }
        this.speedData.push(speed);
    }

    /**
     * Collects torque data for the RC car.
     *
     * @param {number} torque - The torque value to be added.
     * @throws {Error} Throws an error if the torque is negative.
     */
    collectTorque(torque) {
        if (torque < 0) {
            throw new Error("Torque cannot be negative.");
        }
        this.torqueData.push(torque);
    }

    /**
     * Collects gear ratio data for the RC car.
     *
     * @param {number} gearRatio - The gear ratio value to be added.
     * @throws {Error} Throws an error if the gear ratio is negative.
     */
    collectGearRatio(gearRatio) {
        if (gearRatio < 0) {
            throw new Error("Gear ratio cannot be negative.");
        }
        this.gearRatioData.push(gearRatio);
    }

    /**
     * Collects voltage data for the RC car.
     *
     * @param {number} voltage - The voltage value to be added.
     * @throws {Error} Throws an error if the voltage is negative.
     */
    collectVoltage(voltage) {
        if (voltage < 0) {
            throw new Error("Voltage cannot be negative.");
        }
        this.voltageData.push(voltage);
    }

    /**
     * Retrieves all collected speed data.
     *
     * @returns {Array<number>} An array of collected speed data.
     */
    getSpeedData() {
        return this.speedData;
    }

    /**
     * Retrieves all collected torque data.
     *
     * @returns {Array<number>} An array of collected torque data.
     */
    getTorqueData() {
        return this.torqueData;
    }

    /**
     * Retrieves all collected gear ratio data.
     *
     * @returns {Array<number>} An array of collected gear ratio data.
     */
    getGearRatioData() {
        return this.gearRatioData;
    }

    /**
     * Retrieves all collected voltage data.
     *
     * @returns {Array<number>} An array of collected voltage data.
     */
    getVoltageData() {
        return this.voltageData;
    }
}

// Example Usage of RCCarData

// Create an instance of RCCarData for the Sandy Land RC
const sandyLandRC = new RCCarData();

// Collecting data
sandyLandRC.collectSpeed(25);
sandyLandRC.collectTorque(15);
sandyLandRC.collectGearRatio(3.5);
sandyLandRC.collectVoltage(7.4);

// Retrieving and displaying collected data
console.log("Speed Data: ", sandyLandRC.getSpeedData());
console.log("Torque Data: ", sandyLandRC.getTorqueData());
console.log("Gear Ratio Data: ", sandyLandRC.getGearRatioData());
console.log("Voltage Data: ", sandyLandRC.getVoltageData());