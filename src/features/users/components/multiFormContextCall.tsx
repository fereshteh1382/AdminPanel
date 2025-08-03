import { FormDataContext } from "./multiformcontext"
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react'


function MultiFormContextCall({ children }: { children: ReactNode }) {
    const methods = useForm<FormData>();
    const [data, setDataState] = useState<FormData>({});
    const setData = (values: Partial<FormData>) => {
        setDataState((prev) => ({
            ...prev,
            ...values,
        }));
    };
    return (
        <>

            <FormDataContext.Provider value={{ data, setData }}>
                <FormProvider {...methods}>
                    {children}
                </FormProvider>
            </FormDataContext.Provider>
        </>
    )
}

export default MultiFormContextCall