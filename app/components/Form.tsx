"use client";

export default function Form() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const value1 = e.target.input1.value;
    const value2 = e.target.input2.value;

    const res= await fetch('/api/hello',{
      method: 'POST',
      body: JSON.stringify({value1,value2}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const message= await res.json();

    alert(JSON.stringify(message))

  };
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mr-32 mt-10"
        id="input1"
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mr-32 mt-10"
        id="input2"
      />
      <button
        className="btn btn-ghost w-full max-w-xs mr-32 mt-10"
        id="btnForm">
        Ghost
      </button>
    </form>
  );
}
