// This file was generated by Slice Machine. You may edit this file.

import * as React from "react";

import { CallToAction } from "./index";
import * as mocks from "./mocks";

export default {
	title: "Shared Slices/Call to Action",
	component: CallToAction,
};

export const DefaultVariation = {
	render: (args: unknown): JSX.Element => (
		<CallToAction
			slice={mocks.defaultVariation}
			slices={[mocks.defaultVariation]}
			index={0}
			context={{}}
			{...args}
		/>
	),
};

export const WithButtonVariation = {
	render: (args: unknown): JSX.Element => (
		<CallToAction
			slice={mocks.withButtonVariation}
			slices={[mocks.withButtonVariation]}
			index={0}
			context={{}}
			{...args}
		/>
	),
};
