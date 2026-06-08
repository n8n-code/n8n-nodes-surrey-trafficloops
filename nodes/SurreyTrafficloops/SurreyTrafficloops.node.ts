import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class SurreyTrafficloops implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'surrey-trafficloops',
		name: 'N8nDevSurreyTrafficloops',
		icon: { light: 'file:./surrey-trafficloops.png', dark: 'file:./surrey-trafficloops.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This API provides locations of City of Surrey traffic loops and the corresponding traffic loop counts in 15 minute intervals. While the counts are broken up by 15 minute intervals, the data is curr..',
		defaults: { name: 'surrey-trafficloops' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevSurreyTrafficloopsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
