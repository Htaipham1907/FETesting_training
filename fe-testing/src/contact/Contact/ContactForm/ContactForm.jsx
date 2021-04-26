import { React } from "react";
import './ContactForm.scss';
import Button from '../../../part/Button/FormButton';
import {Formik,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const ContactForm = () =>{
		const validate = Yup.object({
			yourname: Yup.string()
			.required('Required field')
			.max(20,"Too long!"),
			message: Yup.string().max(200,'Your message is too long!').required('Required field')
			})
		return (
			<Formik
				initialValues={{ 
					yourname: '',
					typedrive: 'Rider',
					message: '',
				}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					}, 1000);
				}}
				validationSchema = {validate}
			>
				{formik =>(
					<form className="form-container" onSubmit={formik.handleSubmit} data-testid="my-form">
						<div className="col1">
							<div className="namefield">
								<label>Your name</label>
								<input
									type="text"
									onChange ={formik.handleChange}
									onBlur = {formik.handleBlur}
									value = {formik.values.yourname}
									name = "yourname"
									placeholder = "Enter your issue"
									data-testid="input-test"
								/>
								
							</div>
							<ErrorMessage component='div' name='yourname' type='text' className="error"/>

							<div className="selectfield">
								<label>Select</label>
								<Field 
									as="select"
									value = {formik.values.typedrive}
									name = 'typedrive'
								>
									<option value="Rider">Rider</option>
									<option value="Driver">Driver</option>
								</Field>
							</div>
						</div>
						<div className="col2">
							<div className="messagefield">
								<label>Message</label>
								<textarea 
								placeholder="Enter your message" 
								name='message'
								onChange = {formik.handleChange}
								onBlur = {formik.handleBlur}
								value = {formik.values.message}
								></textarea>
							</div>
							<ErrorMessage component='div' name='message' type='text' className='error'/>
						</div>
						
						
						<Button component="div" type="submit"></Button>
					</form>
				)}
			</Formik>
		)
	};

export default ContactForm;