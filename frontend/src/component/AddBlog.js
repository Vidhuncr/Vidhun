import { useState } from "react"
import axios from 'axios';

function AddBlog() {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image:""
    })

    const changeEvent = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const result = await sendRequest();
    }

    const sendRequest = async () => {
        const response = await axios.post(`http://localhost:5000/api/blog/add`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.image,
            user: "123"
        })
        .catch((err) => {
            console.log(err);
        });
        const data = response.data;
        console.log(data)
        return data;
    }
    return (
        <div className="login-container">
            <form onSubmit={submitHandler}>
                <h2>Add Blog</h2>
                    <div className="form-group">
                        <label>Title:</label>
                        <input name="title" value={inputs.title} onChange={changeEvent} type="text" className="form-control" />
                    </div>
                
                <div className="form-group">
                    <label>Description:</label>
                    <input name="description" value={inputs.description}  onChange={changeEvent} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input name="image" value={inputs.image}  onChange={changeEvent} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

export default AddBlog;