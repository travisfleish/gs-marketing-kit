import clsx from "clsx";
import { useRouter } from "next/router";
import parseSlug from "~/utils/parseSlug";
import { getCapitalisedString } from "~/utils/text";

function CustomerNavMobile({ asideNavLinks }: { asideNavLinks: any }) {
	const router = useRouter();

	return (
		<aside className="sticky top-0 z-10 flex w-full flex-col bg-white md:hidden">
			{/* Navigation */}
			<div className="flex items-center gap-3 border-y border-[#0d12260d] pl-5 pr-2 md:mb-7">
				<span className={clsx("bg-blue", "block h-[8px] w-[8px] rounded-full border")} />

				<select
					className="text-16 my-5 block w-full border-none font-medium focus:outline-none focus:ring-0"
					onChange={(e) => {
						router.push(`#${parseSlug(e.target.value)}`);
					}}
				>
					{asideNavLinks?.length > 0 &&
						asideNavLinks?.map((item) => {
							const { label, link } = item;

							return (
								<option value={`#${parseSlug(link)}`} key={link}>
									{getCapitalisedString(label)}
								</option>
							);
						})}
				</select>
			</div>
		</aside>
	);
}

export default CustomerNavMobile;
