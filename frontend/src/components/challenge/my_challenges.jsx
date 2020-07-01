import React from 'react';
import HuntCollectionItem from '../hunt/hunt_collection_item';
import Dropzone from 'react-dropzone';
import { ERRORS_PLAY_CHALLENGE } from '../../actions/challenge_actions';

class MyChallenges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedCollectionIdx: 0, errors: "", photoFiles: [], photoUrls: []}

    this.resetState = this.resetState.bind(this);
    this.onCollectionClick = this.onCollectionClick.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.submitChallenge = this.submitChallenge.bind(this);

    this.resetState();
  }

  resetState(){
    this.setState({selectedCollectionIdx: 0, errors: "", photoFiles: [], photoUrls: []});
  }

  componentDidMount(){
    this.props.fetchMyChallenges();
  }

  onCollectionClick(selectedIdx){
    return e=>{
      // TODO warn user, changing the hunt will discard all the images added!

      const selectedChallenge = this.props.challenges[selectedIdx][0];
      const photoCollectionCount = selectedChallenge.photo_collection.length;
      //reset state to prepare for new play hunt submission
      this.setState({selectedCollectionIdx: selectedIdx,
        errors: "",
        photoFiles: new Array(photoCollectionCount).fill(undefined),
        photoUrls: new Array(photoCollectionCount).fill(undefined)});
    }
  }


  submitChallenge(e){
    const selectedChallenge = this.props.challenges[this.state.selectedCollectionIdx][0];
    //check all photos sumitted
    if(this.state.photoUrls.filter((url) => url !== undefined).length === selectedChallenge.photo_collection.length){
      //all photos of the challenge has been submitted
      let formData = new FormData();

      formData.set("hunt_id", selectedChallenge._id);
      for (let i = 0; i < this.state.photoFiles.length; i++) {
        formData.append("images", this.state.photoUrls[i]);
      }  

      //submitting to server
    this.props.addPlayChallenge(formData)
    .then(res=>{
      if(res.type !== ERRORS_PLAY_CHALLENGE){
        console.log(res);
        //reset state on success
       this.resetState();
      }
    });
    }
  }

   // handle drop of photoFiles in drop zone
   handleDrop(idx){
    return (photoFiles) =>{
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
            const photoFilesArr = this.state.photoFiles;
            const photoUrlsArr  = this.state.photoUrls;

            photoFilesArr.splice(idx, 1, URL.createObjectURL(photoFile))
            photoUrlsArr.splice(idx, 1, photoFile)
          this.setState({ 
            photoFiles: photoFilesArr,
            photoUrls: photoUrlsArr
          });
        };
        fileReader.readAsDataURL(photoFile);
      }
    }
  }

  // Component that will render if the user has made one or more hunts
  render() {
    const selectedChallenge = this.props.challenges[this.state.selectedCollectionIdx][0];
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
                selectedChallenge? 
                selectedChallenge.photo_collection.map((photo, idx)=>{
                  return (
                    <li key={idx} className="comparison-zone">
                      <div className="my-challenges-photo">
                        <img src={photo} ></img>
                      </div>
                      <div className="my-challenges-drop-zone">
                        {
                          // show image if selected 
                          this.state.photoFiles && this.state.photoFiles[idx] ?
                          <div>
                           <img src={ this.state.photoFiles[idx]} ></img> 
                          </div> :
                          // show drop zone if no image is being selected
                          <Dropzone  onDrop={this.handleDrop(idx)}>
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
          <button className="my-challenges-create" onClick={this.submitChallenge}>Complete Challenge!</button>
        </div>
      </div>
    );
  }
}

export default MyChallenges;