import { Autocomplete, Input } from "@mui/joy"
import { forwardRef, useEffect, useState } from "react"
import { Controller, type Control } from "react-hook-form";
import { api } from "../configs/config"

interface Props {
    endpoint: string;
    showfield: string;
    control: Control;
    name: string;
    params?: any;
    ref?: any;
}
interface Item {
    id: number;

}
const AutomaticDropDown = ({ endpoint, showfield, control, name, params }: Props, ref: any) => {

   // export default function AutomaticDropDown({ endpoint, showfield, control, name, params, ref }: Props) {
    const [items, setItems] = useState<any[]>([])
    const [item, setItem] = useState<Item | null>();

    useEffect(() => {
        if (ref) {
            ref.current = item;
        }
    }, [item]);

    useEffect(() => {
        api.get(endpoint, {
            params
        }).then(res => setItems(res.data))
    }, [params])

    console.log(items)
    
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange } }) => (
                <Autocomplete
                    options={items}
                    getOptionLabel={item => item[showfield]}
                    onChange={(_, v) => {
                        onChange(v ? v.id : undefined);
                        setItem(v);
                    }}
                    slotProps={{
                        input: {}
                    }
                    }
                    sx={{
                        mx: { xs: 1, sm: 2 }
                    }}
                />
            )}
        />
    )
}
export default forwardRef(AutomaticDropDown);