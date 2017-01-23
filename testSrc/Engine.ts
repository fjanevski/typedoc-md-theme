/**
 * Created by palebluedot on 1/12/17.
 */

import {Thing} from "./Thing";

export class Engine extends Thing {

	private _power:number;

	constructor() {
		super();
		this._power = 200;
	}

	/**
	 * Get the engine's horse power.
	 * @returns {string} The engine's horse power.
	 */
	public getPower():number {
		return this._power;
	}
}