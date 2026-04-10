/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable  no-param-reassign */
/* eslint-disable no-continue */

import React, { useState } from "react";
import isEqual from "lodash/isEqual";
import { useForm } from "react-hook-form";
import Button from "~/components/elements/buttons/Button";
import { getButtonLinkProps } from "~/utils/links";
import trackEvent from "~/utils/trackEvent";
import { useRouter } from "next/navigation";
import fetch from "isomorphic-fetch";
import FormField from "./FormField";

export default function FormBuilder({ form, formName = "", formType = "default", submitLabel, endpoint }) {
	// Form handler
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();
	const formObj = useForm({
		mode: "onChange",
	});
	const {
		register,
		getFieldState,
		handleSubmit,
		watch,
		control,
		getValues,
		formState: { errors },
	} = formObj;

	const onSubmit = async (data) => {
		try {
			const formData = new FormData();

			Object.keys(data).forEach((key) => {
				if (data[key] instanceof FileList) {
					Array.from(data[key]).forEach((file) => {
						formData.append(key, file);
					});
				} else if (Array.isArray(data[key]) && data[key][0]?.label && data[key][0]?.value) {
					// Format multi-select as separate array values
					data[key].forEach((item) => {
						formData.append(`${key}[]`, item.value);
					});
				} else {
					formData.append(key, data[key]);
				}
			});

			const response = await fetch(`https://gh-conn.internal-tools-production.i.geniussports.com/${endpoint}`, {
				method: "POST",
				body: formData,
			});

			const trackingEventName = formType !== "careers" ? "form_submit" : "job_form_submit";
			trackEvent(trackingEventName, {
				formData: {
					email: data.email,
					first_name: data.first_name,
					form_name: formName,
					phone: data.phone,
				},
				referrer: document?.referrer,
			});

			if (response.ok) {
				console.log("Success");
				router.push("/thank-you");
			} else {
				const errorResult = await response.json();
				console.error("Fetch error:", response, errorResult);
				throw new Error("Form submission failed");
			}
		} catch (error) {
			setErrorMessage("There has been an issue with your form submission");
			console.log("Error:", error);
		}
	};

	const blockSubmit = isEqual(errors, {});

	// Form styles
	const submitClasses = [
		"text-17 relative mx-auto mt-5 block w-full rounded-[125rem] bg-navy px-12 py-4.25 text-center text-white transition-colors duration-300 ease-in-out hover:bg-blue md:col-span-2",
	];

	const labelInputContainerClasses = "col-span-2";
	const labelClasses = "text-15 font-body text-navy font-medium";

	const submitProps = getButtonLinkProps({
		title: "Submit",
		button: {
			background_color: "navy",
			type: "default",
		},
	});

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
			})}
			noValidate
			className="grid w-full grid-cols-1 gap-y-4 md:gap-6"
		>
			{/* reg fields */}
			{form[0]?.length > 0 &&
				form[0]?.map((question, index) => (
					<div key={index} className={`${labelInputContainerClasses}`}>
						<label className={labelClasses}>
							{question?.label} {question?.required ? "*" : ""}
						</label>
						{question?.description && <div className="mb-2 text-navy/60" dangerouslySetInnerHTML={{ __html: question?.description }} />}
						{question?.fields?.map((field, i) => (
							<FormField
								key={i}
								formField={field}
								required={question?.required}
								label={question?.label}
								register={register}
								errors={errors}
								getFieldState={getFieldState}
								watch={watch}
								control={control}
							/>
						))}
					</div>
				))}
			{form[1]?.length > 0 &&
				form[1]?.slice(2)?.map((question, index) => (
					<div key={index} className={`${labelInputContainerClasses}`}>
						<label className={labelClasses}>
							{question?.label} {question?.required ? "*" : ""}
						</label>
						{question?.description && <div className="mb-2 text-navy/60" dangerouslySetInnerHTML={{ __html: question?.description }} />}
						{question?.fields?.map((field, i) => (
							<FormField
								key={i}
								formField={field}
								required={question?.required}
								label={question?.label}
								register={register}
								errors={errors}
								getFieldState={getFieldState}
								watch={watch}
								control={control}
							/>
						))}
					</div>
				))}
			<div className="">
				<h3 className="text-h7 mb-2" dangerouslySetInnerHTML={{ __html: form[2]?.header }} />
				<div className="prose-smaller prose" dangerouslySetInnerHTML={{ __html: form[2]?.description }} />
			</div>

			{form[2]?.questions?.length > 0 &&
				form[2]?.questions?.map((question, index) => (
					<div key={index} className={`${labelInputContainerClasses}`}>
						<label key={question.id} htmlFor={question.label} className={labelClasses}>
							<span dangerouslySetInnerHTML={{ __html: `${question?.label}  ${question?.required ? "*" : ""}` }} />
							<FormField
								getFieldState={getFieldState}
								formField={question}
								required={question?.required}
								label={question.label}
								errors={errors}
								register={register}
								watch={watch}
								control={control}
							/>
						</label>
					</div>
				))}
			<div className="col-span-2 pt-2 md:pt-3">
				<button type="submit" aria-label="Submit form" className={`w-full ${!blockSubmit ? "!pointer-events-none select-none opacity-60" : "cursor-pointer"}`}>
					<Button {...submitProps} />
				</button>
			</div>
			{errorMessage && <span className="t-14 col-span-2 block w-full text-center text-red" dangerouslySetInnerHTML={{ __html: errorMessage }} />}
		</form>
	);
}
