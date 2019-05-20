import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Row,
  Button,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  FormGroup,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Label
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import ReactAutosuggest from "Components/ReactAutosuggest";
import * as Yup from "yup";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";
import { FORM_ADD, FORM_VIEW, FORM_EDIT } from "Constants/actionTypes";


class DetailsForm extends Component {
  componentWillMount() {
    apiCallCreator.getDetails(
      this.props.propertyDetails.id,
      this.props.propertyDetails.propertyNumber
    );
  }

  render() {
    const pdprops = this.props.propertyDetails;
    const selectedProperty = pdprops.propertyDetails;
    const selectedLien = pdprops.lienDetails;
    const selectedAssessee = pdprops.assesseeDetails;
    const selectedDates = pdprops.datesDetails;
    console.log(this.props);
    return (
      <div>
        <Row>
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                <IntlMessages id="property.propertyNumber" />
                {pdprops.propertyNumber != null
                  ? " : " + pdprops.propertyNumber
                  : ""}
              </h1>

              <div className="float-sm-right">
                <div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="primary"
                      size="lg"
                      outline
                      className="top-right-button top-right-button-single"
                    >
                      <IntlMessages id="pages.actions" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => this.props.changeFormType(FORM_VIEW)}
                      >
                        <IntlMessages id="property.viewDetails" />
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => this.props.changeFormType(FORM_EDIT)}
                      >
                        <IntlMessages id="property.editDetails" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {"  "}
              </div>
            </div>
          </Colxx>
        </Row>
        {/* className="w-25 text-center" controlled-tab-example style={{ backgroundColor: '#145388' }}  separator-tabs ml-0 mb-5*/}
        <Nav tabs className="separator-tabs ml-0 mb-5 ">
          <NavItem className={this.state.activeFirstTab == "1" ? "w-25 text-center" : " "}>
            <NavLink
              className={classnames({
                active: this.state.activeFirstTab === "1",
                "nav-link": true
              })}
              to="#"
            >
              Property Details
              </NavLink>
          </NavItem>
          <NavItem className={this.state.activeFirstTab == "2" ? "w-25 text-center" : " "}>
            <NavLink
              // style={{ color: '#fff' }}
              className={classnames({
                active: this.state.activeFirstTab === "2",
                "nav-link": true
              })}
              to="#"
            >
              Lien Info
            </NavLink>
          </NavItem>
          <NavItem className={this.state.activeFirstTab == "3" ? "w-25 text-center" : " "}>
            <NavLink
              // style={{ color: '#fff' }}
              className={classnames({
                active: this.state.activeFirstTab === "3",
                "nav-link": true
              })}
              to="#"
            >
              Assessee
              </NavLink>
          </NavItem>
          <NavItem className={this.state.activeFirstTab == "4" ? "w-25 text-center" : " "}>
            <NavLink
              // style={{ color: '#fff' }}
              className={classnames({
                active: this.state.activeFirstTab === "4",
                "nav-link": true
              })}
              to="#"
            >
              Dates
              </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeFirstTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      pin: selectedProperty.pin,
                      county: selectedProperty.county,
                      pin: selectedProperty.pin,
                      street: selectedProperty.street,
                      city: selectedProperty.city,
                      state: selectedProperty.state,
                      zip: selectedProperty.zip,
                      township: selectedProperty.township,
                      classCode: selectedProperty.classCode,
                      assessedValue: selectedProperty.assessedValue,
                      marketValue: selectedProperty.marketValue,
                      taxesPerYear: selectedProperty.taxesPerYear,
                      preeqexm: selectedProperty.preeqexm,
                      homeOwner: selectedProperty.homeOwner,
                      seniorExemption: selectedProperty.seniorExemption,
                      seniorFreeze: selectedProperty.seniorFreeze,
                      totalAcres: selectedProperty.totalAcres,
                      legalDescription: selectedProperty.legalDescription,
                      googleMapView: selectedProperty.googleMapView
                    }}
                    validationSchema={propertyDetailsSchema}
                    onSubmit={values => {
                      apiCallCreator.addPropertyDetails(
                        values,
                        this.props.addNewProperty
                      );
                      this.toggleFirstTab("2");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.propertyDetailMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        <Row className="mt-3">
                          <Colxx xxs="12" sm="10">
                            <Form onSubmit={this.checkProperty}>
                              <ReactAutosuggest
                                placeholder="Search By Property Number"
                                data={countyJson}
                                onChange={values => {
                                  this.state.property = values;
                                }}
                              />
                            </Form>
                          </Colxx>
                        </Row>
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Next
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: selectedLien.propertyNumber,
                      creditor: selectedLien.creditor,
                      amount: selectedLien.amount,
                      paymentAmount: selectedLien.paymentAmount
                    }}
                    validationSchema={lienSchema}
                    onSubmit={values => {
                      this.toggleFirstTab("3");
                      apiCallCreator.addLien(values, this.props.addNewLien);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.lienInfoMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Next
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: selectedAssessee.propertyNumber,
                      name: selectedAssessee.name,
                      address: selectedAssessee.address,
                      city: selectedAssessee.city,
                      state: selectedAssessee.state,
                      zip: selectedAssessee.zip
                    }}
                    validationSchema={assesseeSchema}
                    onSubmit={values => {
                      apiCallCreator.addAssessee(
                        values,
                        this.props.addNewAssessee
                      );
                      this.toggleFirstTab("4");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.assesseeMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Submit
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: selectedDates.propertyNumber,
                      actualEstimatedDate: selectedDates.actualEstimatedDate,
                      firstInstallmentDate: selectedDates.firstInstallmentDate,
                      secondInstallmentDate:
                        selectedDates.secondInstallmentDate,
                      petitionFiledDate: selectedDates.petitionFiledDate,
                      extentionDate: selectedDates.extentionDate,
                      expirationDate: selectedDates.expirationDate,
                      assignmentCallDate: selectedDates.assignmentCallDate,
                      proveUpDate: selectedDates.proveUpDate,
                      orderOfDate: selectedDates.orderOfDate,
                      dateOfTaxDeed: selectedDates.dateOfTaxDeed
                    }}
                    validationSchema={dateSchema}
                    onSubmit={values => {
                      apiCallCreator.addImportantDate(
                        values,
                        this.props.addNewDates
                      );
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.datesMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Next
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </div >
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      activeFirstTab: "1",

      selectedProperty: {},
      selectedLien: {},
      selectedAssessee: {},
      selectedDates: {},

      propertyDetailMap: [
        { name: "pin", size: 4, type: "text", text: "property." },
        { name: "street", size: 4, type: "text", text: "property." },
        { name: "city", size: 4, type: "text", text: "property." },
        { name: "county", size: 4, type: "text", text: "property." },
        { name: "state", size: 4, type: "text", text: "property." },
        { name: "zip", size: 4, type: "number", text: "property." },
        { name: "township", size: 4, type: "text", text: "property." },
        { name: "classCode", size: 4, type: "number", text: "property." },
        { name: "assessedValue", size: 4, type: "number", text: "property." },
        { name: "marketValue", size: 4, type: "number", text: "property." },
        { name: "taxesPerYear", size: 4, type: "number", text: "property." },
        { name: "preeqexm", size: 4, type: "number", text: "property." },
        { name: "homeOwner", size: 4, type: "number", text: "property." },
        { name: "seniorExemption", size: 4, type: "number", text: "property." },
        { name: "seniorFreeze", size: 4, type: "number", text: "property." },
        { name: "totalAcres", size: 4, type: "number", text: "property." },
        { name: "legalDescription", size: 4, type: "text", text: "property." },
        { name: "googleMapView", size: 4, type: "text", text: "property." }
      ],
      lienInfoMap: [
        { name: "creditor", size: 4, type: "text", text: "lien." },
        { name: "amount", size: 4, type: "number", text: "lien." },
        { name: "paymentAmount", size: 4, type: "number", text: "lien." }
      ],
      assesseeMap: [
        { name: "name", size: 4, type: "text", text: "assessee." },
        { name: "address", size: 4, type: "text", text: "assessee." },
        { name: "city", size: 4, type: "text", text: "assessee." },
        { name: "state", size: 4, type: "text", text: "assessee." },
        { name: "zip", size: 4, type: "number", text: "assessee." }
      ],
      datesMap: [
        { name: "actualEstimatedDate", size: 4, type: "date", text: "dates." },
        { name: "firstInstallmentDate", size: 4, type: "date", text: "dates." },
        {
          name: "secondInstallmentDate",
          size: 4,
          type: "date",
          text: "dates."
        },
        { name: "petitionFiledDate", size: 4, type: "date", text: "dates." },
        { name: "extentionDate", size: 4, type: "date", text: "dates." },
        { name: "expirationDate", size: 4, type: "date", text: "dates." },
        { name: "assignmentCallDate", size: 4, type: "date", text: "dates." },
        { name: "proveUpDate", size: 4, type: "date", text: "dates." },
        { name: "orderOfDate", size: 4, type: "date", text: "dates." },
        { name: "dateOfTaxDeed", size: 4, type: "date", text: "dates." }
      ],
      countyData: '',
      overallData: []
    };
  }


  toggleFirstTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  };

  fieldMapper = (arr, errors, touched, fieldStatus) => {
    return arr.map((e, i) => {
      console.log(e.name)
      return (
        <Colxx key={i} xxs={e.size}>
          <FormGroup
            className={
              "form-group has-top-label" +
              (errors[e.name] && touched[e.name] ? " border-danger m-0" : "")
            }
          >
            <Label
              className={errors[e.name] && touched[e.name] ? "text-danger" : ""}
            >
              <IntlMessages id={e.text + e.name} />
            </Label>
            <Field
              className={
                "form-control" +
                (errors[e.name] && touched[e.name] ? " border-danger" : "")
              }
              type={e.type}
              name={e.name}
              disabled={fieldStatus}
            />
            {errors[e.name] && touched[e.name] ? (
              <small className="text-danger">{errors[e.name]}</small>
            ) : (
                ""
              )}
          </FormGroup>
        </Colxx>
      );
    });
  };
}

