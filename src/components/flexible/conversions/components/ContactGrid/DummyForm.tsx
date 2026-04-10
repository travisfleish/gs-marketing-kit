// TODO : Clean up
// TODO : Integrate client forms

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import WpImage from "~/components/elements/Wp";

function DummyForm(props) {
	const { form } = props;
	const { heading, terms_and_conditions, form_success } = form;

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [termsAgreed, setTermsAgreed] = useState(false);

	const inputClasses =
		"contact-dummy-form__input px-4 py-3 bg-snow font-normal placeholder-navy/40 border-[1px] border-[#00000008] mt-2 text-navy rounded-lg w-full focus:border-transparent focus:outline-none focus:ring-0";
	const labelInputContainerClasses = "col-span-12 md:col-span-6";
	const labelClasses = "text-15 font-body text-navy font-medium";

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{
					opacity: 0,
					scale: 0.8,
					y: 20,
				}}
				animate={{
					opacity: 1,
					scale: 1,
					y: 0,
					transition: {
						duration: 0.25,
						ease: "easeInOut",
					},
				}}
				exit={{
					opacity: 0,
					scale: 0.8,
					y: 20,
					transition: {
						duration: 0.25,
						ease: "easeInOut",
					},
				}}
				className="contact-grid__dummy-form relative mx-auto max-w-[671px] rounded-xl bg-white p-6 md:aspect-[671/682] md:px-10 md:py-12"
			>
				{!isSubmitted ? (
					<form className="h-full w-full">
						<div className="flex flex-col items-start gap-8 md:gap-10">
							{/* Heading */}
							<h4 className="mx-auto text-center font-normal" dangerouslySetInnerHTML={{ __html: heading }} />

							{/* Fields */}
							<div className="grid w-full grid-cols-12 gap-4">
								{/* Full name */}
								<div className={labelInputContainerClasses}>
									<label htmlFor="full-name" className={labelClasses}>
										Full name
										<input name="full-name" type="text" placeholder="Enter full name" className={inputClasses} />
									</label>
								</div>

								{/* Work email */}
								<div className={labelInputContainerClasses}>
									<label htmlFor="work-email" className={labelClasses}>
										Work email
										<input name="work-email" type="text" placeholder="Enter work email" className={inputClasses} />
									</label>
								</div>

								{/* Company */}
								<div className={labelInputContainerClasses}>
									<label htmlFor="company" className={labelClasses}>
										Company
										<input name="company" type="text" placeholder="Enter company" className={inputClasses} />
									</label>
								</div>

								{/* Your sport area */}
								<div className={labelInputContainerClasses}>
									<label htmlFor="sport-area" className={labelClasses}>
										Your sport area
										<select name="sport-area" className={inputClasses}>
											<option value="" disabled selected>
												Select one
											</option>
											<option value="football">Football</option>
											<option value="basketball">Basketball</option>
											<option value="american football">American Football</option>
											<option value="hockey">Hockey</option>
										</select>
									</label>
								</div>

								{/* Message */}
								<div className="col-span-12">
									<label htmlFor="message" className={labelClasses}>
										Message
										<textarea
											name="message"
											placeholder="Your message"
											className="h-34 col-span-12 mt-2 min-h-32 w-full rounded-lg border-[1px] border-none border-[#00000008] bg-snow px-4 py-3 placeholder-navy/40 focus:border-transparent focus:outline-none focus:ring-0"
										/>
									</label>
								</div>
							</div>

							{/* Terms & Conditions */}
							<div className="flex w-full items-center justify-start gap-3">
								{/* Tick input */}
								<input
									onChange={() => {
										setTermsAgreed((prev) => !prev);
									}}
									type="checkbox"
									id="terms-and-conditions"
									name="terms-and-conditions"
									className="h-[18px] w-[18px] cursor-pointer rounded-sm border border-navy/20 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
								/>

								{/* Text */}
								<div className="text-14 text-[#0d122699]" dangerouslySetInnerHTML={{ __html: terms_and_conditions }} />
							</div>

							{/* Submit button */}
							<button
								type="button"
								onClick={() => {
									setIsSubmitted(true);
								}}
								className="text-17 mx-auto rounded-[125rem] bg-navy px-12 py-4.25 text-center text-white transition-colors duration-300 ease-in-out hover:bg-blue"
							>
								Submit
							</button>
						</div>
					</form>
				) : (
					<m.div
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.4,
								ease: "easeInOut",
							},
						}}
						className="flex h-full w-full flex-col items-center justify-center"
					>
						{/* Image */}
						{!!form_success?.image && <WpImage image={form_success.image} className="mb-8 aspect-[90/48] max-w-[90px]" />}

						{/* Heading */}
						{!!form_success?.heading && <h4 className="mb-4 text-center font-normal" dangerouslySetInnerHTML={{ __html: form_success.heading }} />}

						{/* Text */}
						{!!form_success?.text && (
							<p className="text-18 max-w-[80%] text-center font-body text-navy/80 md:max-w-[65%]" dangerouslySetInnerHTML={{ __html: form_success.text }} />
						)}
					</m.div>
				)}
			</m.div>
		</LazyMotion>
	);
}

export default DummyForm;
