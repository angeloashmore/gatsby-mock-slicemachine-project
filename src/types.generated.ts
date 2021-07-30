export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: string;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: unknown;
};

export type BooleanQueryOperatorInput = {
	eq: Maybe<Scalars["Boolean"]>;
	ne: Maybe<Scalars["Boolean"]>;
	in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
	nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
	eq: Maybe<Scalars["Date"]>;
	ne: Maybe<Scalars["Date"]>;
	gt: Maybe<Scalars["Date"]>;
	gte: Maybe<Scalars["Date"]>;
	lt: Maybe<Scalars["Date"]>;
	lte: Maybe<Scalars["Date"]>;
	in: Maybe<Array<Maybe<Scalars["Date"]>>>;
	nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
	sourceInstanceName: Scalars["String"];
	absolutePath: Scalars["String"];
	relativePath: Scalars["String"];
	extension: Scalars["String"];
	size: Scalars["Int"];
	prettySize: Scalars["String"];
	modifiedTime: Scalars["Date"];
	accessTime: Scalars["Date"];
	changeTime: Scalars["Date"];
	birthTime: Scalars["Date"];
	root: Scalars["String"];
	dir: Scalars["String"];
	base: Scalars["String"];
	ext: Scalars["String"];
	name: Scalars["String"];
	relativeDirectory: Scalars["String"];
	dev: Scalars["Int"];
	mode: Scalars["Int"];
	nlink: Scalars["Int"];
	uid: Scalars["Int"];
	gid: Scalars["Int"];
	rdev: Scalars["Int"];
	ino: Scalars["Float"];
	atimeMs: Scalars["Float"];
	mtimeMs: Scalars["Float"];
	ctimeMs: Scalars["Float"];
	atime: Scalars["Date"];
	mtime: Scalars["Date"];
	ctime: Scalars["Date"];
	/** @deprecated Use `birthTime` instead */
	birthtime: Maybe<Scalars["Date"]>;
	/** @deprecated Use `birthTime` instead */
	birthtimeMs: Maybe<Scalars["Float"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
	totalCount: Scalars["Int"];
	edges: Array<DirectoryEdge>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
	next: Maybe<Directory>;
	node: Directory;
	previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
	SourceInstanceName = "sourceInstanceName",
	AbsolutePath = "absolutePath",
	RelativePath = "relativePath",
	Extension = "extension",
	Size = "size",
	PrettySize = "prettySize",
	ModifiedTime = "modifiedTime",
	AccessTime = "accessTime",
	ChangeTime = "changeTime",
	BirthTime = "birthTime",
	Root = "root",
	Dir = "dir",
	Base = "base",
	Ext = "ext",
	Name = "name",
	RelativeDirectory = "relativeDirectory",
	Dev = "dev",
	Mode = "mode",
	Nlink = "nlink",
	Uid = "uid",
	Gid = "gid",
	Rdev = "rdev",
	Ino = "ino",
	AtimeMs = "atimeMs",
	MtimeMs = "mtimeMs",
	CtimeMs = "ctimeMs",
	Atime = "atime",
	Mtime = "mtime",
	Ctime = "ctime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type DirectoryFilterInput = {
	sourceInstanceName: Maybe<StringQueryOperatorInput>;
	absolutePath: Maybe<StringQueryOperatorInput>;
	relativePath: Maybe<StringQueryOperatorInput>;
	extension: Maybe<StringQueryOperatorInput>;
	size: Maybe<IntQueryOperatorInput>;
	prettySize: Maybe<StringQueryOperatorInput>;
	modifiedTime: Maybe<DateQueryOperatorInput>;
	accessTime: Maybe<DateQueryOperatorInput>;
	changeTime: Maybe<DateQueryOperatorInput>;
	birthTime: Maybe<DateQueryOperatorInput>;
	root: Maybe<StringQueryOperatorInput>;
	dir: Maybe<StringQueryOperatorInput>;
	base: Maybe<StringQueryOperatorInput>;
	ext: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	relativeDirectory: Maybe<StringQueryOperatorInput>;
	dev: Maybe<IntQueryOperatorInput>;
	mode: Maybe<IntQueryOperatorInput>;
	nlink: Maybe<IntQueryOperatorInput>;
	uid: Maybe<IntQueryOperatorInput>;
	gid: Maybe<IntQueryOperatorInput>;
	rdev: Maybe<IntQueryOperatorInput>;
	ino: Maybe<FloatQueryOperatorInput>;
	atimeMs: Maybe<FloatQueryOperatorInput>;
	mtimeMs: Maybe<FloatQueryOperatorInput>;
	ctimeMs: Maybe<FloatQueryOperatorInput>;
	atime: Maybe<DateQueryOperatorInput>;
	mtime: Maybe<DateQueryOperatorInput>;
	ctime: Maybe<DateQueryOperatorInput>;
	birthtime: Maybe<DateQueryOperatorInput>;
	birthtimeMs: Maybe<FloatQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<DirectoryEdge>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
	fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
	sourceInstanceName: Scalars["String"];
	absolutePath: Scalars["String"];
	relativePath: Scalars["String"];
	extension: Scalars["String"];
	size: Scalars["Int"];
	prettySize: Scalars["String"];
	modifiedTime: Scalars["Date"];
	accessTime: Scalars["Date"];
	changeTime: Scalars["Date"];
	birthTime: Scalars["Date"];
	root: Scalars["String"];
	dir: Scalars["String"];
	base: Scalars["String"];
	ext: Scalars["String"];
	name: Scalars["String"];
	relativeDirectory: Scalars["String"];
	dev: Scalars["Int"];
	mode: Scalars["Int"];
	nlink: Scalars["Int"];
	uid: Scalars["Int"];
	gid: Scalars["Int"];
	rdev: Scalars["Int"];
	ino: Scalars["Float"];
	atimeMs: Scalars["Float"];
	mtimeMs: Scalars["Float"];
	ctimeMs: Scalars["Float"];
	atime: Scalars["Date"];
	mtime: Scalars["Date"];
	ctime: Scalars["Date"];
	/** @deprecated Use `birthTime` instead */
	birthtime: Maybe<Scalars["Date"]>;
	/** @deprecated Use `birthTime` instead */
	birthtimeMs: Maybe<Scalars["Float"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type FileModifiedTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
	totalCount: Scalars["Int"];
	edges: Array<FileEdge>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: FileFieldsEnum;
};

export type FileEdge = {
	next: Maybe<File>;
	node: File;
	previous: Maybe<File>;
};

export enum FileFieldsEnum {
	SourceInstanceName = "sourceInstanceName",
	AbsolutePath = "absolutePath",
	RelativePath = "relativePath",
	Extension = "extension",
	Size = "size",
	PrettySize = "prettySize",
	ModifiedTime = "modifiedTime",
	AccessTime = "accessTime",
	ChangeTime = "changeTime",
	BirthTime = "birthTime",
	Root = "root",
	Dir = "dir",
	Base = "base",
	Ext = "ext",
	Name = "name",
	RelativeDirectory = "relativeDirectory",
	Dev = "dev",
	Mode = "mode",
	Nlink = "nlink",
	Uid = "uid",
	Gid = "gid",
	Rdev = "rdev",
	Ino = "ino",
	AtimeMs = "atimeMs",
	MtimeMs = "mtimeMs",
	CtimeMs = "ctimeMs",
	Atime = "atime",
	Mtime = "mtime",
	Ctime = "ctime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type FileFilterInput = {
	sourceInstanceName: Maybe<StringQueryOperatorInput>;
	absolutePath: Maybe<StringQueryOperatorInput>;
	relativePath: Maybe<StringQueryOperatorInput>;
	extension: Maybe<StringQueryOperatorInput>;
	size: Maybe<IntQueryOperatorInput>;
	prettySize: Maybe<StringQueryOperatorInput>;
	modifiedTime: Maybe<DateQueryOperatorInput>;
	accessTime: Maybe<DateQueryOperatorInput>;
	changeTime: Maybe<DateQueryOperatorInput>;
	birthTime: Maybe<DateQueryOperatorInput>;
	root: Maybe<StringQueryOperatorInput>;
	dir: Maybe<StringQueryOperatorInput>;
	base: Maybe<StringQueryOperatorInput>;
	ext: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	relativeDirectory: Maybe<StringQueryOperatorInput>;
	dev: Maybe<IntQueryOperatorInput>;
	mode: Maybe<IntQueryOperatorInput>;
	nlink: Maybe<IntQueryOperatorInput>;
	uid: Maybe<IntQueryOperatorInput>;
	gid: Maybe<IntQueryOperatorInput>;
	rdev: Maybe<IntQueryOperatorInput>;
	ino: Maybe<FloatQueryOperatorInput>;
	atimeMs: Maybe<FloatQueryOperatorInput>;
	mtimeMs: Maybe<FloatQueryOperatorInput>;
	ctimeMs: Maybe<FloatQueryOperatorInput>;
	atime: Maybe<DateQueryOperatorInput>;
	mtime: Maybe<DateQueryOperatorInput>;
	ctime: Maybe<DateQueryOperatorInput>;
	birthtime: Maybe<DateQueryOperatorInput>;
	birthtimeMs: Maybe<FloatQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<FileEdge>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
	fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
	eq: Maybe<Scalars["Float"]>;
	ne: Maybe<Scalars["Float"]>;
	gt: Maybe<Scalars["Float"]>;
	gte: Maybe<Scalars["Float"]>;
	lt: Maybe<Scalars["Float"]>;
	lte: Maybe<Scalars["Float"]>;
	in: Maybe<Array<Maybe<Scalars["Float"]>>>;
	nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum GatsbyImageLayout {
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
	Constrained = "CONSTRAINED",
}

export type IdQueryOperatorInput = {
	eq: Maybe<Scalars["ID"]>;
	ne: Maybe<Scalars["ID"]>;
	in: Maybe<Array<Maybe<Scalars["ID"]>>>;
	nin: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type ImgixFixed = {
	base64: Scalars["String"];
	src: Scalars["String"];
	srcSet: Scalars["String"];
	srcWebp: Scalars["String"];
	srcSetWebp: Scalars["String"];
	sizes: Scalars["String"];
	width: Scalars["Int"];
	height: Scalars["Int"];
};

export type ImgixFluid = {
	base64: Scalars["String"];
	src: Scalars["String"];
	srcSet: Scalars["String"];
	srcWebp: Scalars["String"];
	srcSetWebp: Scalars["String"];
	sizes: Scalars["String"];
	aspectRatio: Scalars["Float"];
};

export type ImgixParamsInput = {
	/** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
	ar: Maybe<Scalars["String"]>;
	/** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
	auto: Maybe<Scalars["String"]>;
	/** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
	bg: Maybe<Scalars["String"]>;
	/** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
	blendAlign: Maybe<Scalars["String"]>;
	/** Alias for `blendAlign`. */
	blendalign: Maybe<Scalars["String"]>;
	/** Alias for `blendAlign`. */
	ba: Maybe<Scalars["String"]>;
	/** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
	blendAlpha: Maybe<Scalars["Int"]>;
	/** Alias for `blendAlpha`. */
	blendalpha: Maybe<Scalars["Int"]>;
	/** Alias for `blendAlpha`. */
	balph: Maybe<Scalars["Int"]>;
	/** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
	blendColor: Maybe<Scalars["String"]>;
	/** Alias for `blendColor`. */
	blendcolor: Maybe<Scalars["String"]>;
	/** Alias for `blendColor`. */
	blendClr: Maybe<Scalars["String"]>;
	/** Alias for `blendColor`. */
	blendclr: Maybe<Scalars["String"]>;
	/** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
	blendCrop: Maybe<Scalars["String"]>;
	/** Alias for `blendCrop`. */
	blendcrop: Maybe<Scalars["String"]>;
	/** Alias for `blendCrop`. */
	bc: Maybe<Scalars["String"]>;
	/** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
	blendFit: Maybe<Scalars["String"]>;
	/** Alias for `blendFit`. */
	blendfit: Maybe<Scalars["String"]>;
	/** Alias for `blendFit`. */
	bf: Maybe<Scalars["String"]>;
	/** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
	blendH: Maybe<Scalars["Float"]>;
	/** Alias for `blendH`. */
	blendh: Maybe<Scalars["Float"]>;
	/** Alias for `blendH`. */
	bh: Maybe<Scalars["Float"]>;
	/** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
	blendMode: Maybe<Scalars["String"]>;
	/** Alias for `blendMode`. */
	blendmode: Maybe<Scalars["String"]>;
	/** Alias for `blendMode`. */
	bm: Maybe<Scalars["String"]>;
	/** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
	blendPad: Maybe<Scalars["Int"]>;
	/** Alias for `blendPad`. */
	blendpad: Maybe<Scalars["Int"]>;
	/** Alias for `blendPad`. */
	bp: Maybe<Scalars["Int"]>;
	/** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
	blendSize: Maybe<Scalars["String"]>;
	/** Alias for `blendSize`. */
	blendsize: Maybe<Scalars["String"]>;
	/** Alias for `blendSize`. */
	bs: Maybe<Scalars["String"]>;
	/** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
	blendW: Maybe<Scalars["Float"]>;
	/** Alias for `blendW`. */
	blendw: Maybe<Scalars["Float"]>;
	/** Alias for `blendW`. */
	bw: Maybe<Scalars["Float"]>;
	/** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
	blendX: Maybe<Scalars["Int"]>;
	/** Alias for `blendX`. */
	blendx: Maybe<Scalars["Int"]>;
	/** Alias for `blendX`. */
	bx: Maybe<Scalars["Int"]>;
	/** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
	blendY: Maybe<Scalars["Int"]>;
	/** Alias for `blendY`. */
	blendy: Maybe<Scalars["Int"]>;
	/** Alias for `blendY`. */
	by: Maybe<Scalars["Int"]>;
	/** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
	blend: Maybe<Scalars["String"]>;
	/** Alias for `blend`. */
	b: Maybe<Scalars["String"]>;
	/** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
	blur: Maybe<Scalars["Int"]>;
	/** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
	borderBottom: Maybe<Scalars["Int"]>;
	/** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
	borderLeft: Maybe<Scalars["Int"]>;
	/** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
	borderRadiusInner: Maybe<Scalars["String"]>;
	/** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
	borderRadius: Maybe<Scalars["String"]>;
	/** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
	borderRight: Maybe<Scalars["Int"]>;
	/** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
	borderTop: Maybe<Scalars["Int"]>;
	/** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
	border: Maybe<Scalars["String"]>;
	/** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
	bri: Maybe<Scalars["Int"]>;
	/** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
	ch: Maybe<Scalars["String"]>;
	/** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
	chromasub: Maybe<Scalars["Int"]>;
	/** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
	colorquant: Maybe<Scalars["Int"]>;
	/** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
	colors: Maybe<Scalars["Int"]>;
	/** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
	con: Maybe<Scalars["Int"]>;
	/** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
	cornerRadius: Maybe<Scalars["String"]>;
	/** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
	crop: Maybe<Scalars["String"]>;
	/** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
	cs: Maybe<Scalars["String"]>;
	/** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
	dl: Maybe<Scalars["String"]>;
	/** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
	dpi: Maybe<Scalars["Int"]>;
	/** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
	dpr: Maybe<Scalars["Float"]>;
	/** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
	duotoneAlpha: Maybe<Scalars["Int"]>;
	/** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
	duotone: Maybe<Scalars["String"]>;
	/** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
	exp: Maybe<Scalars["Int"]>;
	/** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
	expires: Maybe<Scalars["String"]>;
	/** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
	faceindex: Maybe<Scalars["Int"]>;
	/** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
	facepad: Maybe<Scalars["Float"]>;
	/** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
	faces: Maybe<Scalars["Int"]>;
	/** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
	fillColor: Maybe<Scalars["String"]>;
	/** Alias for `fillColor`. */
	fillcolor: Maybe<Scalars["String"]>;
	/** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
	fill: Maybe<Scalars["String"]>;
	/** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
	fit: Maybe<Scalars["String"]>;
	/** Alias for `fit`. */
	f: Maybe<Scalars["String"]>;
	/** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
	flip: Maybe<Scalars["String"]>;
	/** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
	fm: Maybe<Scalars["String"]>;
	/** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
	fpDebug: Maybe<Scalars["Boolean"]>;
	/** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
	fpX: Maybe<Scalars["Float"]>;
	/** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
	fpY: Maybe<Scalars["Float"]>;
	/** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
	fpZ: Maybe<Scalars["Float"]>;
	/** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
	gam: Maybe<Scalars["Int"]>;
	/** Sets grid colors for the transparency checkerboard grid. */
	gridColors: Maybe<Scalars["String"]>;
	/** Sets grid size for the transparency checkerboard grid. */
	gridSize: Maybe<Scalars["Int"]>;
	/** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
	h: Maybe<Scalars["Float"]>;
	/** Alias for `h`. */
	height: Maybe<Scalars["Float"]>;
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
	high: Maybe<Scalars["Int"]>;
	/** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
	htn: Maybe<Scalars["Int"]>;
	/** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
	hue: Maybe<Scalars["Int"]>;
	/** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
	invert: Maybe<Scalars["Boolean"]>;
	/** Alias for `invert`. */
	inv: Maybe<Scalars["Boolean"]>;
	/** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
	lossless: Maybe<Scalars["Boolean"]>;
	/** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
	markAlign: Maybe<Scalars["String"]>;
	/** Alias for `markAlign`. */
	ma: Maybe<Scalars["String"]>;
	/** Alias for `markAlign`. */
	markalign: Maybe<Scalars["String"]>;
	/** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
	markAlpha: Maybe<Scalars["Int"]>;
	/** Alias for `markAlpha`. */
	markalpha: Maybe<Scalars["Int"]>;
	/** Alias for `markAlpha`. */
	malph: Maybe<Scalars["Int"]>;
	/** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
	markBase: Maybe<Scalars["String"]>;
	/** Alias for `markBase`. */
	mb: Maybe<Scalars["String"]>;
	/** Alias for `markBase`. */
	markbase: Maybe<Scalars["String"]>;
	/** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
	markFit: Maybe<Scalars["String"]>;
	/** Alias for `markFit`. */
	mf: Maybe<Scalars["String"]>;
	/** Alias for `markFit`. */
	markfit: Maybe<Scalars["String"]>;
	/** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
	markH: Maybe<Scalars["Float"]>;
	/** Alias for `markH`. */
	mh: Maybe<Scalars["Float"]>;
	/** Alias for `markH`. */
	markh: Maybe<Scalars["Float"]>;
	/** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
	markPad: Maybe<Scalars["Int"]>;
	/** Alias for `markPad`. */
	mp: Maybe<Scalars["Int"]>;
	/** Alias for `markPad`. */
	markpad: Maybe<Scalars["Int"]>;
	/** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
	markRot: Maybe<Scalars["Float"]>;
	/** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
	markScale: Maybe<Scalars["Int"]>;
	/** Alias for `markScale`. */
	ms: Maybe<Scalars["Int"]>;
	/** Alias for `markScale`. */
	markscale: Maybe<Scalars["Int"]>;
	/** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
	markTile: Maybe<Scalars["String"]>;
	/** Alias for `markTile`. */
	mtile: Maybe<Scalars["String"]>;
	/** Alias for `markTile`. */
	marktile: Maybe<Scalars["String"]>;
	/** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
	markW: Maybe<Scalars["Float"]>;
	/** Alias for `markW`. */
	mw: Maybe<Scalars["Float"]>;
	/** Alias for `markW`. */
	markw: Maybe<Scalars["Float"]>;
	/** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
	markX: Maybe<Scalars["Int"]>;
	/** Alias for `markX`. */
	mx: Maybe<Scalars["Int"]>;
	/** Alias for `markX`. */
	markx: Maybe<Scalars["Int"]>;
	/** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
	markY: Maybe<Scalars["Int"]>;
	/** Alias for `markY`. */
	my: Maybe<Scalars["Int"]>;
	/** Alias for `markY`. */
	marky: Maybe<Scalars["Int"]>;
	/** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
	mark: Maybe<Scalars["String"]>;
	/** Alias for `mark`. */
	m: Maybe<Scalars["String"]>;
	/** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
	maskBg: Maybe<Scalars["String"]>;
	/** Alias for `maskBg`. */
	maskbg: Maybe<Scalars["String"]>;
	/** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
	mask: Maybe<Scalars["String"]>;
	/** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
	maxH: Maybe<Scalars["Int"]>;
	/** Alias for `maxH`. */
	maxHeight: Maybe<Scalars["Int"]>;
	/** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
	maxW: Maybe<Scalars["Int"]>;
	/** Alias for `maxW`. */
	maxWidth: Maybe<Scalars["Int"]>;
	/** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
	minH: Maybe<Scalars["Int"]>;
	/** Alias for `minH`. */
	minHeight: Maybe<Scalars["Int"]>;
	/** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
	minW: Maybe<Scalars["Int"]>;
	/** Alias for `minW`. */
	minWidth: Maybe<Scalars["Int"]>;
	/** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
	monochrome: Maybe<Scalars["String"]>;
	/** Alias for `monochrome`. */
	mono: Maybe<Scalars["String"]>;
	/** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
	nr: Maybe<Scalars["Int"]>;
	/** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
	nrs: Maybe<Scalars["Int"]>;
	/** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
	orient: Maybe<Scalars["Int"]>;
	/** Alias for `orient`. */
	or: Maybe<Scalars["Int"]>;
	/** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
	padBottom: Maybe<Scalars["Int"]>;
	/** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
	padLeft: Maybe<Scalars["Int"]>;
	/** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
	padRight: Maybe<Scalars["Int"]>;
	/** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
	padTop: Maybe<Scalars["Int"]>;
	/** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
	pad: Maybe<Scalars["Int"]>;
	/** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
	page: Maybe<Scalars["Int"]>;
	/** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
	palette: Maybe<Scalars["String"]>;
	/** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
	pdfAnnotation: Maybe<Scalars["Boolean"]>;
	/** Alias for `pdfAnnotation`. */
	annotation: Maybe<Scalars["Boolean"]>;
	/** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
	prefix: Maybe<Scalars["String"]>;
	/** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
	px: Maybe<Scalars["Int"]>;
	/** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
	q: Maybe<Scalars["Int"]>;
	/** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
	rect: Maybe<Scalars["String"]>;
	/** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
	rot: Maybe<Scalars["Float"]>;
	/** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
	sat: Maybe<Scalars["Int"]>;
	/** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
	sepia: Maybe<Scalars["Int"]>;
	/** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
	shad: Maybe<Scalars["Float"]>;
	/** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
	sharp: Maybe<Scalars["Float"]>;
	/** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
	transparency: Maybe<Scalars["String"]>;
	/** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
	trimColor: Maybe<Scalars["String"]>;
	/** Alias for `trimColor`. */
	trimcolor: Maybe<Scalars["String"]>;
	/** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
	trimMd: Maybe<Scalars["Float"]>;
	/** Alias for `trimMd`. */
	trimmd: Maybe<Scalars["Float"]>;
	/** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
	trimPad: Maybe<Scalars["Int"]>;
	/** Alias for `trimPad`. */
	trimpad: Maybe<Scalars["Int"]>;
	/** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
	trimSd: Maybe<Scalars["Float"]>;
	/** Alias for `trimSd`. */
	trimsd: Maybe<Scalars["Float"]>;
	/** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
	trimTol: Maybe<Scalars["Float"]>;
	/** Alias for `trimTol`. */
	trimtol: Maybe<Scalars["Float"]>;
	/** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
	trim: Maybe<Scalars["String"]>;
	/** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
	txtAlign: Maybe<Scalars["String"]>;
	/** Alias for `txtAlign`. */
	txtalign: Maybe<Scalars["String"]>;
	/** Alias for `txtAlign`. */
	ta: Maybe<Scalars["String"]>;
	/** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
	txtClip: Maybe<Scalars["String"]>;
	/** Alias for `txtClip`. */
	txtclip: Maybe<Scalars["String"]>;
	/** Alias for `txtClip`. */
	tcl: Maybe<Scalars["String"]>;
	/** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
	txtColor: Maybe<Scalars["String"]>;
	/** Alias for `txtColor`. */
	txtcolor: Maybe<Scalars["String"]>;
	/** Alias for `txtColor`. */
	txtClr: Maybe<Scalars["String"]>;
	/** Alias for `txtColor`. */
	txtclr: Maybe<Scalars["String"]>;
	/** Alias for `txtColor`. */
	tc: Maybe<Scalars["String"]>;
	/** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
	txtFit: Maybe<Scalars["String"]>;
	/** Alias for `txtFit`. */
	txtfit: Maybe<Scalars["String"]>;
	/** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
	txtFont: Maybe<Scalars["String"]>;
	/** Alias for `txtFont`. */
	tf: Maybe<Scalars["String"]>;
	/** Alias for `txtFont`. */
	txtfont: Maybe<Scalars["String"]>;
	/** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
	txtLead: Maybe<Scalars["Int"]>;
	/** Alias for `txtLead`. */
	txtlead: Maybe<Scalars["Int"]>;
	/** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
	txtLig: Maybe<Scalars["Int"]>;
	/** Alias for `txtLig`. */
	txtlig: Maybe<Scalars["Int"]>;
	/** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
	txtLineColor: Maybe<Scalars["String"]>;
	/** Alias for `txtLineColor`. */
	txtlinecolor: Maybe<Scalars["String"]>;
	/** Alias for `txtLineColor`. */
	txtLineClr: Maybe<Scalars["String"]>;
	/** Alias for `txtLineColor`. */
	txtlineclr: Maybe<Scalars["String"]>;
	/** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
	txtLine: Maybe<Scalars["Int"]>;
	/** Alias for `txtLine`. */
	txtline: Maybe<Scalars["Int"]>;
	/** Alias for `txtLine`. */
	tl: Maybe<Scalars["Int"]>;
	/** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
	txtPad: Maybe<Scalars["Int"]>;
	/** Alias for `txtPad`. */
	txtpad: Maybe<Scalars["Int"]>;
	/** Alias for `txtPad`. */
	tp: Maybe<Scalars["Int"]>;
	/** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
	txtShad: Maybe<Scalars["Float"]>;
	/** Alias for `txtShad`. */
	txtshad: Maybe<Scalars["Float"]>;
	/** Alias for `txtShad`. */
	tsh: Maybe<Scalars["Float"]>;
	/** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
	txtSize: Maybe<Scalars["Int"]>;
	/** Alias for `txtSize`. */
	tsz: Maybe<Scalars["Int"]>;
	/** Alias for `txtSize`. */
	txtsize: Maybe<Scalars["Int"]>;
	/** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
	txtTrack: Maybe<Scalars["Int"]>;
	/** Alias for `txtTrack`. */
	txttrack: Maybe<Scalars["Int"]>;
	/** Alias for `txtTrack`. */
	tt: Maybe<Scalars["Int"]>;
	/** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
	txtWidth: Maybe<Scalars["Int"]>;
	/** Alias for `txtWidth`. */
	txtwidth: Maybe<Scalars["Int"]>;
	/** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
	txt: Maybe<Scalars["String"]>;
	/** Alias for `txt`. */
	t: Maybe<Scalars["String"]>;
	/** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
	usm: Maybe<Scalars["Int"]>;
	/** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
	usmrad: Maybe<Scalars["Float"]>;
	/** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
	vib: Maybe<Scalars["Int"]>;
	/** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
	w: Maybe<Scalars["Float"]>;
	/** Alias for `w`. */
	width: Maybe<Scalars["Float"]>;
};

export enum ImgixPlaceholder {
	DominantColor = "DOMINANT_COLOR",
	Blurred = "BLURRED",
	None = "NONE",
}

export type IntQueryOperatorInput = {
	eq: Maybe<Scalars["Int"]>;
	ne: Maybe<Scalars["Int"]>;
	gt: Maybe<Scalars["Int"]>;
	gte: Maybe<Scalars["Int"]>;
	lt: Maybe<Scalars["Int"]>;
	lte: Maybe<Scalars["Int"]>;
	in: Maybe<Array<Maybe<Scalars["Int"]>>>;
	nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
	content: Maybe<Scalars["String"]>;
	contentDigest: Scalars["String"];
	description: Maybe<Scalars["String"]>;
	fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
	ignoreType: Maybe<Scalars["Boolean"]>;
	mediaType: Maybe<Scalars["String"]>;
	owner: Scalars["String"];
	type: Scalars["String"];
};

export type InternalFilterInput = {
	content: Maybe<StringQueryOperatorInput>;
	contentDigest: Maybe<StringQueryOperatorInput>;
	description: Maybe<StringQueryOperatorInput>;
	fieldOwners: Maybe<StringQueryOperatorInput>;
	ignoreType: Maybe<BooleanQueryOperatorInput>;
	mediaType: Maybe<StringQueryOperatorInput>;
	owner: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
	eq: Maybe<Scalars["JSON"]>;
	ne: Maybe<Scalars["JSON"]>;
	in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
	nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
	regex: Maybe<Scalars["JSON"]>;
	glob: Maybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type NodeFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
	elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
	currentPage: Scalars["Int"];
	hasPreviousPage: Scalars["Boolean"];
	hasNextPage: Scalars["Boolean"];
	itemCount: Scalars["Int"];
	pageCount: Scalars["Int"];
	perPage: Maybe<Scalars["Int"]>;
	totalCount: Scalars["Int"];
};

export type PrismicAllDocumentTypes = PrismicPage;

export type PrismicAlternateLanguageType = {
	id: Maybe<Scalars["ID"]>;
	uid: Maybe<Scalars["String"]>;
	lang: Maybe<Scalars["String"]>;
	type: Maybe<Scalars["String"]>;
	document: Maybe<PrismicAllDocumentTypes>;
	raw: Maybe<Scalars["JSON"]>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
	id: Maybe<IdQueryOperatorInput>;
	uid: Maybe<StringQueryOperatorInput>;
	lang: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	raw: Maybe<JsonQueryOperatorInput>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
	elemMatch: Maybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicCallToActionDefault = PrismicSliceType &
	PrismicSharedSliceType & {
		primary: PrismicCallToActionDefaultPrimary;
		id: Scalars["ID"];
		slice_type: Scalars["String"];
		slice_label: Maybe<Scalars["String"]>;
		version: Scalars["String"];
		variation: Scalars["String"];
	};

export type PrismicCallToActionDefaultPrimary = {
	description: Maybe<PrismicStructuredTextType>;
	title: Maybe<PrismicStructuredTextType>;
};

export type PrismicCallToActionWithButton = PrismicSliceType &
	PrismicSharedSliceType & {
		primary: PrismicCallToActionWithButtonPrimary;
		id: Scalars["ID"];
		slice_type: Scalars["String"];
		slice_label: Maybe<Scalars["String"]>;
		version: Scalars["String"];
		variation: Scalars["String"];
	};

export type PrismicCallToActionWithButtonPrimary = {
	buttonLink: Maybe<PrismicLinkType>;
	buttonText: Maybe<PrismicStructuredTextType>;
	description: Maybe<PrismicStructuredTextType>;
	title: Maybe<PrismicStructuredTextType>;
};

export type PrismicEmbedType = Node & {
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type PrismicEmbedTypeConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicEmbedTypeEdge>;
	nodes: Array<PrismicEmbedType>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<PrismicEmbedTypeGroupConnection>;
};

export type PrismicEmbedTypeConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionMaxArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionMinArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionSumArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeEdge = {
	next: Maybe<PrismicEmbedType>;
	node: PrismicEmbedType;
	previous: Maybe<PrismicEmbedType>;
};

export enum PrismicEmbedTypeFieldsEnum {
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type PrismicEmbedTypeFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type PrismicEmbedTypeGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicEmbedTypeEdge>;
	nodes: Array<PrismicEmbedType>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type PrismicEmbedTypeSortInput = {
	fields: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicGeoPointType = {
	longitude: Scalars["Float"];
	latitude: Scalars["Float"];
};

export type PrismicHeroDefault = PrismicSliceType &
	PrismicSharedSliceType & {
		primary: PrismicHeroDefaultPrimary;
		id: Scalars["ID"];
		slice_type: Scalars["String"];
		slice_label: Maybe<Scalars["String"]>;
		version: Scalars["String"];
		variation: Scalars["String"];
	};

export type PrismicHeroDefaultPrimary = {
	description: Maybe<PrismicStructuredTextType>;
	title: Maybe<PrismicStructuredTextType>;
};

export type PrismicHeroWithBackground = PrismicSliceType &
	PrismicSharedSliceType & {
		primary: PrismicHeroWithBackgroundPrimary;
		id: Scalars["ID"];
		slice_type: Scalars["String"];
		slice_label: Maybe<Scalars["String"]>;
		version: Scalars["String"];
		variation: Scalars["String"];
	};

export type PrismicHeroWithBackgroundPrimary = {
	backgroundImage: Maybe<PrismicHeroWithBackgroundPrimaryBackgroundImageImageType>;
	description: Maybe<PrismicStructuredTextType>;
	title: Maybe<PrismicStructuredTextType>;
};

export type PrismicHeroWithBackgroundPrimaryBackgroundImageImageType = {
	alt: Maybe<Scalars["String"]>;
	copyright: Maybe<Scalars["String"]>;
	dimensions: Maybe<PrismicImageDimensionsType>;
	/** A plain imgix URL with the URL and params applied. */
	url: Maybe<Scalars["String"]>;
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed: Maybe<ImgixFixed>;
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid: Maybe<ImgixFluid>;
	gatsbyImageData: Maybe<Scalars["JSON"]>;
	localFile: Maybe<File>;
};

export type PrismicHeroWithBackgroundPrimaryBackgroundImageImageTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicHeroWithBackgroundPrimaryBackgroundImageImageTypeFixedArgs =
	{
		width?: Maybe<Scalars["Int"]>;
		height: Maybe<Scalars["Int"]>;
		quality: Maybe<Scalars["Int"]>;
		imgixParams?: Maybe<ImgixParamsInput>;
		placeholderImgixParams?: Maybe<ImgixParamsInput>;
	};

export type PrismicHeroWithBackgroundPrimaryBackgroundImageImageTypeFluidArgs =
	{
		imgixParams?: Maybe<ImgixParamsInput>;
		maxWidth?: Maybe<Scalars["Int"]>;
		maxHeight: Maybe<Scalars["Int"]>;
		srcSetBreakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
		placeholderImgixParams?: Maybe<ImgixParamsInput>;
	};

export type PrismicHeroWithBackgroundPrimaryBackgroundImageImageTypeGatsbyImageDataArgs =
	{
		layout: Maybe<GatsbyImageLayout>;
		width: Maybe<Scalars["Int"]>;
		height: Maybe<Scalars["Int"]>;
		aspectRatio: Maybe<Scalars["Float"]>;
		outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
		breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
		sizes: Maybe<Scalars["String"]>;
		backgroundColor: Maybe<Scalars["String"]>;
		imgixParams: Maybe<ImgixParamsInput>;
		placeholderImgixParams: Maybe<ImgixParamsInput>;
		placeholder: Maybe<ImgixPlaceholder>;
		widthTolerance?: Maybe<Scalars["Float"]>;
		srcSetMinWidth?: Maybe<Scalars["Int"]>;
		srcSetMaxWidth?: Maybe<Scalars["Int"]>;
	};

export type PrismicImageDimensionsType = {
	width: Scalars["Int"];
	height: Scalars["Int"];
};

export type PrismicImageThumbnailType = {
	alt: Maybe<Scalars["String"]>;
	copyright: Maybe<Scalars["String"]>;
	dimensions: Maybe<PrismicImageDimensionsType>;
	/** A plain imgix URL with the URL and params applied. */
	url: Maybe<Scalars["String"]>;
	/** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
	fixed: Maybe<ImgixFixed>;
	/** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
	fluid: Maybe<ImgixFluid>;
	gatsbyImageData: Maybe<Scalars["JSON"]>;
	localFile: Maybe<File>;
};

export type PrismicImageThumbnailTypeUrlArgs = {
	imgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeFixedArgs = {
	width?: Maybe<Scalars["Int"]>;
	height: Maybe<Scalars["Int"]>;
	quality: Maybe<Scalars["Int"]>;
	imgixParams?: Maybe<ImgixParamsInput>;
	placeholderImgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeFluidArgs = {
	imgixParams?: Maybe<ImgixParamsInput>;
	maxWidth?: Maybe<Scalars["Int"]>;
	maxHeight: Maybe<Scalars["Int"]>;
	srcSetBreakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
	placeholderImgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
	layout: Maybe<GatsbyImageLayout>;
	width: Maybe<Scalars["Int"]>;
	height: Maybe<Scalars["Int"]>;
	aspectRatio: Maybe<Scalars["Float"]>;
	outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
	breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
	sizes: Maybe<Scalars["String"]>;
	backgroundColor: Maybe<Scalars["String"]>;
	imgixParams: Maybe<ImgixParamsInput>;
	placeholderImgixParams: Maybe<ImgixParamsInput>;
	placeholder: Maybe<ImgixPlaceholder>;
	widthTolerance?: Maybe<Scalars["Float"]>;
	srcSetMinWidth?: Maybe<Scalars["Int"]>;
	srcSetMaxWidth?: Maybe<Scalars["Int"]>;
};

export type PrismicLinkType = {
	link_type: Maybe<PrismicLinkTypeEnum>;
	isBroken: Maybe<Scalars["Boolean"]>;
	url: Maybe<Scalars["String"]>;
	target: Maybe<Scalars["String"]>;
	size: Maybe<Scalars["Int"]>;
	id: Maybe<Scalars["ID"]>;
	type: Maybe<Scalars["String"]>;
	tags: Maybe<Array<Maybe<Scalars["String"]>>>;
	lang: Maybe<Scalars["String"]>;
	slug: Maybe<Scalars["String"]>;
	uid: Maybe<Scalars["String"]>;
	document: Maybe<PrismicAllDocumentTypes>;
	localFile: Maybe<File>;
	raw: Maybe<Scalars["JSON"]>;
};

export enum PrismicLinkTypeEnum {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

export type PrismicPage = Node & {
	uid: Scalars["String"];
	data: Maybe<PrismicPageDataType>;
	dataRaw: Scalars["JSON"];
	prismicId: Scalars["ID"];
	alternate_languages: Array<PrismicAlternateLanguageType>;
	first_publication_date: Scalars["Date"];
	href: Scalars["String"];
	lang: Scalars["String"];
	last_publication_date: Scalars["Date"];
	tags: Array<Scalars["String"]>;
	type: Scalars["String"];
	url: Maybe<Scalars["String"]>;
	_previewable: Scalars["ID"];
	gatsbyPath: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type PrismicPageFirst_Publication_DateArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type PrismicPageLast_Publication_DateArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type PrismicPageGatsbyPathArgs = {
	filePath: Maybe<Scalars["String"]>;
};

export type PrismicPageConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicPageEdge>;
	nodes: Array<PrismicPage>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<PrismicPageGroupConnection>;
};

export type PrismicPageConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionMaxArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionMinArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionSumArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: PrismicPageFieldsEnum;
};

export type PrismicPageDataBodySlicesType =
	| PrismicCallToActionDefault
	| PrismicCallToActionWithButton
	| PrismicHeroDefault
	| PrismicHeroWithBackground;

export type PrismicPageDataType = {
	body: Array<PrismicPageDataBodySlicesType>;
};

export type PrismicPageEdge = {
	next: Maybe<PrismicPage>;
	node: PrismicPage;
	previous: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
	Uid = "uid",
	DataRaw = "dataRaw",
	PrismicId = "prismicId",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesUid = "alternate_languages___uid",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesRaw = "alternate_languages___raw",
	FirstPublicationDate = "first_publication_date",
	Href = "href",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	Tags = "tags",
	Type = "type",
	Url = "url",
	Previewable = "_previewable",
	GatsbyPath = "gatsbyPath",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type PrismicPageFilterInput = {
	uid: Maybe<StringQueryOperatorInput>;
	dataRaw: Maybe<JsonQueryOperatorInput>;
	prismicId: Maybe<IdQueryOperatorInput>;
	alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
	first_publication_date: Maybe<DateQueryOperatorInput>;
	href: Maybe<StringQueryOperatorInput>;
	lang: Maybe<StringQueryOperatorInput>;
	last_publication_date: Maybe<DateQueryOperatorInput>;
	tags: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	url: Maybe<StringQueryOperatorInput>;
	_previewable: Maybe<IdQueryOperatorInput>;
	gatsbyPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type PrismicPageGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicPageEdge>;
	nodes: Array<PrismicPage>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type PrismicPageSortInput = {
	fields: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSharedSliceType = {
	id: Scalars["ID"];
	slice_type: Scalars["String"];
	slice_label: Maybe<Scalars["String"]>;
	variation: Scalars["String"];
	version: Scalars["String"];
};

export type PrismicSliceType = {
	id: Scalars["ID"];
	slice_type: Scalars["String"];
	slice_label: Maybe<Scalars["String"]>;
};

export type PrismicStructuredTextType = {
	text: Maybe<Scalars["String"]>;
	html: Maybe<Scalars["String"]>;
	raw: Maybe<Scalars["JSON"]>;
};

export type PrismicTypePathType = Node & {
	path: Array<Scalars["String"]>;
	type: Scalars["String"];
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type PrismicTypePathTypeConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicTypePathTypeEdge>;
	nodes: Array<PrismicTypePathType>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<PrismicTypePathTypeGroupConnection>;
};

export type PrismicTypePathTypeConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionMaxArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionMinArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionSumArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeEdge = {
	next: Maybe<PrismicTypePathType>;
	node: PrismicTypePathType;
	previous: Maybe<PrismicTypePathType>;
};

export enum PrismicTypePathTypeFieldsEnum {
	Path = "path",
	Type = "type",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type PrismicTypePathTypeFilterInput = {
	path: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type PrismicTypePathTypeGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<PrismicTypePathTypeEdge>;
	nodes: Array<PrismicTypePathType>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type PrismicTypePathTypeSortInput = {
	fields: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
	file: Maybe<File>;
	allFile: FileConnection;
	directory: Maybe<Directory>;
	allDirectory: DirectoryConnection;
	site: Maybe<Site>;
	allSite: SiteConnection;
	siteFunction: Maybe<SiteFunction>;
	allSiteFunction: SiteFunctionConnection;
	sitePage: Maybe<SitePage>;
	allSitePage: SitePageConnection;
	prismicEmbedType: Maybe<PrismicEmbedType>;
	allPrismicEmbedType: PrismicEmbedTypeConnection;
	prismicTypePathType: Maybe<PrismicTypePathType>;
	allPrismicTypePathType: PrismicTypePathTypeConnection;
	prismicPage: Maybe<PrismicPage>;
	allPrismicPage: PrismicPageConnection;
	sitePlugin: Maybe<SitePlugin>;
	allSitePlugin: SitePluginConnection;
	siteBuildMetadata: Maybe<SiteBuildMetadata>;
	allSiteBuildMetadata: SiteBuildMetadataConnection;
};

export type QueryFileArgs = {
	sourceInstanceName: Maybe<StringQueryOperatorInput>;
	absolutePath: Maybe<StringQueryOperatorInput>;
	relativePath: Maybe<StringQueryOperatorInput>;
	extension: Maybe<StringQueryOperatorInput>;
	size: Maybe<IntQueryOperatorInput>;
	prettySize: Maybe<StringQueryOperatorInput>;
	modifiedTime: Maybe<DateQueryOperatorInput>;
	accessTime: Maybe<DateQueryOperatorInput>;
	changeTime: Maybe<DateQueryOperatorInput>;
	birthTime: Maybe<DateQueryOperatorInput>;
	root: Maybe<StringQueryOperatorInput>;
	dir: Maybe<StringQueryOperatorInput>;
	base: Maybe<StringQueryOperatorInput>;
	ext: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	relativeDirectory: Maybe<StringQueryOperatorInput>;
	dev: Maybe<IntQueryOperatorInput>;
	mode: Maybe<IntQueryOperatorInput>;
	nlink: Maybe<IntQueryOperatorInput>;
	uid: Maybe<IntQueryOperatorInput>;
	gid: Maybe<IntQueryOperatorInput>;
	rdev: Maybe<IntQueryOperatorInput>;
	ino: Maybe<FloatQueryOperatorInput>;
	atimeMs: Maybe<FloatQueryOperatorInput>;
	mtimeMs: Maybe<FloatQueryOperatorInput>;
	ctimeMs: Maybe<FloatQueryOperatorInput>;
	atime: Maybe<DateQueryOperatorInput>;
	mtime: Maybe<DateQueryOperatorInput>;
	ctime: Maybe<DateQueryOperatorInput>;
	birthtime: Maybe<DateQueryOperatorInput>;
	birthtimeMs: Maybe<FloatQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
	filter: Maybe<FileFilterInput>;
	sort: Maybe<FileSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
	sourceInstanceName: Maybe<StringQueryOperatorInput>;
	absolutePath: Maybe<StringQueryOperatorInput>;
	relativePath: Maybe<StringQueryOperatorInput>;
	extension: Maybe<StringQueryOperatorInput>;
	size: Maybe<IntQueryOperatorInput>;
	prettySize: Maybe<StringQueryOperatorInput>;
	modifiedTime: Maybe<DateQueryOperatorInput>;
	accessTime: Maybe<DateQueryOperatorInput>;
	changeTime: Maybe<DateQueryOperatorInput>;
	birthTime: Maybe<DateQueryOperatorInput>;
	root: Maybe<StringQueryOperatorInput>;
	dir: Maybe<StringQueryOperatorInput>;
	base: Maybe<StringQueryOperatorInput>;
	ext: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	relativeDirectory: Maybe<StringQueryOperatorInput>;
	dev: Maybe<IntQueryOperatorInput>;
	mode: Maybe<IntQueryOperatorInput>;
	nlink: Maybe<IntQueryOperatorInput>;
	uid: Maybe<IntQueryOperatorInput>;
	gid: Maybe<IntQueryOperatorInput>;
	rdev: Maybe<IntQueryOperatorInput>;
	ino: Maybe<FloatQueryOperatorInput>;
	atimeMs: Maybe<FloatQueryOperatorInput>;
	mtimeMs: Maybe<FloatQueryOperatorInput>;
	ctimeMs: Maybe<FloatQueryOperatorInput>;
	atime: Maybe<DateQueryOperatorInput>;
	mtime: Maybe<DateQueryOperatorInput>;
	ctime: Maybe<DateQueryOperatorInput>;
	birthtime: Maybe<DateQueryOperatorInput>;
	birthtimeMs: Maybe<FloatQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
	filter: Maybe<DirectoryFilterInput>;
	sort: Maybe<DirectorySortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
	buildTime: Maybe<DateQueryOperatorInput>;
	siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
	port: Maybe<IntQueryOperatorInput>;
	host: Maybe<StringQueryOperatorInput>;
	polyfill: Maybe<BooleanQueryOperatorInput>;
	pathPrefix: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
	filter: Maybe<SiteFilterInput>;
	sort: Maybe<SiteSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteFunctionArgs = {
	functionRoute: Maybe<StringQueryOperatorInput>;
	pluginName: Maybe<StringQueryOperatorInput>;
	originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
	originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
	relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
	absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
	matchPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
	filter: Maybe<SiteFunctionFilterInput>;
	sort: Maybe<SiteFunctionSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
	path: Maybe<StringQueryOperatorInput>;
	component: Maybe<StringQueryOperatorInput>;
	internalComponentName: Maybe<StringQueryOperatorInput>;
	componentChunkName: Maybe<StringQueryOperatorInput>;
	matchPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
	context: Maybe<SitePageContextFilterInput>;
	pluginCreator: Maybe<SitePluginFilterInput>;
	pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
	filter: Maybe<SitePageFilterInput>;
	sort: Maybe<SitePageSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QueryPrismicEmbedTypeArgs = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicEmbedTypeArgs = {
	filter: Maybe<PrismicEmbedTypeFilterInput>;
	sort: Maybe<PrismicEmbedTypeSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QueryPrismicTypePathTypeArgs = {
	path: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicTypePathTypeArgs = {
	filter: Maybe<PrismicTypePathTypeFilterInput>;
	sort: Maybe<PrismicTypePathTypeSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QueryPrismicPageArgs = {
	uid: Maybe<StringQueryOperatorInput>;
	dataRaw: Maybe<JsonQueryOperatorInput>;
	prismicId: Maybe<IdQueryOperatorInput>;
	alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
	first_publication_date: Maybe<DateQueryOperatorInput>;
	href: Maybe<StringQueryOperatorInput>;
	lang: Maybe<StringQueryOperatorInput>;
	last_publication_date: Maybe<DateQueryOperatorInput>;
	tags: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	url: Maybe<StringQueryOperatorInput>;
	_previewable: Maybe<IdQueryOperatorInput>;
	gatsbyPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicPageArgs = {
	filter: Maybe<PrismicPageFilterInput>;
	sort: Maybe<PrismicPageSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	resolve: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
	pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
	nodeAPIs: Maybe<StringQueryOperatorInput>;
	browserAPIs: Maybe<StringQueryOperatorInput>;
	ssrAPIs: Maybe<StringQueryOperatorInput>;
	pluginFilepath: Maybe<StringQueryOperatorInput>;
	packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
	filter: Maybe<SitePluginFilterInput>;
	sort: Maybe<SitePluginSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
	filter: Maybe<SiteBuildMetadataFilterInput>;
	sort: Maybe<SiteBuildMetadataSortInput>;
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
	buildTime: Maybe<Scalars["Date"]>;
	siteMetadata: Maybe<SiteSiteMetadata>;
	port: Maybe<Scalars["Int"]>;
	host: Maybe<Scalars["String"]>;
	polyfill: Maybe<Scalars["Boolean"]>;
	pathPrefix: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type SiteBuildTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
	formatString: Maybe<Scalars["String"]>;
	fromNow: Maybe<Scalars["Boolean"]>;
	difference: Maybe<Scalars["String"]>;
	locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteBuildMetadataEdge>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
	next: Maybe<SiteBuildMetadata>;
	node: SiteBuildMetadata;
	previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	BuildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteBuildMetadataEdge>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
	fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteEdge>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: SiteFieldsEnum;
};

export type SiteEdge = {
	next: Maybe<Site>;
	node: Site;
	previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
	BuildTime = "buildTime",
	SiteMetadataTitle = "siteMetadata___title",
	SiteMetadataDescription = "siteMetadata___description",
	Port = "port",
	Host = "host",
	Polyfill = "polyfill",
	PathPrefix = "pathPrefix",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type SiteFilterInput = {
	buildTime: Maybe<DateQueryOperatorInput>;
	siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
	port: Maybe<IntQueryOperatorInput>;
	host: Maybe<StringQueryOperatorInput>;
	polyfill: Maybe<BooleanQueryOperatorInput>;
	pathPrefix: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
	functionRoute: Scalars["String"];
	pluginName: Scalars["String"];
	originalAbsoluteFilePath: Scalars["String"];
	originalRelativeFilePath: Scalars["String"];
	relativeCompiledFilePath: Scalars["String"];
	absoluteCompiledFilePath: Scalars["String"];
	matchPath: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type SiteFunctionConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteFunctionEdge>;
	nodes: Array<SiteFunction>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
	next: Maybe<SiteFunction>;
	node: SiteFunction;
	previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
	FunctionRoute = "functionRoute",
	PluginName = "pluginName",
	OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
	OriginalRelativeFilePath = "originalRelativeFilePath",
	RelativeCompiledFilePath = "relativeCompiledFilePath",
	AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
	MatchPath = "matchPath",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
}

export type SiteFunctionFilterInput = {
	functionRoute: Maybe<StringQueryOperatorInput>;
	pluginName: Maybe<StringQueryOperatorInput>;
	originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
	originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
	relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
	absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
	matchPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteFunctionEdge>;
	nodes: Array<SiteFunction>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type SiteFunctionSortInput = {
	fields: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SiteEdge>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
	path: Scalars["String"];
	component: Scalars["String"];
	internalComponentName: Scalars["String"];
	componentChunkName: Scalars["String"];
	matchPath: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
	context: Maybe<SitePageContext>;
	pluginCreator: Maybe<SitePlugin>;
	pluginCreatorId: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SitePageEdge>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: SitePageFieldsEnum;
};

export type SitePageContext = {
	id: Maybe<Scalars["String"]>;
	url: Maybe<Scalars["String"]>;
	_xparams: Maybe<SitePageContext_Xparams>;
};

export type SitePageContextFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	url: Maybe<StringQueryOperatorInput>;
	_xparams: Maybe<SitePageContext_XparamsFilterInput>;
};

export type SitePageContext_Xparams = {
	url: Maybe<Scalars["String"]>;
};

export type SitePageContext_XparamsFilterInput = {
	url: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
	next: Maybe<SitePage>;
	node: SitePage;
	previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
	Path = "path",
	Component = "component",
	InternalComponentName = "internalComponentName",
	ComponentChunkName = "componentChunkName",
	MatchPath = "matchPath",
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
	ContextId = "context___id",
	ContextUrl = "context___url",
	ContextXparamsUrl = "context____xparams___url",
	PluginCreatorId = "pluginCreator___id",
	PluginCreatorParentId = "pluginCreator___parent___id",
	PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
	PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
	PluginCreatorParentChildren = "pluginCreator___parent___children",
	PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
	PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
	PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
	PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
	PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
	PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
	PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
	PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
	PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
	PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
	PluginCreatorChildren = "pluginCreator___children",
	PluginCreatorChildrenId = "pluginCreator___children___id",
	PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
	PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
	PluginCreatorChildrenChildren = "pluginCreator___children___children",
	PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
	PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
	PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
	PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
	PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
	PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
	PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
	PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
	PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
	PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
	PluginCreatorInternalContent = "pluginCreator___internal___content",
	PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorVersion = "pluginCreator___version",
	PluginCreatorPluginOptionsRepositoryName = "pluginCreator___pluginOptions___repositoryName",
	PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
	PluginCreatorPluginOptionsCustomTypeModels = "pluginCreator___pluginOptions___customTypeModels",
	PluginCreatorPluginOptionsCustomTypeModelsId = "pluginCreator___pluginOptions___customTypeModels___id",
	PluginCreatorPluginOptionsCustomTypeModelsLabel = "pluginCreator___pluginOptions___customTypeModels___label",
	PluginCreatorPluginOptionsCustomTypeModelsRepeatable = "pluginCreator___pluginOptions___customTypeModels___repeatable",
	PluginCreatorPluginOptionsSharedSliceModels = "pluginCreator___pluginOptions___sharedSliceModels",
	PluginCreatorPluginOptionsSharedSliceModelsId = "pluginCreator___pluginOptions___sharedSliceModels___id",
	PluginCreatorPluginOptionsSharedSliceModelsType = "pluginCreator___pluginOptions___sharedSliceModels___type",
	PluginCreatorPluginOptionsSharedSliceModelsName = "pluginCreator___pluginOptions___sharedSliceModels___name",
	PluginCreatorPluginOptionsSharedSliceModelsDescription = "pluginCreator___pluginOptions___sharedSliceModels___description",
	PluginCreatorPluginOptionsSharedSliceModelsVariations = "pluginCreator___pluginOptions___sharedSliceModels___variations",
	PluginCreatorPluginOptionsApiEndpoint = "pluginCreator___pluginOptions___apiEndpoint",
	PluginCreatorPluginOptionsLang = "pluginCreator___pluginOptions___lang",
	PluginCreatorPluginOptionsImageImgixParamsAuto = "pluginCreator___pluginOptions___imageImgixParams___auto",
	PluginCreatorPluginOptionsImageImgixParamsFit = "pluginCreator___pluginOptions___imageImgixParams___fit",
	PluginCreatorPluginOptionsImageImgixParamsQ = "pluginCreator___pluginOptions___imageImgixParams___q",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsW = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___w",
	PluginCreatorPluginOptionsImagePlaceholderImgixParamsBlur = "pluginCreator___pluginOptions___imagePlaceholderImgixParams___blur",
	PluginCreatorPluginOptionsPromptForAccessToken = "pluginCreator___pluginOptions___promptForAccessToken",
	PluginCreatorPluginOptionsToolbar = "pluginCreator___pluginOptions___toolbar",
	PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
	PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
	PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
	PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
	PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
	PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
	PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
	PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
	PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
	PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
	PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
	PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
	PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
	PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
	PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
	PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
	PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
	PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
	PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
	PluginCreatorId = "pluginCreatorId",
}

export type SitePageFilterInput = {
	path: Maybe<StringQueryOperatorInput>;
	component: Maybe<StringQueryOperatorInput>;
	internalComponentName: Maybe<StringQueryOperatorInput>;
	componentChunkName: Maybe<StringQueryOperatorInput>;
	matchPath: Maybe<StringQueryOperatorInput>;
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
	context: Maybe<SitePageContextFilterInput>;
	pluginCreator: Maybe<SitePluginFilterInput>;
	pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SitePageEdge>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
	fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
	id: Scalars["ID"];
	parent: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	resolve: Maybe<Scalars["String"]>;
	name: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
	pluginOptions: Maybe<SitePluginPluginOptions>;
	nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
	browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
	ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
	pluginFilepath: Maybe<Scalars["String"]>;
	packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SitePluginEdge>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	max: Maybe<Scalars["Float"]>;
	min: Maybe<Scalars["Float"]>;
	sum: Maybe<Scalars["Float"]>;
	group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
	skip: Maybe<Scalars["Int"]>;
	limit: Maybe<Scalars["Int"]>;
	field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
	next: Maybe<SitePlugin>;
	node: SitePlugin;
	previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
	Id = "id",
	ParentId = "parent___id",
	ParentParentId = "parent___parent___id",
	ParentParentParentId = "parent___parent___parent___id",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentChildren = "parent___children",
	ParentChildrenId = "parent___children___id",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	Children = "children",
	ChildrenId = "children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentParentId = "children___parent___parent___id",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenChildren = "children___children",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Resolve = "resolve",
	Name = "name",
	Version = "version",
	PluginOptionsRepositoryName = "pluginOptions___repositoryName",
	PluginOptionsAccessToken = "pluginOptions___accessToken",
	PluginOptionsCustomTypeModels = "pluginOptions___customTypeModels",
	PluginOptionsCustomTypeModelsId = "pluginOptions___customTypeModels___id",
	PluginOptionsCustomTypeModelsLabel = "pluginOptions___customTypeModels___label",
	PluginOptionsCustomTypeModelsRepeatable = "pluginOptions___customTypeModels___repeatable",
	PluginOptionsSharedSliceModels = "pluginOptions___sharedSliceModels",
	PluginOptionsSharedSliceModelsId = "pluginOptions___sharedSliceModels___id",
	PluginOptionsSharedSliceModelsType = "pluginOptions___sharedSliceModels___type",
	PluginOptionsSharedSliceModelsName = "pluginOptions___sharedSliceModels___name",
	PluginOptionsSharedSliceModelsDescription = "pluginOptions___sharedSliceModels___description",
	PluginOptionsSharedSliceModelsVariations = "pluginOptions___sharedSliceModels___variations",
	PluginOptionsSharedSliceModelsVariationsId = "pluginOptions___sharedSliceModels___variations___id",
	PluginOptionsSharedSliceModelsVariationsName = "pluginOptions___sharedSliceModels___variations___name",
	PluginOptionsSharedSliceModelsVariationsDocUrl = "pluginOptions___sharedSliceModels___variations___docURL",
	PluginOptionsSharedSliceModelsVariationsVersion = "pluginOptions___sharedSliceModels___variations___version",
	PluginOptionsSharedSliceModelsVariationsDescription = "pluginOptions___sharedSliceModels___variations___description",
	PluginOptionsApiEndpoint = "pluginOptions___apiEndpoint",
	PluginOptionsLang = "pluginOptions___lang",
	PluginOptionsImageImgixParamsAuto = "pluginOptions___imageImgixParams___auto",
	PluginOptionsImageImgixParamsFit = "pluginOptions___imageImgixParams___fit",
	PluginOptionsImageImgixParamsQ = "pluginOptions___imageImgixParams___q",
	PluginOptionsImagePlaceholderImgixParamsW = "pluginOptions___imagePlaceholderImgixParams___w",
	PluginOptionsImagePlaceholderImgixParamsBlur = "pluginOptions___imagePlaceholderImgixParams___blur",
	PluginOptionsPromptForAccessToken = "pluginOptions___promptForAccessToken",
	PluginOptionsToolbar = "pluginOptions___toolbar",
	PluginOptionsPath = "pluginOptions___path",
	PluginOptionsPathCheck = "pluginOptions___pathCheck",
	PluginOptionsAllExtensions = "pluginOptions___allExtensions",
	PluginOptionsIsTsx = "pluginOptions___isTSX",
	PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
	NodeApIs = "nodeAPIs",
	BrowserApIs = "browserAPIs",
	SsrApIs = "ssrAPIs",
	PluginFilepath = "pluginFilepath",
	PackageJsonName = "packageJson___name",
	PackageJsonDescription = "packageJson___description",
	PackageJsonVersion = "packageJson___version",
	PackageJsonMain = "packageJson___main",
	PackageJsonLicense = "packageJson___license",
	PackageJsonDependencies = "packageJson___dependencies",
	PackageJsonDependenciesName = "packageJson___dependencies___name",
	PackageJsonDependenciesVersion = "packageJson___dependencies___version",
	PackageJsonDevDependencies = "packageJson___devDependencies",
	PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
	PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
	PackageJsonPeerDependencies = "packageJson___peerDependencies",
	PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
	PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
	PackageJsonKeywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	parent: Maybe<NodeFilterInput>;
	children: Maybe<NodeFilterListInput>;
	internal: Maybe<InternalFilterInput>;
	resolve: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
	pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
	nodeAPIs: Maybe<StringQueryOperatorInput>;
	browserAPIs: Maybe<StringQueryOperatorInput>;
	ssrAPIs: Maybe<StringQueryOperatorInput>;
	pluginFilepath: Maybe<StringQueryOperatorInput>;
	packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
	totalCount: Scalars["Int"];
	edges: Array<SitePluginEdge>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	field: Scalars["String"];
	fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
	name: Maybe<Scalars["String"]>;
	description: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
	main: Maybe<Scalars["String"]>;
	license: Maybe<Scalars["String"]>;
	dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
	devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
	peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
	keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
	name: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
	name: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
	name: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
	name: Maybe<StringQueryOperatorInput>;
	description: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
	main: Maybe<StringQueryOperatorInput>;
	license: Maybe<StringQueryOperatorInput>;
	dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
	devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
	peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
	keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
	name: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
	repositoryName: Maybe<Scalars["String"]>;
	accessToken: Maybe<Scalars["String"]>;
	customTypeModels: Maybe<
		Array<Maybe<SitePluginPluginOptionsCustomTypeModels>>
	>;
	sharedSliceModels: Maybe<
		Array<Maybe<SitePluginPluginOptionsSharedSliceModels>>
	>;
	apiEndpoint: Maybe<Scalars["String"]>;
	lang: Maybe<Scalars["String"]>;
	imageImgixParams: Maybe<SitePluginPluginOptionsImageImgixParams>;
	imagePlaceholderImgixParams: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>;
	promptForAccessToken: Maybe<Scalars["Boolean"]>;
	toolbar: Maybe<Scalars["String"]>;
	path: Maybe<Scalars["String"]>;
	pathCheck: Maybe<Scalars["Boolean"]>;
	allExtensions: Maybe<Scalars["Boolean"]>;
	isTSX: Maybe<Scalars["Boolean"]>;
	jsxPragma: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsCustomTypeModels = {
	id: Maybe<Scalars["String"]>;
	label: Maybe<Scalars["String"]>;
	repeatable: Maybe<Scalars["Boolean"]>;
	json: Maybe<SitePluginPluginOptionsCustomTypeModelsJson>;
};

export type SitePluginPluginOptionsCustomTypeModelsFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	label: Maybe<StringQueryOperatorInput>;
	repeatable: Maybe<BooleanQueryOperatorInput>;
	json: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonFilterInput>;
};

export type SitePluginPluginOptionsCustomTypeModelsFilterListInput = {
	elemMatch: Maybe<SitePluginPluginOptionsCustomTypeModelsFilterInput>;
};

export type SitePluginPluginOptionsCustomTypeModelsJson = {
	Page: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPage>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonFilterInput = {
	Page: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageFilterInput>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPage = {
	uid: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageUid>;
	body: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBody>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBody = {
	type: Maybe<Scalars["String"]>;
	fieldset: Maybe<Scalars["String"]>;
	config: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfig>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfig = {
	choices: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoices>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoices = {
	call_to_action: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesCall_To_Action>;
	hero: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesHero>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesCall_To_Action =
	{
		type: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesCall_To_ActionFilterInput =
	{
		type: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesFilterInput =
	{
		call_to_action: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesCall_To_ActionFilterInput>;
		hero: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesHeroFilterInput>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesHero =
	{
		type: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesHeroFilterInput =
	{
		type: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigFilterInput =
	{
		choices: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigChoicesFilterInput>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageBodyFilterInput = {
	type: Maybe<StringQueryOperatorInput>;
	fieldset: Maybe<StringQueryOperatorInput>;
	config: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageFilterInput = {
	uid: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageUidFilterInput>;
	body: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageBodyFilterInput>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageUid = {
	type: Maybe<Scalars["String"]>;
	config: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageUidConfig>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageUidConfig = {
	label: Maybe<Scalars["String"]>;
	placeholder: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageUidConfigFilterInput =
	{
		label: Maybe<StringQueryOperatorInput>;
		placeholder: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsCustomTypeModelsJsonPageUidFilterInput = {
	type: Maybe<StringQueryOperatorInput>;
	config: Maybe<SitePluginPluginOptionsCustomTypeModelsJsonPageUidConfigFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
	repositoryName: Maybe<StringQueryOperatorInput>;
	accessToken: Maybe<StringQueryOperatorInput>;
	customTypeModels: Maybe<SitePluginPluginOptionsCustomTypeModelsFilterListInput>;
	sharedSliceModels: Maybe<SitePluginPluginOptionsSharedSliceModelsFilterListInput>;
	apiEndpoint: Maybe<StringQueryOperatorInput>;
	lang: Maybe<StringQueryOperatorInput>;
	imageImgixParams: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>;
	imagePlaceholderImgixParams: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>;
	promptForAccessToken: Maybe<BooleanQueryOperatorInput>;
	toolbar: Maybe<StringQueryOperatorInput>;
	path: Maybe<StringQueryOperatorInput>;
	pathCheck: Maybe<BooleanQueryOperatorInput>;
	allExtensions: Maybe<BooleanQueryOperatorInput>;
	isTSX: Maybe<BooleanQueryOperatorInput>;
	jsxPragma: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsImageImgixParams = {
	auto: Maybe<Scalars["String"]>;
	fit: Maybe<Scalars["String"]>;
	q: Maybe<Scalars["Int"]>;
};

export type SitePluginPluginOptionsImageImgixParamsFilterInput = {
	auto: Maybe<StringQueryOperatorInput>;
	fit: Maybe<StringQueryOperatorInput>;
	q: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsImagePlaceholderImgixParams = {
	w: Maybe<Scalars["Int"]>;
	blur: Maybe<Scalars["Int"]>;
};

export type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
	w: Maybe<IntQueryOperatorInput>;
	blur: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSharedSliceModels = {
	id: Maybe<Scalars["String"]>;
	type: Maybe<Scalars["String"]>;
	name: Maybe<Scalars["String"]>;
	description: Maybe<Scalars["String"]>;
	variations: Maybe<
		Array<Maybe<SitePluginPluginOptionsSharedSliceModelsVariations>>
	>;
};

export type SitePluginPluginOptionsSharedSliceModelsFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	type: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	description: Maybe<StringQueryOperatorInput>;
	variations: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsFilterListInput>;
};

export type SitePluginPluginOptionsSharedSliceModelsFilterListInput = {
	elemMatch: Maybe<SitePluginPluginOptionsSharedSliceModelsFilterInput>;
};

export type SitePluginPluginOptionsSharedSliceModelsVariations = {
	id: Maybe<Scalars["String"]>;
	name: Maybe<Scalars["String"]>;
	docURL: Maybe<Scalars["String"]>;
	version: Maybe<Scalars["String"]>;
	description: Maybe<Scalars["String"]>;
	primary: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimary>;
};

export type SitePluginPluginOptionsSharedSliceModelsVariationsFilterInput = {
	id: Maybe<StringQueryOperatorInput>;
	name: Maybe<StringQueryOperatorInput>;
	docURL: Maybe<StringQueryOperatorInput>;
	version: Maybe<StringQueryOperatorInput>;
	description: Maybe<StringQueryOperatorInput>;
	primary: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryFilterInput>;
};

export type SitePluginPluginOptionsSharedSliceModelsVariationsFilterListInput =
	{
		elemMatch: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsFilterInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimary = {
	title: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitle>;
	description: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescription>;
	buttonLink: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLink>;
	buttonText: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonText>;
	backgroundImage: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImage>;
};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImage =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageConfig>;
		type: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageConfig =
	{
		label: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageConfigFilterInput =
	{
		label: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageFilterInput =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageConfigFilterInput>;
		type: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLink =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkConfig>;
		type: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkConfig =
	{
		label: Maybe<Scalars["String"]>;
		placeholder: Maybe<Scalars["String"]>;
		allowTargetBlank: Maybe<Scalars["Boolean"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkConfigFilterInput =
	{
		label: Maybe<StringQueryOperatorInput>;
		placeholder: Maybe<StringQueryOperatorInput>;
		allowTargetBlank: Maybe<BooleanQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkFilterInput =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkConfigFilterInput>;
		type: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonText =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextConfig>;
		type: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextConfig =
	{
		label: Maybe<Scalars["String"]>;
		placeholder: Maybe<Scalars["String"]>;
		allowTargetBlank: Maybe<Scalars["Boolean"]>;
		single: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextConfigFilterInput =
	{
		label: Maybe<StringQueryOperatorInput>;
		placeholder: Maybe<StringQueryOperatorInput>;
		allowTargetBlank: Maybe<BooleanQueryOperatorInput>;
		single: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextFilterInput =
	{
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextConfigFilterInput>;
		type: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescription =
	{
		type: Maybe<Scalars["String"]>;
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionConfig>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionConfig =
	{
		label: Maybe<Scalars["String"]>;
		placeholder: Maybe<Scalars["String"]>;
		allowTargetBlank: Maybe<Scalars["Boolean"]>;
		single: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionConfigFilterInput =
	{
		label: Maybe<StringQueryOperatorInput>;
		placeholder: Maybe<StringQueryOperatorInput>;
		allowTargetBlank: Maybe<BooleanQueryOperatorInput>;
		single: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionFilterInput =
	{
		type: Maybe<StringQueryOperatorInput>;
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionConfigFilterInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryFilterInput =
	{
		title: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleFilterInput>;
		description: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryDescriptionFilterInput>;
		buttonLink: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonLinkFilterInput>;
		buttonText: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryButtonTextFilterInput>;
		backgroundImage: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryBackgroundImageFilterInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitle = {
	type: Maybe<Scalars["String"]>;
	config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleConfig>;
};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleConfig =
	{
		single: Maybe<Scalars["String"]>;
		label: Maybe<Scalars["String"]>;
		placeholder: Maybe<Scalars["String"]>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleConfigFilterInput =
	{
		single: Maybe<StringQueryOperatorInput>;
		label: Maybe<StringQueryOperatorInput>;
		placeholder: Maybe<StringQueryOperatorInput>;
	};

export type SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleFilterInput =
	{
		type: Maybe<StringQueryOperatorInput>;
		config: Maybe<SitePluginPluginOptionsSharedSliceModelsVariationsPrimaryTitleConfigFilterInput>;
	};

export type SitePluginSortInput = {
	fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
	title: Maybe<Scalars["String"]>;
	description: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
	title: Maybe<StringQueryOperatorInput>;
	description: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
	fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
	order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
	Asc = "ASC",
	Desc = "DESC",
}

export type StringQueryOperatorInput = {
	eq: Maybe<Scalars["String"]>;
	ne: Maybe<Scalars["String"]>;
	in: Maybe<Array<Maybe<Scalars["String"]>>>;
	nin: Maybe<Array<Maybe<Scalars["String"]>>>;
	regex: Maybe<Scalars["String"]>;
	glob: Maybe<Scalars["String"]>;
};

export type GatsbyImgixFluidFragment = Pick<
	ImgixFluid,
	| "aspectRatio"
	| "src"
	| "srcWebp"
	| "srcSet"
	| "srcSetWebp"
	| "sizes"
	| "base64"
>;

export type GatsbyImgixFluid_NoBase64Fragment = Pick<
	ImgixFluid,
	"aspectRatio" | "src" | "srcWebp" | "srcSet" | "srcSetWebp" | "sizes"
>;

export type GatsbyImgixFixedFragment = Pick<
	ImgixFixed,
	"base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImgixFixed_NoBase64Fragment = Pick<
	ImgixFixed,
	"width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type PrismicPageTemplateQueryVariables = Exact<{
	id: Scalars["String"];
}>;

export type PrismicPageTemplateQuery = {
	prismicPage: Maybe<
		Pick<PrismicPage, "_previewable"> & {
			data: Maybe<{
				body: Array<
					| PrismicPageDataBody_PrismicCallToActionDefault_Fragment
					| PrismicPageDataBody_PrismicCallToActionWithButton_Fragment
					| PrismicPageDataBody_PrismicHeroDefault_Fragment
					| PrismicPageDataBody_PrismicHeroWithBackground_Fragment
				>;
			}>;
		}
	>;
};

type PrismicCallToAction_PrismicCallToActionDefault_Fragment =
	PrismicCallToActionDefaultFragment;

type PrismicCallToAction_PrismicCallToActionWithButton_Fragment =
	PrismicCallToActionWithButtonFragment;

type PrismicCallToAction_PrismicHeroDefault_Fragment = {};

type PrismicCallToAction_PrismicHeroWithBackground_Fragment = {};

export type PrismicCallToActionFragment =
	| PrismicCallToAction_PrismicCallToActionDefault_Fragment
	| PrismicCallToAction_PrismicCallToActionWithButton_Fragment
	| PrismicCallToAction_PrismicHeroDefault_Fragment
	| PrismicCallToAction_PrismicHeroWithBackground_Fragment;

export type PrismicCallToActionDefaultFragment = Pick<
	PrismicCallToActionDefault,
	"slice_type" | "variation"
> & {
	primary: {
		title: Maybe<Pick<PrismicStructuredTextType, "text">>;
		description: Maybe<Pick<PrismicStructuredTextType, "text">>;
	};
};

export type PrismicCallToActionWithButtonFragment = Pick<
	PrismicCallToActionWithButton,
	"slice_type" | "variation"
> & {
	primary: {
		title: Maybe<Pick<PrismicStructuredTextType, "text">>;
		description: Maybe<Pick<PrismicStructuredTextType, "text">>;
		buttonText: Maybe<Pick<PrismicStructuredTextType, "text">>;
		buttonLink: Maybe<Pick<PrismicLinkType, "url" | "target">>;
	};
};

type PrismicHero_PrismicCallToActionDefault_Fragment = {};

type PrismicHero_PrismicCallToActionWithButton_Fragment = {};

type PrismicHero_PrismicHeroDefault_Fragment = PrismicHeroDefaultFragment;

type PrismicHero_PrismicHeroWithBackground_Fragment =
	PrismicHeroWithBackgroundFragment;

export type PrismicHeroFragment =
	| PrismicHero_PrismicCallToActionDefault_Fragment
	| PrismicHero_PrismicCallToActionWithButton_Fragment
	| PrismicHero_PrismicHeroDefault_Fragment
	| PrismicHero_PrismicHeroWithBackground_Fragment;

export type PrismicHeroDefaultFragment = Pick<
	PrismicHeroDefault,
	"slice_type"
> & {
	primary: {
		title: Maybe<Pick<PrismicStructuredTextType, "text">>;
		description: Maybe<Pick<PrismicStructuredTextType, "text">>;
	};
};

export type PrismicHeroWithBackgroundFragment = Pick<
	PrismicHeroWithBackground,
	"slice_type"
> & {
	primary: {
		title: Maybe<Pick<PrismicStructuredTextType, "text">>;
		description: Maybe<Pick<PrismicStructuredTextType, "text">>;
		backgroundImage: Maybe<
			Pick<PrismicHeroWithBackgroundPrimaryBackgroundImageImageType, "url">
		>;
	};
};

type PrismicPageDataBody_PrismicCallToActionDefault_Fragment = Pick<
	PrismicCallToActionDefault,
	"slice_type" | "variation"
> &
	PrismicCallToAction_PrismicCallToActionDefault_Fragment &
	PrismicHero_PrismicCallToActionDefault_Fragment;

type PrismicPageDataBody_PrismicCallToActionWithButton_Fragment = Pick<
	PrismicCallToActionWithButton,
	"slice_type" | "variation"
> &
	PrismicCallToAction_PrismicCallToActionWithButton_Fragment &
	PrismicHero_PrismicCallToActionWithButton_Fragment;

type PrismicPageDataBody_PrismicHeroDefault_Fragment = Pick<
	PrismicHeroDefault,
	"slice_type" | "variation"
> &
	PrismicCallToAction_PrismicHeroDefault_Fragment &
	PrismicHero_PrismicHeroDefault_Fragment;

type PrismicPageDataBody_PrismicHeroWithBackground_Fragment = Pick<
	PrismicHeroWithBackground,
	"slice_type" | "variation"
> &
	PrismicCallToAction_PrismicHeroWithBackground_Fragment &
	PrismicHero_PrismicHeroWithBackground_Fragment;

export type PrismicPageDataBodyFragment =
	| PrismicPageDataBody_PrismicCallToActionDefault_Fragment
	| PrismicPageDataBody_PrismicCallToActionWithButton_Fragment
	| PrismicPageDataBody_PrismicHeroDefault_Fragment
	| PrismicPageDataBody_PrismicHeroWithBackground_Fragment;
