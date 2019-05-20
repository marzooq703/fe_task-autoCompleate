<Row>
  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label
        className={
          errors.propertyNumber && touched.propertyNumber ? "text-danger" : ""
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
        <small className="text-danger">{errors.propertyNumber}</small>
      ) : (
        ""
      )}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.pin" />
      </Label>
      <Field className="form-control" type="text" name="pin" disabled />
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.county" />
      </Label>
      <Field className="form-control" type="text" name="county" />
      {errors.county && touched.county ? (
        <div className="invalid-feedback d-block">{errors.county}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="6">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.address" />
      </Label>
      <Field className="form-control" type="text" name="address" />
      {errors.address && touched.address ? (
        <div className="invalid-feedback d-block">{errors.address}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="3">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.city" />
      </Label>
      <Field className="form-control" type="text" name="city" />
      {errors.city && touched.city ? (
        <div className="invalid-feedback d-block">{errors.city}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="3">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.state" />
      </Label>
      <Field className="form-control" type="text" name="state" />
      {errors.state && touched.state ? (
        <div className="invalid-feedback d-block">{errors.state}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="2">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.zip" />
      </Label>
      <Field className="form-control" type="number" name="zip" />
      {errors.zip && touched.zip ? (
        <div className="invalid-feedback d-block">{errors.zip}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.township" />
      </Label>
      <Field className="form-control" type="text" name="township" />
      {errors.township && touched.township ? (
        <div className="invalid-feedback d-block">{errors.township}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="6">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.classCode" />
      </Label>
      <Field className="form-control" type="number" name="classCode" />
      {errors.classCode && touched.classCode ? (
        <div className="invalid-feedback d-block">{errors.classCode}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.assessedValue" />
      </Label>
      <Field className="form-control" type="number" name="assessedValue" />
      {errors.assessedValue && touched.assessedValue ? (
        <div className="invalid-feedback d-block">{errors.assessedValue}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.marketValue" />
      </Label>
      <Field className="form-control" type="number" name="marketValue" />
      {errors.marketValue && touched.marketValue ? (
        <div className="invalid-feedback d-block">{errors.marketValue}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.taxesPerYear" />
      </Label>
      <Field className="form-control" type="number" name="taxesPerYear" />
      {errors.taxesPerYear && touched.taxesPerYear ? (
        <div className="invalid-feedback d-block">{errors.taxesPerYear}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.preeqexm" />
      </Label>
      <Field className="form-control" type="number" name="preeqexm" />
      {errors.preeqexm && touched.preeqexm ? (
        <div className="invalid-feedback d-block">{errors.preeqexm}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.homeOwner" />
      </Label>
      <Field className="form-control" type="number" name="homeOwner" />
      {errors.homeOwner && touched.homeOwner ? (
        <div className="invalid-feedback d-block">{errors.homeOwner}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="4">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.seniorExemption" />
      </Label>
      <Field className="form-control" type="number" name="seniorExemption" />
      {errors.seniorExemption && touched.seniorExemption ? (
        <div className="invalid-feedback d-block">{errors.seniorExemption}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="6">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.seniorFreeze" />
      </Label>
      <Field className="form-control" type="number" name="seniorFreeze" />
      {errors.seniorFreeze && touched.seniorFreeze ? (
        <div className="invalid-feedback d-block">{errors.seniorFreeze}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="6">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.totalAcres" />
      </Label>
      <Field className="form-control" type="number" name="totalAcres" />
      {errors.totalAcres && touched.totalAcres ? (
        <div className="invalid-feedback d-block">{errors.totalAcres}</div>
      ) : null}
    </FormGroup>
  </Colxx>

  <Colxx xxs="12">
    <FormGroup className="form-group has-top-label">
      <Label>
        <IntlMessages id="property.legalDescription" />
      </Label>
      <Field
        className="form-control"
        type="text"
        component="textarea"
        name="legalDescription"
      />
      {errors.legalDescription && touched.legalDescription ? (
        <div className="invalid-feedback d-block">
          {errors.legalDescription}
        </div>
      ) : null}
    </FormGroup>
  </Colxx>
</Row>;
