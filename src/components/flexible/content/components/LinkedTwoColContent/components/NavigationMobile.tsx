import clsx from "clsx";
import { useRouter } from "next/router";
import { getBackgroundColor } from "~/components/ColorHelpers";
import parseSlug from "~/utils/parseSlug";

function NavigationMobile({ heading, sections, themeColor }) {
	const router = useRouter();
	const indicatorColor = getBackgroundColor(themeColor);

	return (
		<>
			<div className="flex flex-col bg-white md:hidden">
				{/* Heading */}
				<h5
					className="text-16 mx-auto mb-6 mt-10 text-center font-body"
					dangerouslySetInnerHTML={{
						__html: heading,
					}}
				/>
			</div>

			<div className="sticky top-0 z-10 flex flex-col bg-white md:hidden">
				{/* Navigation */}
				<div className="flex items-center gap-3 border-y border-[#0d12260d] pl-5 pr-2 md:mb-7">
					<span className={clsx(indicatorColor, "block h-[8px] w-[8px] rounded-full border")} />

					<select
						className="text-16 my-5 block w-full border-none font-medium focus:outline-none focus:ring-0"
						onChange={(e) => {
							router.push(`#${parseSlug(e.target.value)}`);
						}}
					>
						{sections?.length > 0 &&
							sections?.map((section) => {
								const { section_heading } = section;

								return (
									<option value={`#${parseSlug(section_heading)}`} key={section_heading}>
										{section_heading}
									</option>
								);
							})}
					</select>
				</div>
			</div>
		</>
	);
}

export default NavigationMobile;
