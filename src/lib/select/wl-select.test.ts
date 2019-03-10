import { createContainer, removeContainer, waitForElements } from "../../test/testing-helpers";
import "../select";
import { WlSelect } from "./wl-select";

describe("wl-select", () => {
	const {expect} = chai;
	let $select: WlSelect;
	let $container: HTMLElement;

	before(() => {
		$container = createContainer();
	});
	beforeEach(async () => {
		$container.innerHTML = `
			<wl-select placeholder="Select something">
				<option value="" disabled selected>Select something</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
			</wl-select>
		`;

		await waitForElements(["wl-select"]);
		$select = $container.querySelector<WlSelect>("wl-select")!;
	});
	after(() => removeContainer($container));

	it("should have a select role", () => {
		expect($select.getAttribute("role")).to.equal("select");
	});
});
