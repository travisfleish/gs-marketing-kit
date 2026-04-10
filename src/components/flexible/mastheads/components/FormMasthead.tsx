import React from "react";
// helpers
import { getTextColor } from "~/components/ColorHelpers";

interface FormMastheadProps {
	content: {
		subheading?: string;
		heading: string;
		heading_tag?: string;
		content?: string;
	};
	spring_colour?: {
		colours?: string;
	};
	form_embed?: string;
	form_aspect_ratio?: string;
}

function getFormAspectRatio(aspect_ratio: string) {
	// switch (aspect_ratio) {
	// 	case "11/12":
	// 		return "aspect-[11/12]";
	// 	case "12/12":
	// 		return "aspect-[12/12]";
	// 	default:
	// 		return "aspect-[10/12]";
	// }
}

function FormMasthead({ content, form_embed, spring_colour, form_aspect_ratio }: FormMastheadProps) {
	const heading_tag = content?.heading_tag;
	const HeadingTag = (heading_tag as keyof React.JSX.IntrinsicElements) || "h2";

	return (
		<div className=" grid gap-y-10 pb-12 pt-8 md:grid-cols-2 md:items-center md:gap-x-6 md:pb-20 md:pt-4 lg:pb-[6.125rem]">
			{/* content */}
			<div>
				<div className="max-w-[30.875rem]">
					{content?.subheading && (
						<span className="text-15 mb-3 inline-flex font-body opacity-80 md:mb-6" dangerouslySetInnerHTML={{ __html: content?.subheading }} />
					)}
					<HeadingTag dangerouslySetInnerHTML={{ __html: content?.heading }} />
					{content?.content && <div className="text-prose prose prose-lg mt-3 md:mt-5" dangerouslySetInnerHTML={{ __html: content?.content }} />}
				</div>
			</div>
			{/* form */}
			<div className="relative md:pl-5">
				{/* form embed here */}
				<div
					className={`relative z-10 mx-auto  max-w-[32.5rem] rounded-md bg-lightGrey px-6 py-7 md:mr-0 md:rounded-[.75rem] ${getFormAspectRatio(form_aspect_ratio)}`}
				>
					{!!form_embed && <div className="h-full w-full overflow-scroll rounded-md md:rounded-[.75rem]" dangerouslySetInnerHTML={{ __html: form_embed }} />}
				</div>

				{/* springs */}
				{spring_colour?.colours !== "none" && (
					<div
						className={`absolute inset-0 bottom-[-3rem] left-[-1.5rem] right-[-1.5rem] flex items-end md:bottom-[-5rem] md:left-0 lg:bottom-[-6.125rem] lg:right-[-5rem] ${getTextColor(spring_colour?.colours)}`}
					>
						<div className="h-auto w-full">
							<svg width="100%" height="100%" viewBox="0 0 700 487" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M478 1.00002L935 1" stroke="currentColor" strokeWidth="0.49655" />
								<path d="M478 19.5807L935 19.5806" stroke="currentColor" strokeWidth="0.9931" />
								<path d="M478 38.1613L935 38.1613" stroke="currentColor" strokeWidth="1.48965" />
								<path d="M478 56.742L935 56.7419" stroke="currentColor" strokeWidth="1.9862" />
								<path d="M478 75.3226L935 75.3226" stroke="currentColor" strokeWidth="2.48275" />
								<path d="M478 93.9032L935 93.9032" stroke="currentColor" strokeWidth="2.9793" />
								<path d="M478 112.484L935 112.484" stroke="currentColor" strokeWidth="3.47585" />
								<path d="M478 131.065L935 131.065" stroke="currentColor" strokeWidth="3.9724" />
								<path d="M478 149.645L935 149.645" stroke="currentColor" strokeWidth="4.46895" />
								<path d="M478 168.226L935 168.226" stroke="currentColor" strokeWidth="4.9655" />
								<path d="M478 186.806L935 186.806" stroke="currentColor" strokeWidth="5.46205" />
								<path d="M478 205.387L935 205.387" stroke="currentColor" strokeWidth="5.9586" />
								<path d="M478 223.968L935 223.968" stroke="currentColor" strokeWidth="6.45515" />
								<path d="M478 242.548L935 242.548" stroke="currentColor" strokeWidth="6.9517" />
								<path d="M478 261.129L935 261.129" stroke="currentColor" strokeWidth="7.44825" />
								<path d="M478 279.71L935 279.71" stroke="currentColor" strokeWidth="7.9448" />
								<path d="M478 298.29L935 298.29" stroke="currentColor" strokeWidth="8.44135" />
								<path d="M478 316.871L935 316.871" stroke="currentColor" strokeWidth="8.93789" />
								<path d="M478 335.452L935 335.452" stroke="currentColor" strokeWidth="9.43444" />
								<path d="M478 354.032L935 354.032" stroke="currentColor" strokeWidth="9.93099" />
								<path d="M478 372.613L935 372.613" stroke="currentColor" strokeWidth="10.4275" />
								<path d="M478 391.194L935 391.194" stroke="currentColor" strokeWidth="10.9241" />
								<path d="M478 409.774L935 409.774" stroke="currentColor" strokeWidth="11.4206" />
								<path d="M478 428.355L935 428.355" stroke="currentColor" strokeWidth="11.9172" />
								<path d="M478 446.936L935 446.936" stroke="currentColor" strokeWidth="12.4137" />
								<path d="M478 465.516L935 465.516" stroke="currentColor" strokeWidth="12.9103" />
								<path d="M478 484.097L935 484.097" stroke="currentColor" strokeWidth="13.4068" />
								<path d="M0 205L547 205" stroke="currentColor" strokeWidth="0.49655" />
								<path d="M0 223.581L547 223.581" stroke="currentColor" strokeWidth="0.9931" />
								<path d="M0 242.161L547 242.161" stroke="currentColor" strokeWidth="1.48965" />
								<path d="M0 260.742L547 260.742" stroke="currentColor" strokeWidth="1.9862" />
								<path d="M0 279.323L547 279.323" stroke="currentColor" strokeWidth="2.48275" />
								<path d="M0 297.903L547 297.903" stroke="currentColor" strokeWidth="2.9793" />
								<path d="M0 316.484L547 316.484" stroke="currentColor" strokeWidth="3.47585" />
								<path d="M0 335.065L547 335.065" stroke="currentColor" strokeWidth="3.9724" />
								<path d="M0 353.645L547 353.645" stroke="currentColor" strokeWidth="4.46895" />
								<path d="M0 372.226L547 372.226" stroke="currentColor" strokeWidth="4.9655" />
								<path d="M0 390.807L547 390.806" stroke="currentColor" strokeWidth="5.46205" />
								<path d="M0 409.387L547 409.387" stroke="currentColor" strokeWidth="5.9586" />
								<path d="M0 427.968L547 427.968" stroke="currentColor" strokeWidth="6.45515" />
								<path d="M0 446.548L547 446.548" stroke="currentColor" strokeWidth="6.9517" />
								<path d="M0 465.129L547 465.129" stroke="currentColor" strokeWidth="7.44825" />
								<path d="M0 483.71L547 483.71" stroke="currentColor" strokeWidth="7.9448" />
							</svg>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default FormMasthead;
