// Code generated by Slice Machine. DO NOT EDIT.

import * as prismicT from "@prismicio/types";
import * as prismicMock from "@prismicio/mock";
import * as gatsbyPrismic from "gatsby-source-prismic";

import { CallToActionSlice } from "./types";
import _model from "./model.json";

const model = _model as prismicT.SharedSliceModel;
const variations = model.variations.reduce(
	(acc, variation) => (acc[variation.id] = variation) && acc,
	{} as Record<string, prismicT.SharedSliceModelVariation>,
);

const runtime = gatsbyPrismic.createRuntime();
runtime.registerSharedSliceModel(model);

export const defaultVariation: CallToActionSlice & {
	variation: "default";
} = runtime.normalize(
	prismicMock.value.sharedSliceVariation({
		type: model.id,
		model: variations["default"],
	}),
	[model.id, "default"],
);

export const withButtonVariation: CallToActionSlice & {
	variation: "withButton";
} = runtime.normalize(
	prismicMock.value.sharedSliceVariation({
		type: model.id,
		model: variations["withButton"],
	}),
	[model.id, "withButton"],
);
