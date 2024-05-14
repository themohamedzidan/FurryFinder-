const AboutUs = () => {
    return (
        <div>
          <p className="color"> Furry-Finder provides a service for locating lost animals.
              Used by pet owners to locate their animal by scanning an NFC tag,
              that will be found on the animal's collar. This tag will contain the animal's and owner's details.
              That way Furry-Finder is a bridge between a person who found a lost animal and the pet owners.
              In addition, Furry-Finder will allows to users to find a
              list of nearby veterinarians and an option to contact them.
           </p>

          <div className="all">
                 <div className="box">
                  <h4>humaneness</h4>
                     <p>The platform encourages human contact between the owner and the pet's founder
                    in order to keep the animal in its natural environment.
                    </p>
                 </div>
                <div className="box">
                   <h4>reliability</h4>
                   <p>All the users who sign up identify themselves.
                    And veterinarians add a license.
                    </p>
               </div>
               <div className="box">
                 <h4>simplicity</h4>
                 <p>The platform allows for clear presentation of the data and
                   a simple user experience that allows you to easily scan an animal's NFC tag.
                 </p>
               </div>
            </div>
        </div>
    );
}
 
export default AboutUs ;