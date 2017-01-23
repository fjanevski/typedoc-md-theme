/**
 * Created by palebluedot on 1/12/17.
 */

import {Vehicle} from "./Vehicle";
import {Wheel} from "./Wheel";

/**
 * A vehicle with 4 wheels.
 */
export class Car extends Vehicle {

	/**
	 * Stores the car's wheels.
	 */
	public wheels:[Wheel];

	constructor() {
		super();

		this.wheels = [
			new Wheel(),
			new Wheel(),
			new Wheel(),
			new Wheel()
		];
	}

	/**
	 * Changes the car's current gear.
	 * @param newGear The gear number to change to.
	 * @returns {boolean} Returns true if the gear could be changed.
	 */
	public changeGear(newGear:number):boolean {
		return true;
	}

	/**
	 * Gets the car's number of wheels
	 * @returns {number} Number of wheels.
	 */
	public getNumWheels():number {
		return this.wheels.length;
	}
}