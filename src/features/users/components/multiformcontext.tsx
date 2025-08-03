// context/FormDataContext.tsx
import { createContext, useContext } from "react";

interface FormData {
    location?: string;
    roles?: string;
    name?: string;
    phone?: string;
    certification?: FileList;
}

interface FormContextType {
    data: FormData;
    setData: (values: Partial<FormData>) => void;
}

export const FormDataContext = createContext<FormContextType | null>(null);

export const useFormDataContext = () => {
    const ctx = useContext(FormDataContext);
    if (!ctx) throw new Error("FormDataContext is missing!");
    return ctx;
};
