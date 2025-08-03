import { useFormDataContext } from "../features/users/components/multiformcontext"

export default function MultiFormView1() {
    const { data } = useFormDataContext();

    return (
        <div className="success-message">
            <i className="fas fa-check-circle success-icon"></i>
            <h2>Success!</h2>
            <p>We've Recieved Your Application.</p>
            <div className="summary-box">
                <h3>Submitted Information</h3>
                <ul>
                    <li><strong>Location:</strong> {data.location}<i className="fas fa-check-circle check-icon"></i></li>
                    <li><strong>Role:</strong> {data.roles/*getValues("roles")*/}<i className="fas fa-check-circle check-icon"></i></li>
                    <li><strong>Name:</strong> {data.name/*getValues("name")*/}<i className="fas fa-check-circle check-icon"></i></li>
                    <li><strong>Phone:</strong> {data.phone/*getValues("phone")*/}<i className="fas fa-check-circle check-icon"></i></li>
                    <li><strong>Certification:</strong> {data.certification?.[0]?.name}<i className="fas fa-check-circle check-icon"></i></li>
                </ul>
            </div>
        </div>
    )
}

