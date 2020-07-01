import React from 'react';
import HuntCollectionItem from '../hunt/hunt_collection_item';
import Dropzone from 'react-dropzone';

class MyChallenges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCollectionIdx: 0, errors: "", potoFile: undefined, photoUrl: undefined};

    this.onCollectionClick = this.onCollectionClick.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount(){
    this.props.fetchMyChallenges();
  }

  onCollectionClick(selectedIdx){
    return e=>{
      this.setState({selectedCollectionIdx: selectedIdx})
    }
  }

   // handle drop of photoFiles in drop zone
   handleDrop(photoFiles){
    //update photoFiles array as user drag photoFiles to drop zone
    if (photoFiles) {
      //set drop zone error to empty if there is any error
      // if(this.state.errors.length !== 0){
      //   this.setState({errors: ""})
      // }
      let fileReader = new FileReader();
      const photoFile =  photoFiles[0];
      fileReader.onloadend = () => {
          //update photoFiles and photoUrls in state
        this.setState({ photoFile: URL.createObjectURL(photoFile),
            photoUrl: photoFile});
      };
      fileReader.readAsDataURL(photoFile);
    }
  }

  // Component that will render if the user has made one or more hunts
  render() {
    return (
      <div className="my-challenges">
        <div className="my-challenges-list card-styling">
          <ul className="my-challenges-collection-list">
            {/* dynamically build user's accepted challenges list */}
            {this.props.challenges.map((challenge, idx) => {
              return <HuntCollectionItem klassName={true}  key={idx} hunt={challenge[0]}
                onCollectionClick={this.onCollectionClick(idx)}/>
            })}
          </ul>
        </div>
        <div className="my-challenges-page-right">
          <div className="my-challenges-photo-collection card-styling">
            <ul className="my-challenges-comparison-list">
              
              {
                this.props.challenges[this.state.selectedCollectionIdx][0]? 

                this.props.challenges[this.state.selectedCollectionIdx][0].photo_collection.map((photo, idx)=>{
                  return (
                    <li key={idx} className="comparison-zone">
                      <div className="my-challenges-photo">
                        <img src={photo} ></img>
                      </div>
                      <div className="my-challenges-drop-zone">
                        {
                          // show image if selected 
                          this.state.photoFile ? <img src={this.state.photoFile} ></img> :
                          // show drop zone if no image is being selected
                        <Dropzone  onDrop={this.handleDrop}>
                          {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: "drop-zone" })}>
                              <input {...getInputProps()} />
                              <div className="my-challenges-drop-zone-message">
                                <p>
                                  Drag'n'drop photo here, or click to select photoFile
                                </p>
                              </div>
                            </div>
                          )}
                        </Dropzone>   
                      }   
                      </div>
                    </li>
                  )
                }):

                  <li className="comparison-zone">
                      <div className="my-challenges-photo">image</div>
                      <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
                  </li>
              }
            </ul>
          </div>
          <button className="my-challenges-create">Complete Challenge!</button>
        </div>
      </div>
    );
  }
}

export default MyChallenges;