import React from 'react';
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import { TextField } from "./FormField";

const AddCommentForm = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                comment: ""
            }}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const errors = {};
                if (!values.name) {
                    errors.name = requiredError;
                }
                if (!values.email) {
                    errors.email = requiredError;
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.comment) {
                    errors.comment = requiredError;
                }
                return errors;
            }}
        >
            {({ isValid, dirty }) => {
                return (
                    <Form className="form ui">
                        <Field
                            label="Name"
                            placeholder="Name"
                            name="name"
                            component={TextField}
                        />
                        <Field
                            label="Email"
                            placeholder="E-Mail Address"
                            name="email"
                            component={TextField}
                        />
                        <Field
                            label="Comment"
                            placeholder="Leave a comment"
                            name="comment"
                            component={TextField}
                        />
                        <Grid>
                            <Grid.Column floated="left" width={5}>
                                <Button type="button" onClick={onCancel} color="red">
                                    Cancel
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated="right" width={5}>
                                <Button
                                    type="submit"
                                    floated="right"
                                    color="green"
                                    disabled={!dirty || !isValid}
                                >
                                    Add
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default AddCommentForm;