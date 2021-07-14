import * as React from "react";
import { graphql } from "gatsby";

type CallToActionProps = {};

export const CallToAction = ({}: CallToActionProps): JSX.Element => {
	return <div>Call to Action</div>;
};

// export const fragment = graphql`
// 	fragment PageDataBodyText on PrismicCallToActionWithOneButton {
// 		slice_type
// 		primary {
// 			text {
// 				text
// 				html
// 			}
// 		}
// 	}
// `;
