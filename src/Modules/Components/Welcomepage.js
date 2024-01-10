import React from 'react';
import { useForm } from 'react-hook-form';
const myarray = [];

function Welcomepage() {


  const { register, handleSubmit, formState: { errors } } = useForm();

  const mysubmit = (alldata) => {
    console.log(alldata);
    myarray.push(alldata);
    localStorage.setItem("userdata", JSON.stringify(myarray));
  }
  return (
    <form onSubmit={handleSubmit(mysubmit)}>
      <div className='container page border p-5 shadow bg-dark'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center text-light fs-10' ><u>STUDENT REGISTRATION FORM</u></h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 p-3 text-light'>
            <label className="form-label">Full Name<span className='text-danger'>*</span></label>
            <input type="text" className="form-control"{...register("fullname", { required: true, pattern: /^[A-Za-z]+$/
           })} />
            {errors.fullname && <span className='text-danger'>full name is required</span>}
          </div>
          <div className='col-md-6 p-3 text-light'>
            <label className="form-label">Email id<span className='text-danger'>*</span></label>
            <input type="email" className="form-control"{...register("email", { required: true })} />
            {errors.email && <span className='text-danger'>email is required</span>}
          </div>

          <div className='col-md-6 p-3 text-light'>
            <label className="form-label">Phone No<span className='text-danger'>*</span></label>
            <input type="text" className="form-control"{...register("phone", { required: true, maxLength: 10})} />
            {errors.phone && <span className='text-danger'>phone number is required</span>}
          </div>
          <div className='col-md-6 p-3 text-light'>
            <label className="form-label">Course<span className='text-danger fs-20'>*</span></label>
            <select className="form-control" {...register("course", { required: true })}>
            {errors.course && <span className='text-danger'>course is required</span>}
              <option hidden>Course:-
              </option>
              <option>Mern stack</option>
              <option>Mean stack</option>
              <option>Python full stack</option>
              <option>Java full stack</option>
              <option>Dotnet</option>
              <option>Angular</option>
              <option>Other</option>

            </select>
          </div>
          <div className='col-md-6 p-3 text-light'>
            <label className="form-label">Batch time<span className='text-danger'>*</span></label>
            <input type="time" className="form-control"{...register("time", { required: true })} />
            {errors.time && <span className='text-danger'>Batch time is required</span>}
          </div>
          <div className='col-md-6 p-3 text-light'>

            <label className="form-label">Student Id<span className='text-danger'>*</span></label>
            <input type="text" className="form-control"{...register("id", { required: true, })} />
            {errors.id && <span className='text-danger'>ID is required</span>}


          </div>

          <div className='col-md-12 p-3 text-center'>
            <button type='submit' className='btn btn-success'> Submit</button>
            <button type='reset' className='btn btn-danger ms-3'> Cancel</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Welcomepage



