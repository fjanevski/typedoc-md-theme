/**
 * Created by palebluedot on 1/12/17.
 */
export class Thing {

	private _id:string;

	constructor() {
		this._id = "" + new Date().getTime();
	}

	/**
	 * Get the thing's unique id.
	 * @returns {string} The thing's unique id.
	 */
	public getId():string {
		return this._id;
	}
}