import React from "react";
import PostAsideSubscribe from "~/components/elements/PostAsideSubscribe";
// blocks
// import { SubscribeForm } from "~/components/templates/SingleResource/components/BlogBody";

interface SubscribeContentProps {
	content?: string;
	form_embed?: {
		heading?: string;
		embed: string;
	};
}

function SubscribeContent({ content, form_embed }: SubscribeContentProps) {
	return (
		<div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
			<div className="text-prose prose md:col-span-7" dangerouslySetInnerHTML={{ __html: content }} />
			<div className="md:col-span-5">
				<div className="md:ml-auto md:max-w-[20.875rem]">
					{/* <SubscribeForm heading={form_embded?.heading} /> */}
					<PostAsideSubscribe heading={form_embed?.heading} embed={form_embed?.embed} />
				</div>
			</div>
		</div>
	);
}

export default SubscribeContent;
