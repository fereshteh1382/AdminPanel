import { useState } from 'react'
import MultiFormView1 from './MultiFormView1';
import MultiStepForm from '../pages/MultiStepForm';

const MultiFormHome = () => {
    const [activeform, setActiveform] = useState('add');

    return (
        <>
            <div className="toggle-buttons">
                <input type="radio" name="toggle" id="add" defaultChecked onClick={() => setActiveform('add')} />
                <label htmlFor="add">Add Data</label>

                <input type="radio" name="toggle" id="view" onClick={() => setActiveform('view')} />
                <label htmlFor="view">View Data</label>
            </div>
            <div className="content-div">
                {activeform === 'add' ? <MultiStepForm /> : <MultiFormView1 />}

            </div>
        </>

    )
}

export default MultiFormHome