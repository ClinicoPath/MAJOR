
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"ai","title":"Cronbach's alpha","suggested":["continuous"],"permitted":["numeric"],"type":"Variable"},{"name":"mi","title":"Number of items","suggested":["continuous"],"permitted":["numeric"],"type":"Variable"},{"name":"ni","title":"Sample size","suggested":["continuous"],"permitted":["numeric"],"type":"Variable"},{"name":"slab","title":"Study label","suggested":["nominal"],"type":"Variable"},{"name":"moderatorcor","title":"Moderator","suggested":["continuous"],"permitted":["numeric"],"type":"Variable"},{"name":"methodmetacor","title":"Model estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"cormeasure","title":"Model measures","type":"List","options":[{"name":"ARAW","title":"Raw alpha values"},{"name":"AHW","title":"Transformed alpha values (Hakstian & Whalen, 1976)"},{"name":"ABT","title":"Transformed alpha values (Bonett, 2002)"},{"name":"ROM","title":"Log transformed ratio of means"}],"default":"ARAW"},{"name":"moderatorType","title":"Moderator type","type":"List","options":[{"name":"NON","title":"No Moderator"},{"name":"CAT","title":"Categorical moderator"},{"name":"CON","title":"Continuous moderator"}],"default":"NON"},{"name":"level","type":"Number","title":"Confidence interval level","min":50,"max":99.9,"default":95},{"name":"showModelFit","title":"Display model fit","type":"Bool","default":false},{"name":"addcred","title":"Prediction interval","type":"Bool","default":false},{"name":"addfit","title":"Summary estimate","type":"Bool","default":true},{"name":"showweights","title":"Model fitting weights","type":"Bool","default":false},{"name":"steps","title":"x-axis steps","type":"Number","min":1,"max":999,"default":5},{"name":"xAxisTitle","title":"x-axis title","type":"String"},{"name":"pchForest","title":"Effect size points","type":"List","options":[{"name":"16","title":"Black Circle"},{"name":"18","title":"Black Diamond"},{"name":"15","title":"Black Square"},{"name":"17","title":"Black Triangle"},{"name":"1","title":"Empty Circle"},{"name":"5","title":"Empty Diamond"},{"name":"0","title":"Empty Square"},{"name":"2","title":"Empty Triangle"},{"name":"8","title":"Star"}],"default":"15"},{"name":"forestOrder","title":"Study order","type":"List","options":[{"name":"obs","title":"Observed effect sizes"},{"name":"fit","title":"Fitted values"},{"name":"prec","title":"Sampling variances"},{"name":"resid","title":"Residuals"},{"name":"abs.resid","title":"Absolute residuals"}],"default":"fit"},{"name":"fsntype","title":"Fail-Safe N method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"},{"name":"yaxis","title":"Funnel plot y-axis options","type":"List","options":[{"name":"sei","title":"Standard error"},{"name":"vi","title":"Sampling variance"},{"name":"ni","title":"Sample size"},{"name":"sqrtni","title":"Square root sample size"},{"name":"lni","title":"Log of the sample size"}],"default":"sei"},{"name":"yaxisInv","title":"Funnel plot y-axis inverse","type":"Bool","default":false},{"name":"enhanceFunnel","title":"Contour-Enhanced","type":"Bool","default":false},{"name":"showInfPlot","title":"Show Plot of Influence Diagnostics","type":"Bool","default":false}];

const view = function() {
    
    

    View.extend({
        jus: "2.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Reliability Generalization",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Cronbach's Alpha",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "ai",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Number of Items",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "mi",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "ni",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Study Label",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "slab",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Moderator (optional)",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "moderatorcor",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Model Options",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "methodmetacor",
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "cormeasure",
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "moderatorType",
							useSingleCell: true
						},
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "level",
							format: FormatDef.number,
							useSingleCell: true,
							suffix: "%"
						},
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "showModelFit",
							useSingleCell: true
						},
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "showInfPlot",
							useSingleCell: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Plots",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "Forest Plot",
					controls: [
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "addcred"
						},
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "addfit"
						},
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "showweights"
						},
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							label: "X-Axis Steps",
							name: "steps",
							format: FormatDef.number,
							stretchFactor: 2,
							useSingleCell: true
						},
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							label: "X-Axis Title",
							name: "xAxisTitle",
							format: FormatDef.string,
							stretchFactor: 2,
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "pchForest",
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "forestOrder",
							useSingleCell: true
						}
					]
				},
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "Funnel Plot",
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "none",
							style: "inline",
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "yaxis",
									label: "Y-Axis"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "yaxisInv",
									label: "Inverse",
									verticalAlignment: "center",
									enable: "(!yaxis:lni)"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "enhanceFunnel",
									label: "Contour-Enhanced",
									verticalAlignment: "center",
									enable: "(yaxis:sei || yaxis:vi)"
								}
							]
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Publication Bias",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "fsntype"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
