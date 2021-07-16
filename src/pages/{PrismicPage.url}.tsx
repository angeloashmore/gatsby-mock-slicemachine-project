import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { SliceZone, SliceZoneComponents } from "@prismicio/react";

import { SliceFromSliceComponentProps } from "../types";
import { PrismicPageTemplateQuery } from "../types.generated";

import { CallToAction, CallToActionProps } from "../slices/CallToAction";
import { Hero, HeroProps } from "../slices/Hero";

type PrismicPageTemplateProps = PageProps<PrismicPageTemplateQuery>;

export type PrismicPageDataBodySlice =
	| SliceFromSliceComponentProps<CallToActionProps>
	| SliceFromSliceComponentProps<HeroProps>;

// TODO: Move this to a separate file. It should be the same file as the
// fragment for PrismicPageDataBody.
const pageDataBodySliceZoneComponents: SliceZoneComponents<PrismicPageDataBodySlice> =
	{
		call_to_action: CallToAction,
		hero: Hero,
	};

const PrismicPageTemplate = (props: PrismicPageTemplateProps): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const page = props.data.prismicPage!;
	const pageDataBodySlices = page.data.body as PrismicPageDataBodySlice[];

	return (
		<SliceZone
			slices={pageDataBodySlices}
			components={pageDataBodySliceZoneComponents}
		/>
	);
};

export default PrismicPageTemplate;

export const query = graphql`
	query PrismicPageTemplate($id: String!) {
		prismicPage(id: { eq: $id }) {
			_previewable
			data {
				body {
					...PrismicPageDataBody
				}
			}
		}
	}

	# TODO: Move this to a separate file. It should be the same file as the
	# components map.
	fragment PrismicPageDataBody on PrismicPageDataBodySlicesType {
		... on PrismicSliceType {
			slice_type
		}
		... on PrismicSharedSliceType {
			variation
		}
		...PrismicCallToAction
		...PrismicHero
	}
`;
