import { Autocomplete,Input} from "@mui/joy";
import { Controller, type Control } from "react-hook-form";
import { forwardRef,useEffect, useState } from "react";

interface Props {
  endpoint: string;
  showfield: string; 
  control: Control;
  name: string;
}
interface Item {
    id: number;

}
const AutomaticDropDown = ({ endpoint, showfield, control, name}: Props, ref: any) => {

/*export default function AutomaticDropDown({
  endpoint,
  showfield,
  control,
  name,
}: Props) {*/
  const [items, setItems] = useState<any[]>([]);
  const [item, setItem] = useState<Item | null>();

  useEffect(() => {
    if (ref) {
        ref.current = item;
    }
}, [item]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
       
        if (showfield === "province") {
          setItems(data.map((p: any) => p.province));
        } else if (showfield === "cities") {
          const allCities = data.flatMap((p: any) => p.cities);
          setItems(allCities);
        }
      });
  }, [endpoint, showfield]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        
        <Autocomplete
          placeholder="انتخاب کنید..."
          options={items}
          getOptionLabel={(item) => (typeof item === "string" ? item : "")}
          value={value || null}
          onChange={(_, v) => {
            onChange(v || null);  // برای react-hook-form
            setItem(v || null);    // برای ref
        }}
          slotProps={{
            input: {
              sx: {
                fontFamily: "Vazir, sans-serif",
                textAlign: "right",
                fontSize: "0.95rem",
                padding: "8px 12px",
                direction:"rtl",
              },
            },
            
          }}
          sx={{
            direction: "rtl",
            width: 600,
            "& .JoyList-root": { textAlign: "right" },
            "& .JoyOption-root": {
              fontFamily: "Vazir, sans-serif",
              fontSize: "0.95rem",
              
            },
            
          }}
        />
      )}
    />
  );
}
export default forwardRef(AutomaticDropDown);