const propertyDetailsSchema = Yup.object().shape({
  county: Yup.string().required("Required"),
  pin: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.number().required("Required"),
  township: Yup.string().required("Required"),
  classCode: Yup.number().required("Required"),
  assessedValue: Yup.number().required("Required"),
  marketValue: Yup.number().required("Required"),
  taxesPerYear: Yup.number().required("Required"),
  preeqexm: Yup.number().required("Required"),
  homeOwner: Yup.number().required("Required"),
  seniorExemption: Yup.number().required("Required"),
  seniorFreeze: Yup.number().required("Required"),
  totalAcres: Yup.number().required("Required"),
  legalDescription: Yup.string().required("Required"),
  googleMapView: Yup.string().required("Required")
});

const lienSchema = Yup.object().shape({
  creditor: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  paymentAmount: Yup.number().required("Required")
});

const assesseeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.number().required("Required")
});

const dateSchema = Yup.object().shape({
  actualEstimatedDate: Yup.string().required("Required"),
  firstInstallmentDate: Yup.string().required("Required"),
  secondInstallmentDate: Yup.string().required("Required"),
  petitionFiledDate: Yup.string().required("Required"),
  extentionDate: Yup.string().required("Required"),
  expirationDate: Yup.string().required("Required"),
  assignmentCallDate: Yup.string().required("Required"),
  proveUpDate: Yup.string().required("Required"),
  orderOfDate: Yup.string().required("Required"),
  dateOfTaxDeed: Yup.string().required("Required")
});

