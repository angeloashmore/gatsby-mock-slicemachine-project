import * as React from "react";

import { Hero } from "./index";
import * as mocks from "./mocks";

export default {
	title: "Shared Slices/Hero",
	component: Hero,
};

export const DefaultVariation = {
	render: (args: unknown): JSX.Element => (
		<Hero
			variation={mocks.defaultVariation.variation}
			title={mocks.defaultVariation.primary.title?.text}
			description={mocks.defaultVariation.primary.description?.text}
			{...args}
		/>
	),
};

export const WithBackgroundVariation = {
	render: (args: unknown): JSX.Element => (
		<Hero
			variation={mocks.withBackgroundVariation.variation}
			title={mocks.withBackgroundVariation.primary.title?.text}
			description={mocks.withBackgroundVariation.primary.description?.text}
			backroundUrl={mocks.withBackgroundVariation.primary.backgroundImage?.url}
			{...args}
		/>
	),
};
