import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Row,
  Button,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";

import * as Yup from "yup";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

const lienSchema = Yup.object().shape({
  propertyNumber: Yup.string().required("Required"),
  creditor: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  paymentAmount: Yup.number().required("Required")
});

class AddModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalAddHandler}
        toggle={this.props.toggleModalAdd}
        size="lg"
      >
        <ModalHeader toggle={this.props.toggleModalAdd}>
          <IntlMessages id="lien.add-modal-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            id: this.props.details.length,
            propertyNumber: "",
            creditor: "",
            amount: "",
            paymentAmount: ""
          }}
          validationSchema={lienSchema}
          onSubmit={values => {
            this.props.onSubmit(values);
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <ModalBody>
                <Row>
                  <Colxx xxs="6">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.propertyNumber && touched.propertyNumber
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="property.propertyNumber" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.propertyNumber && touched.propertyNumber
                            ? " border-danger"
                            : "")
                        }
                        type="text"
                        name="propertyNumber"
                      />
                      {errors.propertyNumber && touched.propertyNumber ? (
                        <small className="text-danger">
                          {errors.propertyNumber}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.creditor && touched.creditor
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="lien.creditor" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.creditor && touched.creditor
                            ? " border-danger"
                            : "")
                        }
                        type="text"
                        name="creditor"
                      />
                      {errors.creditor && touched.creditor ? (
                        <small className="text-danger">{errors.creditor}</small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.amount && touched.amount ? "text-danger" : ""
                        }
                      >
                        <IntlMessages id="lien.amount" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.amount && touched.amount
                            ? " border-danger"
                            : "")
                        }
                        type="number"
                        name="amount"
                      />
                      {errors.amount && touched.amount ? (
                        <small className="text-danger">{errors.amount}</small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="6">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.paymentAmount && touched.paymentAmount
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="lien.paymentAmount" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.paymentAmount && touched.paymentAmount
                            ? " border-danger"
                            : "")
                        }
                        type="number"
                        name="paymentAmount"
                      />
                      {errors.paymentAmount && touched.paymentAmount ? (
                        <small className="text-danger">
                          {errors.paymentAmount}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  outline
                  onClick={this.props.toggleModalAdd}
                >
                  <IntlMessages id="pages.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="pages.submit" />
                </Button>{" "}
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

export default AddModal;
