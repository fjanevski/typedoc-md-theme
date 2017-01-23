/**
 * Created by palebluedot on 1/12/17.
 */

import {Thing} from "./Thing";
import {Engine} from "./Engine";

export class Vehicle extends Thing {

	private _engine:Engine;

	constructor() {
		super();
		this._engine = new Engine();
	}

	/**
	 * Get the engine's horse power.
	 * @returns {string} The engine's horse power.
	 */
	public getEnginePower():number {
		return this._engine.getPower();
	}
}