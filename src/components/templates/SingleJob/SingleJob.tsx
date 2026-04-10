// elements
import Link from "next/link";
import Layout from "~/components/templates/Layout";
import { CircleArrow } from "~/components/elements/Icons";

// form
import FormBuilder from "./FormBuilder";

function SingleJob(data) {
	const { jobContent } = data;
	const he = require("he");

	// console.log(data);

	const passData = {
		...data,
		page: {
			seo: {
				indexable: 0,
				title: `Job | ${jobContent?.title} | Genius Sports`,
				description: "",
			},
		},
	};

	// content
	const parseContent = he.decode(jobContent.content);

	// form
	const applicationForm = [];
	applicationForm.push(jobContent?.questions);
	applicationForm.push(jobContent?.location_questions);
	applicationForm.push(jobContent?.demographic_questions);

	return (
		<Layout data={passData} headerColorOverride="blue" footerColorOverride="white">
			{/* hero */}
			<section className="bg-blue pb-10 pt-6 text-white md:pb-16 md:pt-8">
				<div className="container space-y-6">
					{/* backlink */}
					<Link className="group mb-6 flex w-fit justify-start gap-4 font-semibold md:mb-8 lg:mb-10" href="/careers/">
						<div className="inline-flex h-6 w-6 rotate-[225deg] items-center justify-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-lightBlue group-hover:text-navy">
							<CircleArrow />
						</div>
						Take me back
					</Link>
					{/* tags */}
					<div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
						<span className="font-15 font-body font-normal" dangerouslySetInnerHTML={{ __html: jobContent.location.name }} />

						{jobContent.departments?.length > 0 &&
							jobContent.departments?.map((dep, index) => (
								<span
									key={`category-${index}`}
									className="font-15 rounded bg-lightGrey px-[10px] py-1 font-body font-medium text-navy"
									dangerouslySetInnerHTML={{
										__html: dep.name,
									}}
								/>
							))}
					</div>
					<h1 className="text-h2 font-regular max-w-[48rem]" dangerouslySetInnerHTML={{ __html: jobContent.title }} />
				</div>
			</section>
			{/* body */}
			<section className="bg-white py-10 text-navy md:py-20">
				<div className="container grid gap-y-10 md:grid-cols-12 md:gap-x-10">
					<div className="text-prose prose--li-purple prose-light greenhouse-prose prose md:col-span-6" dangerouslySetInnerHTML={{ __html: parseContent }} />
					{/* form */}
					<div className="md:col-span-6 md:pt-6">
						<div className="w-full rounded-lg bg-lightGrey p-8 md:ml-auto">
							<div className="pb-5 md:mb-6">
								<h2 className="text-h4 mb-3 text-blue md:mb-4" dangerouslySetInnerHTML={{ __html: "Apply for this job" }} />
								<p className="opacity-80" dangerouslySetInnerHTML={{ __html: "Fields marked with * are mandatory" }} />
							</div>
							<FormBuilder formType="careers" formName={jobContent.title} form={applicationForm} submitLabel="Submit form" endpoint={jobContent?.id} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default SingleJob;
