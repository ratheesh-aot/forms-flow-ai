import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { useTranslation } from "react-i18next";
import SaveNext from "./SaveAndNext";
 import { MULTITENANCY_ENABLED } from "../../../constants/constants";
import { resetFormProcessData, saveFormProcessMapperPut } from "../../../apiManager/services/processServices";
import { toast } from "react-toastify";

const PreviewAndConfirm = React.memo(
  ({ handleNext, handleBack, activeStep, steps }) => {
    const { t } = useTranslation();
    const bundleData = useSelector((state) => state.process.formProcessList);
    const selectedForms = useSelector((state) => state.bundle.selectedForms);
    const workflow = useSelector((state) => state.process.workflowAssociated);
    const [status, setStatus] = useState(bundleData.status || "inactive");
    const dispatch = useDispatch();
    const tenantKey = useSelector((state) => state.tenants?.tenantId);
    const redirectUrl = MULTITENANCY_ENABLED ? `/tenant/${tenantKey}/` : "/";

    const submitData = () => {
      const data = {
        id: bundleData.id,
        formName:bundleData.formName,
        formId: bundleData.formId,
        status,
        processKey: workflow.value,
        processName: workflow.label,
      };
      dispatch(saveFormProcessMapperPut(data,(err)=>{
        if (!err) {
          toast.success(
             t("Form Workflow Association Saved.")
          );
          dispatch(push(`${redirectUrl}form`));
          dispatch(resetFormProcessData());
        } else {
          toast.error(
            t("Form Workflow Association Failed.")
          );
        }
      }));
      dispatch(push(`${redirectUrl}form`));
    };

 
    return (
      <div>
        <div className="d-flex align-item-center justify-content-between">
          <h2>{bundleData.formName}</h2>
          <div>
            <SaveNext
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
              steps={steps}
              submitData={submitData}
              isLastStep={true}
            />
          </div>
        </div>

        <Grid item xs={12} sm={8} spacing={3} disabled={false}>
          <Card variant="outlined">
            <CardContent>
              <form noValidate autoComplete="off">
                <div>
                  <span className="font-weight-bolder">
                    {t("Bundle Name")} :
                  </span>
                  <span>{bundleData.formName}</span>
                </div>
                <div>
                  <span className="font-weight-bolder">{"Total Forms"} :</span>
                  <span>{selectedForms?.length}</span>
                </div>
                <div>
                  <span className="font-weight-bolder">
                    {t("Workflow Name")} :
                  </span>
                  <span>{workflow.label}</span>
                </div>
                <div>
                  <label>
                    <label className="fontsize-16 mx-1">
                      {t("Publish this form for Client Users.")}
                    </label>
                    <FormControlLabel
                      control={
                        <Checkbox
                          aria-label="Publish"
                          checked={status === "active" ? true : false}
                          onChange={(e) =>
                            setStatus(e.target.checked ? "active" : "inactive")
                          }
                          name="Check box to associate form with a workflow"
                          color="primary"
                        />
                      }
                    />
                  </label>
                </div>
                <label className="text-label font-weight-bold">
                  {t("Comments")}
                </label>
                <div>
                  <TextField
                    label={t("Comments")}
                    id="comments"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                    className="text-field"
                    value={""}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
);
export default PreviewAndConfirm;