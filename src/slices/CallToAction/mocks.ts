// Code generated by Slice Machine. DO NOT EDIT.

import { CallToActionSlice } from "./types";

export const defaultVariation: CallToActionSlice & {
	variation: "default";
} = {
	slice_type: "call_to_action",
	variation: "default",
	primary: {
		title: {
			text: "Lorem ipsum",
		},
		description: {
			text: "Donec ullamcorper nulla non metus auctor fringilla.",
		},
	},
};

export const withButton: CallToActionSlice & {
	variation: "withButton";
} = {
	slice_type: "call_to_action",
	variation: "withButton",
	primary: {
		title: { text: "Lorem ipsum" },
		description: {
			text: "Donec ullamcorper nulla non metus auctor fringilla.",
		},
		buttonLink: {
			url: "#",
			target: undefined,
		},
		buttonText: {
			text: "Risus Elit",
		},
	},
};