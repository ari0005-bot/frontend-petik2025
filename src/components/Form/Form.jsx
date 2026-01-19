import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    gender: "L",
    terms: false,
    alamat: "",
    profilePic: null,
    kelas: "PPW",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type == "checkbox") {
      value = e.target.checked;
    }

    if (e.target.type == "file") {
      value = e.target.files[0];
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Form: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama</label>
      <input type="text" name="name" id="nama" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="age">Umur</label>
      <input type="number" name="age" id="age" onChange={handleChange} />
      <br />
      <br />
      <fieldset>
        <legend>Jenis Kelamin</legend>
        <label htmlFor="male">Laki-laki</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="female">Perempuan</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={handleChange}
        />
      </fieldset>
      <br />
      <br />
      <label htmlFor="kelas">Kelas</label>
      <select name="class" id="kelas" onChange={handleChange}>
        <option value="" disabled>
          Pilih Kelas
        </option>
        <option value="PPW">PPW</option>
        <option value="PPM">PPM</option>
        <option value="PSJ">PSJ</option>
      </select>
      <br />
      <br />
      <label htmlFor="alamat">Alamat</label>
      <textarea name="alamat" id="alamat" onChange={handleChange}></textarea>
      <br />
      <br />
      <label htmlFor="terms">Syarat & Ketentuan</label>
      <input type="checkbox" name="terms" id="terms" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="file">Upload Foto</label>
      <input type="file" name="profilePic" id="file" onChange={handleChange} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;