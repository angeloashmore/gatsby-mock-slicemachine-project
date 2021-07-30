import { graphql } from "gatsby";

export const fragments = graphql`
	fragment PrismicHero on PrismicPageDataBodySlicesType {
		...PrismicHeroDefault
		...PrismicHeroWithBackground
	}
`;
