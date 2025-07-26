import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { FaRegCalendarAlt } from "react-icons/fa";

type FormData = {
    title: string;
    alias: string;
    category: string;

    fulltext: string;
    image: FileList;
    author: string;
    createDate: string;
    language: string

}
export default function addFormCreate() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Title</label>
                        <input {...register("title", { required: "Required" })} />
                        {errors.title && <p className="error-text">{errors.title.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>Alias</label>
                        <input {...register("alias", { required: "Required" })} />
                        {errors.alias && <p className="error-text">{errors.alias.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select {...register("category", { required: "Required" })}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.category && <p className="error-text">{errors.category.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select {...register("author", { required: "Required" })}>
                            <option value="">Select</option>
                            <option value="author1">Author1</option>
                            <option value="author2">Author2</option>
                        </select>
                        {errors.author && <p className="error-text">{errors.author.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Language</label>
                        <select {...register("language")}>
                            <option value="">Select</option>
                            <option value="fa">Fa</option>
                            <option value="en">En</option>
                        </select>
                        {errors.language && <p className="error-text">{errors.language.message}</p>}
                    </div>
                    {/*  <div className="form-group">
                        <label>Date</label>
                        <input {...register("createDate")} />
                        {errors.createDate && <p className="error-text">{errors.createDate.message}</p>}
                    </div> */}
                    <div className="form-group">
                        <Controller
                            control={control}
                            name="createDate"
                            rules={{ required: "تاریخ الزامی است" }}
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="تاریخ را انتخاب کنید"
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    className="form-control"
                                    calendarClassName="calendar"
                                />
                            )}
                        />
                       <i className="fa fa-calendar" style={{}}></i>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="file"
                            {...register("image", {
                                required: "Image Is Required!",

                            })}
                        />
                        {errors.image && <p className="error-text">{errors.image.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>fulltext</label>
                        <input {...register("fulltext")} />
                        {errors.fulltext && <p className="error-text">{errors.fulltext.message}</p>}
                    </div>

                    <button type='submit' className="btn btn-primary" > Save</button>

                </div>

            </form >
        </div >
    )
}
