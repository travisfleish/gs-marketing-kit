const getPostPreviewImage = (post: any) =>
	post?.acf?.preview?.thumbnail ?? post?.preview?.thumbnail ?? { ...post?.featured_image, url: post?.featured_image?.src ?? "" };

export default getPostPreviewImage;
