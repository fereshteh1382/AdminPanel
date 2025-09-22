import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const brotherSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().regex(/^\d+$/, "Age must be a number").min(1, "Age is required"),
  Birthday: z.string().min(2, "Birthday must be at least 2 characters"),
  Job: z.string().min(2, "Job must be at least 2 characters"),
  Address: z.string().min(2, "Address must be at least 2 characters"),
  phone: z.string().regex(/^09\d{9}$/, "Invalid phone number"),
  education: z.enum(["Diploma", "Bachelor", "Master", "PhD"]),
  Marriage: z.enum(["Marrid", "Single", "Other"]),
  file: z.any().refine((file) => file?.length > 0, "آپلود فایل الزامی است"),
  // files:z.array(z.any(),)
  //age:z.coerce.number()
});

// 🎯 اسکیمای کل فرم (لیست برادرها)
const formSchema = z.object({
  brothers: z.array(brotherSchema).min(1, "At least one brother is required"),
});

type FormType = z.infer<typeof formSchema>;

export default function BrothersForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      brothers: [
        { name: "", education: "Diploma", Marriage: "Single", age: "", Birthday: "", Job: "", Address: "", phone: "", file: undefined },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "brothers",
  });

  const onSubmit = (data: FormType) => {
    console.log("✅ Submitted Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",

      }}

    >
      <h2>Brothers Info</h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
          className="form-grid"
        >


          {/* Name */}
          <div >
            <label>Name</label>
            <input {...register(`brothers.${index}.name`)} placeholder="Name" />
            {errors.brothers?.[index]?.name && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.name?.message}
              </p>
            )}
          </div>
          {/* Education */}
          <div>
            <label>Education</label>
            <select {...register(`brothers.${index}.education`)}>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.brothers?.[index]?.education && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.education?.message}
              </p>
            )}
          </div>
          {/* Marriage */}
          <div>
            <label>Marriage</label>

            <select {...register(`brothers.${index}.Marriage`)} >
              <option value="Marrid">Marrid</option>
              <option value="Single">Single</option>
              <option value="Other">Other</option>
            </select>
            {errors.brothers?.[index]?.Marriage && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.Marriage?.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label>Age</label>
            <input type="number"
              {...register(`brothers.${index}.age`)}
              placeholder="Age"
            />
            {errors.brothers?.[index]?.age && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.age?.message}
              </p>
            )}
          </div>
          {/* Birthday */}
          <div>
            <label>Birthday</label>
            <input type="date" {...register(`brothers.${index}.Birthday`)} placeholder="Birthday" />
            {errors.brothers?.[index]?.Birthday && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.Birthday?.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label>Phone</label>
            <input
              {...register(`brothers.${index}.phone`)}
              placeholder="09xxxxxxxxx"
            />
            {errors.brothers?.[index]?.phone && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.phone?.message}
              </p>
            )}
          </div>
          {/* Job */}
          <div>
            <label>Job</label>
            <input {...register(`brothers.${index}.Job`)} placeholder="Job" />
            {errors.brothers?.[index]?.Job && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.Job?.message}
              </p>
            )}
          </div>
          {/* Address */}
          <div>
            <label>Address</label>
            <textarea
              {...register(`brothers.${index}.Address`)}
              placeholder="Enter address"
              rows={3}
              style={{ width: "100%" }}
            />

            {errors.brothers?.[index]?.Address && (
              <p style={{ color: "red" }}>
                {errors.brothers[index]?.Address?.message}
              </p>
            )}
          </div>
          {/* آپلود فایل */}
          <div>
            <label>آپلود فایل</label>
            <input type="file" {...register(`brothers.${index}.file`)} />
            {errors.brothers?.[index]?.file && (
              <p style={{ color: "red" }}>{errors.brothers[index]?.file?.message}</p>
            )}
          </div>
          <div>***</div>
          <button type="button" className="btn btn-danger" onClick={() => remove(index)} style={{ width: "20%" }}>
            Remove
          </button>
        </div>
      ))}

      {/* دکمه اضافه کردن برادر جدید */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => append({ name: "", education: "Diploma", Marriage: "Single", age: "", Birthday: "", Job: "", Address: "", phone: "", file: undefined })}
        style={{ width: "10%" }}
      >
        + Add Brother
      </button>

      {/* خطای کل آرایه (مثلاً اگر هیچ برادری وجود نداشته باشه) */}
      {errors.brothers &&
        !Array.isArray(errors.brothers) &&
        (errors.brothers as any).message && (
          <p style={{ color: "red" }}>{(errors.brothers as any).message}</p>
        )}


      <button type='submit' className="btn btn-primary" style={{ width: "20%" }}> Save</button>


    </form>
  );
}
