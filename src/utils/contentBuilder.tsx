import '@/style/panel.css';

export interface Line {
	type:
		| 'label'
		| 'value'
		| 'field'
		| 'title'
		| 'button'
		| 'function'
		| 'line'
		| 'link'
		| 'node'
		| string;
	id?: string;
	class?: string[];
	value?: string | string[];
	link?: string | string[];
	video?: string;
	function?: any;
	node?: Node;
}

export function ContentNodeBuilder(
	content: Line[],
	container?: HTMLElement
): HTMLElement {
	const contentContainer = container || document.createElement('div');
	contentContainer.classList.add('content-box');

	content.forEach((item) => {
		let element: HTMLElement = document.createElement('div');

		switch (item.type) {
			case 'label':
			case 'value':
				element = document.createElement('div') as HTMLDivElement;
				element.textContent = item.value as string;
				if (item.type === 'label') {
					element.classList.add('bold-text');
				}

				break;
			case 'field':
				element = document.createElement('div');
				const label = document.createElement(
					'calcite-label'
				) as HTMLCalciteLabelElement;

				const value = document.createElement(
					'calcite-label'
				) as HTMLCalciteLabelElement;

				label.classList.add('bold-text');
				label.textContent = (item.value as string[])[0];
				value.textContent = (item.value as string[])[1];

				element.appendChild(label);
				element.appendChild(value);
				element.classList.add('field');
				break;
			case 'title':
				element = document.createElement('div') as HTMLDivElement;
				element.textContent = item.value as string;
				element.classList.add('large-title');
				break;
			case 'button':
				element = document.createElement('calcite-button');
				element.textContent = item.value as string;
				if (item.id) {
					element.id = item.id;
				}
				if (item.function) {
					element.addEventListener('click', item.function);
				}
				break;
			case 'function':
				if (item.function) {
					item.function(contentContainer);
				}
				return; // Skip appending as function is expected to handle its own DOM manipulation
			case 'line':
				element = document.createElement('div');
				element.classList.add('line');
				break;
			case 'link':
				element = document.createElement('a');
				element.textContent = item.value as string;
				if (item.function) {
					element.onclick = item.function;
				}
				break;
			case 'node':
				if (item.node) {
					element.appendChild(item.node);
				}
				break; // Skip further processing as node is directly appended
			case 'focus-item': {
				element = document.createElement('calcite-label');
				(element as HTMLCalciteLabelElement).layout = 'inline';
				const icon = document.createElement('calcite-icon');
				icon.id = item.id as string;
				icon.icon = 'data-clock-chart';
				icon.scale = 's';
				if (item.function) {
					icon.addEventListener('click', item.function);
				}
				element.appendChild(icon);
				break;
			}
			case 'tooltip': {
				element = document.createElement('calcite-tooltip');
				if (item.id)
					(element as HTMLCalciteTooltipElement).referenceElement = item.id;

				const message = document.createElement('span');
				message.textContent = item.value as string;
				element.appendChild(message);
				break;
			}
			case 'icon-label': {
				element = document.createElement('div');
				const labelName = document.createElement('div') as HTMLImageElement;
				labelName.classList.add('font-semibold', 'text-sm');
				labelName.innerText = (item.value as string[])[0];
				const status = document.createElement('div') as HTMLImageElement;
				status.innerText = (item.value as string[])[1];
				status.classList.add('font-medium', 'text-xs');
				element.appendChild(labelName);
				element.appendChild(status);
				break;
			}

			default:
				break; // Skip unknown types
		}

		// Common class assignment and appending for elements
		if (item.class && element) {
			element.classList.add(...item.class);
		}
		if (element && element !== contentContainer) {
			contentContainer.appendChild(element);
		}
	});

	return contentContainer;
}
