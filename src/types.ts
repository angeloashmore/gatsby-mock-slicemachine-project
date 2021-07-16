import { SliceComponentProps } from "@prismicio/react";

export type SliceFromSliceComponentProps<T> = T extends SliceComponentProps<
	infer U
>
	? U
	: T;
