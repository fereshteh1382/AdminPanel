import { useForm, type SubmitHandler } from 'react-hook-form'
type FormData = {
    title: string;
    alias: string;
    category: string;
    introtext: string
    fulltext: string;
    image: FileList;
    author: string;
    createDate: string;
    language: string

}
export default function addFormCreate() {
    const { register, handleSubmit, getValues, trigger, formState: { errors } } = useForm<FormData>();
    return (
        <div>
            {/* <form>
                <h2>Create New Article </h2>
                <input type="text"
                 placeholder="Title"
                 
                  {...register("title", {
                                required: "title Is Required!",
                                
                            })}
                />
                 {errors.title && <p className="error-text">{errors.title.message}</p>}
                 <input type="text"
                 placeholder="Aliase"
                 
                  {...register("alias", {
                                required: "Alias Is Required!",
                                
                            })}
                />
                 {errors.alias && <p className="error-text">{errors.alias.message}</p>}
                 <button type='button' className="btn btn-danger"  >Send</button>

            </form> */}
            <div className="form-grid">
                <div className="form-group">
                    <label>Title</label>
                    <input {...register("title", { required: "Title is Required" })} />
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
            </div>

        </div>
    )
}
