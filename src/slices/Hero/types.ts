import { SliceComponentProps } from "@prismicio/react";

import {
	PrismicHeroDefaultFragment,
	PrismicHeroWithBackgroundFragment,
} from "../../types.generated";

export type HeroProps = SliceComponentProps<
	{ slice_type: "hero" } & (
		| ({ variation: "default" } & PrismicHeroDefaultFragment)
		| ({ variation: "withBackground" } & PrismicHeroWithBackgroundFragment)
	)
>;
