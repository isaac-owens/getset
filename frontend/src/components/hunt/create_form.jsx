import React from 'react';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      category: "",
      author: this.props.currentUser,
      photoFile: null,
      photoUrl: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hunt[title]", this.state.title);
    formData.append("hunt[dueDate]", this.state.dueDate);
    formData.append("hunt[author]", this.state.author);
    formData.append("hunt[category]", this.state.category);

    if (this.state.photoFile) {
      formData.append("hunt[photo]", this.state.videoFile);
    }

    this.props.createVideo(formData);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    // refactor preview to be a title card upload
    const preview = this.state.titlecardUrl ? (
      <img height="200px" width="200px" src={this.state.photoUrl} />
    ) : null;

    // add page name to header
    return (
      <div>
        {/* <h3>Create a Hunt</h3> */}
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFile} />
          <h3>Get Image</h3>
          <br />
          <h4>Preview</h4>
          <div className="preview">{preview}</div>
          <br />
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            required=" "
          />
          <label className="upload-labels">Title</label>
          <br />
          <input
            type="date"
            value={this.state.dueDate}
            onChange={this.update("dueDate")}
          />
          <label className="upload-labels">Due Date ~within 3 days!</label>

          <ul>
            <li>
              <button value="category1" onClick={this.update("category")}>
                category1
              </button>
            </li>
            <li>
              <button value="category2" onClick={this.update("category")}>
                category2
              </button>
            </li>
            <li>
              <button value="category3" onClick={this.update("category")}>
                category3
              </button>
            </li>
            <li>
              <button value="category4" onClick={this.update("category")}>
                category4
              </button>
            </li>
          </ul>

          <br />
          <input type="submit" value="Set Game" />
        </form>
      </div>
    );
  }
}

export default CreateForm;