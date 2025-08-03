import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useValidators } from '../hooks/useValidators';
import '../assets/style.css';
import { useFormDataContext } from "../features/users/components/multiformcontext"
import MultiFormView1 from "./MultiFormView1"
export default function MultiStepForm() {

    const [step, setStep] = useState(1);
    const [complete, setComplete] = useState<{ [key: number]: boolean }>({});
    const { register, handleSubmit, getValues, trigger, formState: { errors } } = useForm<FormData>();
    const { isOnlyLetters, isValidPhone, isValidFile } = useValidators();
    const { data, setData } = useFormDataContext();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        // console.log(data);save in db
        setComplete(prev => ({ ...prev, [3]: true }));
        setStep(4);
    }
    console.log(data);
    const nextStep = async (s: number) => {

        let valid = false;

        if (s === 1) {
            valid = await trigger("location");
            if (valid) {
                setData({ location: getValues("location") });

            }

            //  console.log("validation step1:", valid);
        } else if (s === 2) {
            valid = await trigger("roles");
            if (valid) {
                setData({ roles: getValues("roles") });

            }
        }
        else if (s === 3) {

            valid = await trigger(["name", "phone", "certification"]);
            if (valid) {
                setData({
                    name: getValues("name"),
                    phone: getValues("phone"),
                    certification: getValues("certification")
                });


            }
        }
        if (valid) {
            setComplete(prev => ({ ...prev, [s]: true }));
            //setStep((prev) => prev + 1);
            setStep(s + 1);
            //  console.log(complete);
        } else {
            //  alert("لطفاً فیلدهای این مرحله را کامل و صحیح پر کنید.");
        }

        // const values = getValues();
        //console.log(values);  
    }
    const prevStep = (s: number) => {
        setComplete(prev => ({ ...prev, [s]: false }));
        setStep(s - 1);
        //  console.log(complete);
    }


    return (
        <div className='container'>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="step-wrapper">

                    <div className='step-container'
                        /*  onClick={() => setStep(1)} */
                        style={{ color: step === 1 ? "#3498db" : complete[1] ? "#000" : "#ccc" }}
                    >
                        <div className='step-style'
                            style={{
                                background: step === 1 ? "#3498db" : complete[1] ? "green" : "#ccc",
                                borderColor: step === 1 ? "#3498db" : complete[1] ? "green" : "#ccc"
                            }}
                        >{complete[1] ? "✓" : 1}
                        </div>
                        <span>Job Location</span>
                    </div>
                    <div className='step-container'
                        /*  onClick={() => setStep(2)} */
                        style={{ color: step === 2 ? "#3498db" : complete[2] ? "#000" : "#ccc" }}
                    >
                        <div className='step-style'
                            style={{
                                background: step === 2 ? "#3498db" : complete[2] ? "green" : "#ccc",
                                borderColor: step === 2 ? "#3498db" : complete[2] ? "green" : "#ccc"
                            }}
                        >{complete[2] ? "✓" : 2}
                        </div>
                        <span>Job Positon</span>
                    </div>
                    <div className='step-container' /* onClick={() => setStep(3)} */
                        style={{ color: step === 3 ? "#3498db" : complete[3] ? "#000" : "#ccc" }}
                    >
                        <div className='step-style'
                            style={{
                                background: step === 3 ? "#3498db" : complete[3] ? "green" : "#ccc",
                                borderColor: step === 3 ? "#3498db" : complete[3] ? "green" : "#ccc"
                            }}
                        >{complete[3] ? "✓" : 3}
                        </div>
                        <span>Personal Details</span>
                    </div>

                </div>
                {step === 1 && (
                    <div>
                        <input
                            type="text"
                            placeholder='City,Area...'
                            {...register("location", {
                                required: "Location Is Required!",
                                validate: isOnlyLetters()
                            })}

                        />
                        {errors.location && <p className="error-text">{errors.location.message}</p>}
                        <button type='button' className="btn btn-primary" onClick={() => nextStep(1)}>Next Step</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="summary-box">
                            <ul>
                                <li><strong>Location:</strong> {data.location}<i className="fas fa-check-circle check-icon"></i></li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            placeholder='Job title,Position...'
                            {...register("roles", {
                                required: "Roles Is Required!",
                                validate: isOnlyLetters()
                            })}
                        />
                        {errors.roles && <p className="error-text">{errors.roles.message}</p>}
                        <button type='button' className="btn btn-primary" onClick={() => nextStep(2)}>Next Step</button>
                        <button type='button' className="btn btn-secondary" onClick={() => prevStep(2)}>Prev Step</button>

                    </div>
                )}
                {step === 3 && (

                    <div>
                        <div className="summary-box">
                            <ul>
                                <li><strong>Location:</strong> {data.location}<i className="fas fa-check-circle check-icon"></i></li>
                                <li><strong>Role:</strong> {data.roles}<i className="fas fa-check-circle check-icon"></i></li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            placeholder='Name...'
                            {...register("name", {
                                required: "Name Is Required!",
                                validate: isOnlyLetters()
                            })}
                        />
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                        <input
                            type="text"
                            placeholder='Phone...'
                            {...register("phone", {
                                required: "Phone Is Required!",
                                validate: isValidPhone()
                            })}

                        />
                        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                        <label htmlFor="certification" className="dropzone">
                            <p><i className="fas fa-upload" style={{ fontSize: '24px', color: '#3498db' }}></i></p>
                            <p>Drag & Drop your file here or click to upload</p>

                            <input
                                type="file"
                                className="file-input"
                                id="certification"
                                accept=".pdf,.jpg,.png,.jpeg"
                                placeholder='Certification...'
                                {...register("certification", {
                                    required: "Certification Is Required!",
                                    validate: isValidFile(2, ["application/pdf", "image/jpeg", "image/png"])
                                })}
                            />
                        </label>
                        {errors.certification && <p className="error-text">{errors.certification.message}</p>}

                        <button type='button' className="btn btn-primary" onClick={() => prevStep(3)}>Prev Step</button>

                        <button type='button' className="btn btn-danger" onClick={() => nextStep(3)} >Send</button>
                    </div>
                )}
                {step === 4 && (
                    <MultiFormView1 />


                )}
            </form>

        </div>
    )
}
