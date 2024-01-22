import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import * as Yup from "yup";
import "./index.scss";

const AddPage = () => {
  const [courses, setCourses] = useState(null);
  const [seacrhValue, setSeacrhValue] = useState('')
  const [sortValue, setSortValue] = useState(null)
  const getAllCourses = async () => {
    const resp = await axios("http://localhost:3000/");
    setCourses(resp.data);
  };

  const addCourse = async (values)=>{
    await axios.post(`http://localhost:3000/`,values);
    getAllCourses()
  }

  const deleteCourse = async (id)=>{
    await axios.delete(`http://localhost:3000/${id}`);
    getAllCourses()
  }

  const isLowerCase = (item)=>{
    if (typeof item === String) {
      return item.toLocaleLowerCase()
    }
    else{
      return item
    }
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
    <div><Toaster/></div>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="addForm">
        <div className="container">
          <Formik
            initialValues={{
              image: "",
              title: "",
              desc: "",
              author: "",
              authorImage: "",
              price: "",
            }}
            validationSchema={Yup.object({
              image: Yup.string()
                .matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Must Start With Letter!')
                .required("Required"),
              title: Yup.string()
                .max(50, "Must be 50 characters or less")
                .matches(/^[A-Za-z]/, 'Must Start With Letter!')
                .required("Required"),
              desc: Yup.string()
              .max(150, "Must be 150 characters or less")
              .required("Required"),
              author: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
              authorImage: Yup.string()
              .matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Must Start With Letter!')
              .required("Required"),
              price: Yup.number()
              .min(1, "Must be 1  or more")
              .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                addCourse(values)
                resetForm()
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <h2>Add Form</h2>

              <div>
                <label htmlFor="image">Image</label>
                <Field className="form-control" name="image" type="text" />
                <div className="error">
                  <ErrorMessage name="image" />
                </div>
              </div>

              <div>
                <label htmlFor="title">title</label>
                <Field className="form-control" name="title" type="text" />
                <div className="error">
                  <ErrorMessage name="title" />
                </div>
              </div>

              <div>
                <label htmlFor="desc">desc</label>
                <Field className="form-control" name="desc" type="text" />
                <div className="error">
                  <ErrorMessage name="desc" />
                </div>
              </div>

              <div>
                <label htmlFor="author">author</label>
                <Field className="form-control" name="author" type="text" />
                <div className="error">
                  <ErrorMessage name="author" />
                </div>
              </div>

              <div>
                <label htmlFor="authorImage">authorImage</label>
                <Field
                  className="form-control"
                  name="authorImage"
                  type="text"
                />
                <div className="error">
                  <ErrorMessage name="authorImage" />
                </div>
              </div>

              <div>
                <label htmlFor="price">price</label>
                <Field className="form-control" name="price" type="number" />
                <div className="error">
                  <ErrorMessage name="price" />
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <section id="table">
        <div className="container">
        <input  type="text" className="form-control search" placeholder="Search" onChange={(e)=>setSeacrhValue(e.target.value)} />
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:true})}>Sort By Title: A-Z</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:false})}>Sort By Title: Z-A</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:true})}>Sort By Price: Increase</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:false})}>Sort By Price: Decrease</button>
        <button className="btn btn-dark" onClick={()=>setSortValue(null)}>Default</button>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Author</th>
                <th>Author Image</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses &&
                courses
                .filter(x=> x.title.toLowerCase().includes(seacrhValue.toLocaleLowerCase()))
                .sort((a,b)=>{
                  if (sortValue && sortValue.asc ===true) {
                    return  (isLowerCase(a[sortValue.property]) > isLowerCase(b[sortValue.property])) ? 1 : ((isLowerCase(b[sortValue.property]) > isLowerCase(a[sortValue.property])) ? -1 : 0)
                  }
                  else if(sortValue && sortValue.asc ===false){
                    return  (isLowerCase(a[sortValue.property]) < isLowerCase(b[sortValue.property])) ? 1 : ((isLowerCase(b[sortValue.property]) < isLowerCase(a[sortValue.property])) ? -1 : 0)
                  }
                  else{
                    return 0
                  }
                })
                .map((item) => (
                  <tr key={item._id}>
                    <td>{item.image}</td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>{item.author}</td>
                    <td>{item.authorImage}</td>
                    <td>${item.price}</td>
                    <td><button onClick={()=>deleteCourse(item._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;
