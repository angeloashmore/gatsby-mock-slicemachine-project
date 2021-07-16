import * as React from "react";
import { graphql } from "gatsby";
import { SliceComponentProps } from "@prismicio/react";

import {
	PrismicCallToActionDefaultFragment,
	PrismicCallToActionWithButtonFragment,
} from "../../types.generated";

// TODO: Move this to a separate file. It should be the same file as the
// fragment for all variants.
export type CallToActionProps = SliceComponentProps<
	{ slice_type: "call_to_action" } & (
		| ({ variation: "default" } & PrismicCallToActionDefaultFragment)
		| ({ variation: "withButton" } & PrismicCallToActionWithButtonFragment)
	)
>;

export const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
	return <div>Call to Action - {slice.variation}</div>;
};

export const fragment = graphql`
	fragment PrismicCallToActionDefault on PrismicCallToActionDefault {
		primary {
			title {
				text
			}
			description {
				text
			}
		}
	}
	fragment PrismicCallToActionWithButton on PrismicCallToActionWithButton {
		primary {
			title {
				text
			}
			description {
				text
			}
			buttonText {
				text
			}
			buttonLink {
				url
				target
			}
		}
	}

	# TODO: Move this to a separate file. It should be the same file a the props
	# type.
	fragment PrismicCallToAction on PrismicPageDataBodySlicesType {
		...PrismicCallToActionDefault
		...PrismicCallToActionWithButton
	}
`;
