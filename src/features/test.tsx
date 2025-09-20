import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const brotherSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters")
});
// Zod schema
const formSchema = z.object({
  persons: z.array(brotherSchema)
 
});

// نوع فرم
type FormType = z.infer<typeof formSchema>;

export default function A() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      persons: [{ name: ""}],
    },
  });

  // نکته مهم: اینجا به جای FormType، FieldValues رو می‌دیم
  const { fields, append, remove } = useFieldArray({
    control,
    name: "persons", 
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`persons.${index}`)} />
          {errors.persons?.[index] && (
            <p style={{ color: "red" }}>{errors.persons[index]?.message}</p>
          )}
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append("")}>
        Add
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
