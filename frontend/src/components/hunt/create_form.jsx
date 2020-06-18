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

    this.props.createHunt(formData);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  // works without binding???
  // when input field is clicked, removes placeholder
  handlePlaceholder(e) {
    e.currentTarget.placeholder = "";
  }

  // when input field is clicked then left, 
  // replaces placeholder or keeps current input
  checkPlaceholder(e) {
    if (e.currentTarget.placeholder === "") {
      e.currentTarget.placeholder = "Name Your Hunt...";
    }
  }
  
  render() {
    // refactor preview to be a title card upload
    const preview = this.state.titlecardUrl ? (
      <img height="200px" width="200px" src={this.state.photoUrl} />) : null;

  return (
    <div className="create-form">
      <h3 className="create-form-header">Create a Hunt</h3>
      <div className="card card-styling one"></div>
      <div className="card card-styling two"></div>
      <form onSubmit={this.handleSubmit} className="create-form-container three card card-styling">
        <div className='create-form-input-field'>
          <div className='create-form-title-container'>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              className='input-field'
              onClick={this.handlePlaceholder}
              onBlur={this.checkPlaceholder}
              placeholder="Name Your Hunt..."
              required=" "
            />
          </div>
          <div className="create-form-body">
            <div className='create-form-preview-container'>
              <label>Uploaded Photos</label>
              <ul>
                <li>Photo1</li>
                <li>Photo2</li>
                <li>Photo3</li>
                <li>Photo4</li>
              </ul>
            {/* <div className="photo-preview">{preview}</div> */}
            </div>
            <div className="create-form-body-right">
              <div className="create-form-drop-zone">
                <input type="file" onChange={this.handleFile} />
              </div>
              <div className="create-form-body-right-bottom">
                  <ul className="create-form-categories">
                    <li>
                      <button value="people" onClick={this.update("category")}>
                        People
                      </button>
                    </li>
                    <li>
                      <button value="places" onClick={this.update("category")}>
                        Places
                      </button>
                    </li>
                    <li>
                      <button value="thing" onClick={this.update("category")}>
                        Things
                      </button>
                    </li>
                    <li>
                      <button value="miscillanious" onClick={this.update("category")}>
                        Misc.
                      </button>
                    </li>
                  </ul>
                  <div className="create-form-submit-container">
                    <span className="create-form-due-date">Due Date:  06/ 19/ 2020</span>
                    <input className='create-form-submit button' type="submit" value="Set Game" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default CreateForm;