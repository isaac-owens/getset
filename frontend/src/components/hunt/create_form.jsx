import React from 'react';
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ERRORS_USER_HUNT } from '../../actions/user_hunt_actions';
import  CreateModal  from './create_modal';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dueDate: Date.now,
      category: "",
      author: this.props.currentUser,
      photoFiles: [],
      photoUrls: [],
      errors: "",
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handlePhotoFileDelete = this.handlePhotoFileDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.set("title", this.state.title);
    formData.set("dueDate", this.state.dueDate);
    formData.set("category", this.state.category);

    //build photo_collection array
    if (this.state.photoFiles.length > 0) {
      for (let i = 0; i < this.state.photoFiles.length; i++) {
        formData.append("photo_collection", this.state.photoUrls[i]);
      }
    }

    //submitting to server
    this.props.createUserHunt(formData)
    .then(res=>{
      if(res.type !== ERRORS_USER_HUNT){
        //reset state on success
        this.setState({
          title: "",
          dueDate: Date.now,
          category: "",
          categoryName: "",
          author: this.props.currentUser,
          photoFiles: [],
          photoUrls: [],
          errors: ""
        })
        this.setState({ modalOpen: true })
      }
    });
  }

  update(field) {
    return (e) => {
      if(field === 'category'){
        this.setState({ categoryName: e.currentTarget.name })
      }
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

  // handle drop of photoFiles in drop zone
  handleDrop(photoFiles){
    //update photoFiles array as user drag photoFiles to drop zone
    if (photoFiles) {
      //set drop zone error to empty if there is any error
      if(this.state.errors.length !== 0){
        this.setState({errors: ""})
      }

      for (let index = 0; index < photoFiles.length; index++) {
        let fileReader = new FileReader();
        const photoFile =  photoFiles[index];

        fileReader.onloadend = () => {
          if(this.state.photoFiles.length < 10){
            //update photoFiles and photoUrls in state
          this.setState({ photoFiles: this.state.photoFiles.concat(URL.createObjectURL(photoFile)),
             photoUrls: this.state.photoUrls.concat(photoFile) });
          } else {
            //set drop zone error in state
            this.setState({errors: "Sorry, no more than 10"})
          }
        };
        fileReader.readAsDataURL(photoFile);
      }
    }
  }
  
  //delete photo file @idx is the index of file to delete
  handlePhotoFileDelete(idx){
    return e => {
      //remove file from photoFiles and 
      this.state.photoFiles.splice(idx,1);
      this.state.photoUrls.splice(idx,1);
      this.setState({photoFiles: this.state.photoFiles, photoUrls: this.state.photoUrls})
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }
  

  render() {
    let redEx = <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
    const categories = this.props.categories ? this.props.categories : [];

  return (
    <div className="create-form">
      {/* This is the drop zone error card */}
      <div className="create-form-drop-zone-error card-styling">
        {this.state.errors}
      </div>
      {/* This is the drop zone error card */}

      {/* These are create form errors from backend */}
      <div className="create-form-submission-errors card-styling">
        <ul>
          {Object.values(this.props.errors).map((error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul>
      </div>
      {/* These are the create form errors from backend */}

      {/* <div className="create-form-header">Create a Hunt</div> */}
      <div className="card card-styling one"></div>


      <div className="card card-styling two"></div>
      <div className="create-form-container three card card-styling">
        <div className="create-form-input-field">
          <div className="create-form-title-container">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.update("title")}
              className="input-field"
              onClick={this.handlePlaceholder}
              onBlur={this.checkPlaceholder}
              placeholder="Name Your Hunt..."
            />
          </div>
          

          <div className="create-form-body">
            <div className="create-form-preview-container">
              <ul className="create-form-img-preview">
                {this.state.photoFiles.map((photoFile, idx) => {
                  return (
                    <li className="hunt-photo" key={idx}>
                      <div
                        className="red-ex"
                        onClick={this.handlePhotoFileDelete(idx)}
                      >
                        {redEx}
                      </div>
                      <img src={photoFile} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="create-form-body-right">
              <div className="create-form-drop-zone">
                <Dropzone onDrop={this.handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "drop-zone" })}>
                      <input {...getInputProps()} />
                      <div className="drop-zone-target">
                        <p>
                          Drag'n'drop photos here, or click to select photoFiles
                        </p>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>
              <div className="create-form-body-right-bottom">
                <div className="current-category">
                  <span className='current-category-title'>Category: </span>
                  {this.state.categoryName}
                </div>
                <ul className="create-form-categories">
                  {categories.map((category, idx) => {
                    return (
                      <li key={idx}>
                        <button
                          name={category.name}
                          value={category._id}
                          onClick={this.update("category")}
                        >
                          {category.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="create-form-submit-container">
                  <button
                    onClick={this.handleSubmit}
                    className="create-form-submit"
                  >
                    Set Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {this.state.modalOpen ? <CreateModal closeModal={this.closeModal}/> : <div></div>}
    </div>

  );
  }
}

export default CreateForm;