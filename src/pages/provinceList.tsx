import { useForm } from "react-hook-form"
import AutomaticDropDown from "../components/automaticDropDown"
import { useEffect, useRef } from "react";

export default function ProvinceList() {
    const { watch, control } = useForm()
    const stateId = watch('state_id');
    const ACRef = useRef();

    useEffect(() => {
        if (ACRef.current) { console.log(ACRef.current.name) }
    }, [ACRef.current])

    return (
        <form>
            <AutomaticDropDown
                endpoint="states"
                showfield="name"
                control={control}
                name="state_id"
                ref={ACRef}
            />

            <AutomaticDropDown
                endpoint="cities"
                showfield="name"
                control={control}
                name="city_id"


            />
        </form>
    )
}
