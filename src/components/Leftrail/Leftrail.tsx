'use client';
import React, { useEffect } from 'react';
import {
	CalciteAction,
	CalciteActionBar,
	CalcitePanel,
	CalciteShellPanel,
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-shell-panel';

interface LeftrailButtonPanel {
	id: string;
	actionText: string;
	panelHeader: string;
	icon: string;
	container: string;
}

export const leftRailProps = [
	{
		id: 'detail',
		actionText: 'Detail',
		panelHeader: 'Detail',
		icon: 'information',
		container: 'detail-container',
	},
	{
		id: 'layer',
		actionText: 'Layers',
		panelHeader: 'Layers',
		icon: 'layers',
		container: 'layers-container',
	},
	{
		id: 'legend',
		actionText: 'Legend',
		panelHeader: 'Legend',
		icon: 'legend',
		container: 'legends-container',
	},
] as LeftrailButtonPanel[];

const Leftrail = () => {
	function panelCloseHandler(event: any) {
		const panel = event.target as HTMLCalcitePanelElement;
		const id = panel.getAttribute('data-panel-id');
		const button = document.querySelector(
			`[data-action-id=${id}]`
		) as HTMLCalciteActionElement;
		button.active = false;
	}

	function openPanelHandler(event: any) {
		const panelId = event.target.id;
		// Open the corresponding panel
		const panel = document.querySelector(
			`calcite-panel[data-panel-id="${panelId}"]`
		) as HTMLCalcitePanelElement;

		const button = document.querySelector(
			`calcite-action[data-action-id=${panelId}]`
		) as HTMLCalciteActionElement;

		if (button.active) {
			panel.hidden = !panel.hidden;
			panel.closed = !panel.closed;
			return;
		}

		// Close all panels
		const panels = document.querySelectorAll('calcite-panel');
		panels.forEach((panel) => {
			panel.hidden = true;
			panel.closed = true;
		});

		// Deselect all buttons
		const buttons = document.querySelectorAll('calcite-action');
		buttons.forEach((button) => {
			(button as HTMLCalciteActionElement).active = false;
		});

		// Select the clicked button

		button.active = true;

		if (panel.hidden && panel.closed) {
			panel.hidden = false;
			panel.closed = false;
		}
	}
	return (
		<CalciteShellPanel
			slot="panel-start"
			position="start"
			id="shell-panel-start"
			displayMode="float"
		>
			<CalciteActionBar slot="action-bar">
				<>
					{leftRailProps.map((item, index) => {
						return (
							<CalciteAction
								id={item.id}
								key={index}
								data-action-id={`${item.id}`}
								text={item.actionText}
								icon={item.icon}
								onClick={openPanelHandler}
							></CalciteAction>
						);
					})}
				</>
			</CalciteActionBar>
			<>
				{leftRailProps.map((item, index) => {
					return (
						<CalcitePanel
							key={index}
							heading={item.panelHeader}
							data-panel-id={`${item.id}`}
							hidden
							closed
							closable
							onCalcitePanelClose={panelCloseHandler}
						>
							<div className="" id={`${item.container}`}></div>
						</CalcitePanel>
					);
				})}
			</>
		</CalciteShellPanel>
	);
};

export default Leftrail;
