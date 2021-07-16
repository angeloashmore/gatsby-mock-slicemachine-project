import * as React from "react";
import { graphql } from "gatsby";
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

export const Hero = ({ slice }: HeroProps): JSX.Element => {
	return <div>Hero - {slice.variation}</div>;
};

export const fragment = graphql`
	fragment PrismicHero on PrismicPageDataBodySlicesType {
		...PrismicHeroDefault
		...PrismicHeroWithBackground
	}
	fragment PrismicHeroDefault on PrismicHeroDefault {
		primary {
			title {
				text
			}
			description {
				text
			}
		}
	}
	fragment PrismicHeroWithBackground on PrismicHeroWithBackground {
		primary {
			title {
				text
			}
			description {
				text
			}
			backgroundImage {
				url
			}
		}
	}
`;