const mapStateToProps = state => {
  return { propertyDetails: state.propertyDetails };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProperty: val => dispatch(actionCreator.AddNewPropertyDetails(val)),
    addNewAssessee: () => dispatch(actionCreator.AddNewAssessee()),
    addNewLien: () => dispatch(actionCreator.AddNewLien()),
    addNewDates: () => dispatch(actionCreator.AddNewImportantDates()),
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);


const countyJson = [
  {
    propertyNumber: "adams"
  },
  {
    propertyNumber: "alexander"
  },
  {
    propertyNumber: "bond"
  },
  {
    propertyNumber: "boone"
  },
  {
    propertyNumber: "brown"
  },
  {
    propertyNumber: "bureau"
  },
  {
    propertyNumber: "calhoun"
  },
  {
    propertyNumber: "carroll"
  },
  {
    propertyNumber: "cass"
  },
  {
    propertyNumber: "champaign"
  },
  {
    propertyNumber: "christian"
  },
  {
    propertyNumber: "clark"
  },
  {
    propertyNumber: "clay"
  },
  {
    propertyNumber: "clinton"
  },
  {
    propertyNumber: "coles"
  },
  {
    propertyNumber: "cook"
  },
  {
    propertyNumber: "crawford"
  },
  {
    propertyNumber: "cumberland"
  },
  {
    propertyNumber: "dekalb"
  },
  {
    propertyNumber: "de witt"
  },
  {
    propertyNumber: "douglas"
  },
  {
    propertyNumber: "dupage"
  },
  {
    propertyNumber: "edgar"
  },
  {
    propertyNumber: "edwards"
  },
  {
    propertyNumber: "effingham"
  },
  {
    propertyNumber: "fayette"
  },
  {
    propertyNumber: "ford"
  },
  {
    propertyNumber: "franklin"
  },
  {
    propertyNumber: "fulton"
  },
  {
    propertyNumber: "gallatin"
  },
  {
    propertyNumber: "greene"
  },
  {
    propertyNumber: "grundy"
  },
  {
    propertyNumber: "hamilton"
  },
  {
    propertyNumber: "hancock"
  },
  {
    propertyNumber: "hardin"
  },
  {
    propertyNumber: "henderson"
  },
  {
    propertyNumber: "henry"
  },
  {
    propertyNumber: "iroquois"
  },
  {
    propertyNumber: "jackson"
  },
  {
    propertyNumber: "jasper"
  },
  {
    propertyNumber: "jefferson"
  },
  {
    propertyNumber: "jersey"
  },
  {
    propertyNumber: "jo daviess"
  },
  {
    propertyNumber: "johnson"
  },
  {
    propertyNumber: "kane"
  },
  {
    propertyNumber: "kankakee"
  },
  {
    propertyNumber: "kendall"
  },
  {
    propertyNumber: "knox"
  },
  {
    propertyNumber: "la salle"
  },
  {
    propertyNumber: "lake"
  },
  {
    propertyNumber: "lawrence"
  },
  {
    propertyNumber: "lee"
  },
  {
    propertyNumber: "livingston"
  },
  {
    propertyNumber: "logan"
  },
  {
    propertyNumber: "mcdonough"
  },
  {
    propertyNumber: "mchenry"
  },
  {
    propertyNumber: "mclean"
  },
  {
    propertyNumber: "macon"
  },
  {
    propertyNumber: "macoupin"
  },
  {
    propertyNumber: "madison"
  },
  {
    propertyNumber: "marion"
  },
  {
    propertyNumber: "marshall"
  },
  {
    propertyNumber: "mason"
  },
  {
    propertyNumber: "massac"
  },
  {
    propertyNumber: "menard"
  },
  {
    propertyNumber: "mercer"
  },
  {
    propertyNumber: "monroe"
  },
  {
    propertyNumber: "montgomery"
  },
  {
    propertyNumber: "morgan"
  },
  {
    propertyNumber: "moultrie"
  },
  {
    propertyNumber: "ogle"
  },
  {
    propertyNumber: "peoria"
  },
  {
    propertyNumber: "perry"
  },
  {
    propertyNumber: "piatt"
  },
  {
    propertyNumber: "pike"
  },
  {
    propertyNumber: "pope"
  },
  {
    propertyNumber: "pulaski"
  },
  {
    propertyNumber: "putnam"
  },
  {
    propertyNumber: "randolph"
  },
  {
    propertyNumber: "richland"
  },
  {
    propertyNumber: "sock island"
  },
  {
    propertyNumber: "saline"
  },
  {
    propertyNumber: "sangamon"
  },
  {
    propertyNumber: "schuyler"
  },
  {
    propertyNumber: "scott"
  },
  {
    propertyNumber: "shelby"
  },
  {
    propertyNumber: "st. clair"
  },
  {
    propertyNumber: "stark"
  },
  {
    propertyNumber: "stephenson"
  },
  {
    propertyNumber: "tazewell"
  },
  {
    propertyNumber: "union"
  },
  {
    propertyNumber: "vermilion"
  },
  {
    propertyNumber: "wabash"
  },
  {
    propertyNumber: "warren"
  },
  {
    propertyNumber: "washington"
  },
  {
    propertyNumber: "wayne"
  },
  {
    propertyNumber: "white"
  },
  {
    propertyNumber: "whiteside"
  },
  {
    propertyNumber: "will"
  },
  {
    propertyNumber: "williamson"
  },
  {
    propertyNumber: "winnebago"
  },
  {
    propertyNumber: "woodford"
  }
]
