/**
 * Created by palebluedot on 1/12/17.
 */

import {Thing} from "./Thing";

export class Wheel extends Thing {

	public radius:number;

	constructor() {
		super();
		this.radius = 15;
	}
}