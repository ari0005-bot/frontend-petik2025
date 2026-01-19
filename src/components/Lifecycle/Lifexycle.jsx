import { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor: Komponen dibuat");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("2. componentDidMount: Komponen sudah dirender ke DOM");

    // Manipulasi DOM setelah komponen tampil
    const btn = document.getElementById("btn");
    btn.textContent = "Klik untuk tambah";
    btn.style.backgroundColor = "#3674B5";
    btn.style.color = "#fff";

    this.interval = setInterval(() => {
        console.log("Count sekarang", this.state.count);
        
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "3. componentDidUpdate: komponen diperbarui",
      prevState.count,
      "→",
      this.state.count
    );
  }

  componentWillUnmount(){
    console.log("4. componentWillUmmounts: komponen akan dihapus");
    
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    console.log("Render dijalankan");

    return (
      <div>
        <h3>React Lifecycle</h3>
        <p>Count: {this.state.count}</p>
        <button id="btn" onClick={this.increment}>
          Tambah
        </button>
      </div>
    );
  }
}
