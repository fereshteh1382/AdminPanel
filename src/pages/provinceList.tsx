import { useForm } from "react-hook-form"
import AutomaticDropDown from "../components/automaticDropDown"
import { useEffect, useRef } from "react";

export default function ProvinceList() {
    const { watch, control } = useForm()
    //const stateId = watch('state_id');
    const ACRef = useRef<any>(null);
   
    useEffect(() => {
        if (ACRef.current) { console.log(ACRef.current) }
    }, [ACRef.current])

    return (
        
        <form>
            
            <AutomaticDropDown
                endpoint="/provincelist.json"
                showfield="province"
                control={control}
                name="province"
                ref={ACRef}
            />

            <AutomaticDropDown
                endpoint="/provincelist.json"
                showfield="cities"
                control={control}
                name="citiy"


            />
        </form>
        
    )
    
}
