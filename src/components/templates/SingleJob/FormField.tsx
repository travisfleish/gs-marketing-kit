/* eslint-disable no-useless-escape */

import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function FormField({ formField, required, label, register, errors, formState, getFieldState, watch, control }: any) {
	const inputClasses =
		"contact-dummy-form__input px-4 py-3 bg-snow placeholder-navy/40 font-normal border-[1px] border-navy/20 mt-2 text-navy rounded-lg w-full focus:border-blue/60 focus:outline-none focus:ring-0";
	const errorTextClasses = ["t-12 text-lightRed block text-left mt-2"];

	if (formField?.type === "input_text") {
		const isPatternError = errors[`${formField.name}`];

		const patterns = {
			email: /^\S+@\S+$/i,
			phone: /^\+?\d{0,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
			url: /^(?!http(s)?:\/\/).*[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}.*$/,
		};

		const errorMessages = {
			email: "Please enter a valid email address",
			phone: "Please enter a valid phone number",
			url: "Please enter a valid URL",
		};

		const pattern = patterns[formField.name] || "";
		const errorMessage = errorMessages[formField.name] || "This field is required";

		return (
			<>
				<input
					name={formField.name}
					placeholder={label}
					type="text"
					className={inputClasses}
					required={required}
					{...register(formField.name, {
						required,
						maxLength: 80,
						pattern,
					})}
				/>
				{errors[`${formField.name}`] && !isPatternError && <span className={errorTextClasses.join(" ")}>This field is required</span>}
				{errors[`${formField.name}`] && isPatternError && <span className={errorTextClasses.join(" ")}>{errorMessage}</span>}
			</>
		);
	}
	if (formField?.type === "input_password") {
		return (
			<>
				<input
					name={formField.name}
					placeholder={label}
					type="password"
					className={inputClasses}
					required={required}
					{...register(formField.name, {
						required,
						maxLength: 80,
					})}
				/>
				{errors[`${formField.name}`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}
			</>
		);
	}
	if (formField?.type === "textarea") {
		return (
			<>
				<textarea
					name={formField.name}
					style={{ height: "6rem" }}
					placeholder={label}
					className={inputClasses}
					required={required}
					{...register(formField.name, {
						required,
					})}
				/>
				{errors[`${formField.name}`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}
			</>
		);
	}
	if (formField?.type === "input_file") {
		return (
			<>
				<input
					name={formField.name}
					placeholder={label}
					type="file"
					className="mt-2 w-full py-3 pr-4 font-medium text-navy focus:border-transparent focus:outline-none focus:ring-0"
					required={required}
					{...register(formField.name, {
						required,
					})}
				/>
				<div className="mb-3">
					<span className="text-12 block" dangerouslySetInnerHTML={{ __html: "Accepted file types: pdf, doc, docx, txt, rtf)" }} />
					{errors[`${formField.name}`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}
				</div>
			</>
		);
	}
	if (formField?.type === "multi_value_single_select") {
		const fieldIdentifier = String(formField?.name || formField?.id);
		const selectedValue = watch(fieldIdentifier);

		// Find if the selected option is a free_form option
		const selectedOption = formField?.answer_options?.find((option) => String(option.id) === String(selectedValue));
		const showFreeForm = selectedOption?.free_form;

		return (
			<>
				<select name={formField.name} className={inputClasses} defaultValue="" {...register(fieldIdentifier, { required })}>
					<option value="" disabled>
						Select an option
					</option>
					{formField?.values?.map((value, l) => (
						<option key={l} value={value?.value}>
							{value?.label}
						</option>
					))}
					{formField?.answer_options?.map((value) => (
						<option key={value?.id} value={value?.id}>
							{value?.label}
						</option>
					))}
				</select>
				{errors[`${fieldIdentifier}`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}

				{showFreeForm && (
					<div className="mt-2">
						<input
							type="text"
							className={inputClasses}
							placeholder="Please specify"
							{...register(`${fieldIdentifier}_freeform`, {
								required: showFreeForm,
							})}
						/>
						{errors[`${fieldIdentifier}_freeform`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}
					</div>
				)}
			</>
		);
	}
	if (formField?.type === "multi_value_multi_select") {
		const fieldIdentifier = String(formField?.name || formField?.id);

		const options = formField?.values;
		return (
			<div className="relative mt-2 block !pr-0">
				<Controller
					name={formField.name}
					control={control}
					defaultValue={[]} // Keep as an array of selected objects
					rules={{ required: "This field is required" }}
					render={({ field }) => (
						<Select
							{...field}
							isMulti
							options={options}
							closeMenuOnSelect={false}
							onChange={(selected) => {
								// Pass selected array directly to react-hook-form
								field.onChange(selected);
							}}
						/>
					)}
				/>

				{errors[`${fieldIdentifier}`] && <span className={errorTextClasses.join(" ")}>This field is required</span>}
			</div>
		);
	}
}

export default FormField;
