import StepBar from "./StepBar";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { useNavigate     } from "react-router-dom";
import { themeClass } from "./variables";
import  CustomButton  from "../CustomButton";
import { CardBody } from "reactstrap";
// import { Spacer } from "@chakra-ui/react";


function FormWrapper(props) {
    const {
        steps = [],
        handleSubmit = (f) => f,
        barWidth = "20vw",
        loading = false,
        children = [],
    } = props;
    const [step, setStep] = useState(0);
    const location = useNavigate();

    const goNext = () => {
        setStep((prev) => prev + 1);
    };

    const goBack = () => {
        setStep((prev) => prev - 1);
    };
    // Generate Certificate
    return (
        <div className={`rounded ${themeClass}`}>
            {/* <CardHeader className={+ themeClass + "m-0 p-0" }> */}
            <center>
                <StepBar
                    barWidth={barWidth}
                    current={step}
                    items={steps}
                    onItemClick={(i) => setStep(i)}
                />
            </center>
            {/* </CardHeader> */}
            <CardBody>{children.filter((item, i) => step === i)}</CardBody>
            <div
                className={`m-0 p-0 d-flex flex-row ${step !== 0 ? "justify-content-between" : "justify-content-between"
                    } p-1`}
            >
                {step !== 0 && (
                    <CustomButton
                        className="px-6"
                        // outline
                        // color="primary"
                        onClick={goBack}
                    // style={{ backgroundColor: "rgb(0, 220, 102)", border: "none" }}
                    >
                        <AiOutlineLeft className="mr-1" size={20} /> Back
                    </CustomButton>
                )}

                {step === 0 && (
                    <CustomButton
                        className="px-6 d-flex justify-content-start"
                    // outline
                    // color="success"
                    // style={{ backgroundColor: "rgb(0, 220, 102)", border: "none" }}
                    // onClick={goBack}
                    >
                        <AiOutlineLeft className="mr-1" size={20} /> Save
                    </CustomButton>
                )}

                {step === steps.length - 1 ? (
                    location.pathname ===
                        "/app/student/new" ? (
                        <CustomButton
                            className="px-6"
                            color="primary"
                            onClick={handleSubmit}
                            loading={loading}
                        >
                            <FaCheck className="mr-1" size={20} /> POST
                        </CustomButton>
                    ) : (
                        <CustomButton
                            className="px-6"
                            onClick={handleSubmit}
                            loading={loading}
                        >
                            {loading === false ? (
                                <FaCheck className="mr-1" size={20} />
                            ) : null}{" "}
                            Submit
                        </CustomButton>

                    )
                ) : (
                    <CustomButton
                        className="px-6"
                        onClick={goNext}
                    >
                        Next <AiOutlineRight className="ml-1" size={20} />
                    </CustomButton>
                )}
            </div>
        </div>
    );
}

export default FormWrapper;