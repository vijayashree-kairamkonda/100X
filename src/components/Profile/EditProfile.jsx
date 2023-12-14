import arrowLeft from "../../assets/arrowleft.svg";
import photoOutline from "../../assets/photo-outline.svg";
import x from "../../assets/x.svg";
import { Avatar } from "../shared/Avatar";
import { Button } from "../shared/Button";
import PropTypes from "prop-types";
import { Fieldset } from "../shared/Fieldset";
import { Input } from "../shared/Input";
import { useNavigate } from "react-router-dom";

export const EditProfile = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-2">
        <div className="flex justify-between items-center">
          <span className="flex space-x-2">
            <span onClick={() => navigate("/profile")}>
              <img src={arrowLeft} />
            </span>
            <span>Edit profile</span>
          </span>
          <span>
            <Button width="sm" size="sm" variant="default">
              Save
            </Button>
          </span>
        </div>

        <div className="relative my-8">
          <div>
            <img src={user?.userBackground} className="w-full" />
            <div className="flex space-x-4 items-center justify-center absolute bottom-14 w-full">
              <div className="bg-neutral-700 rounded-full p-2">
                <img src={photoOutline} />
              </div>
              <div>
                <div className="bg-neutral-700 rounded-full p-2">
                  <img src={x} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute box-content rounded-full border-4 border-neutral-1000 -bottom-9 left-3">
            <Avatar url={user?.userImage} />
            <div className="absolute bottom-5 left-5 rounded-full p-2">
              <img src={photoOutline} />
            </div>
          </div>
        </div>

        <div className="flex flex-col my-8 space-y-4">
          <Fieldset name="Name" style="default" legend="default">
            <Input
              value={""}
              placeholder="Name"
              onChange={() => {}}
              type="text"
            />
          </Fieldset>
          <Fieldset name="Bio" style="default" legend="default">
            <Input
              value={""}
              placeholder="Bio"
              onChange={() => {}}
              type="text"
              textArea
            />
          </Fieldset>
          <Fieldset name="Location" style="default" legend="default">
            <Input
              value={""}
              placeholder="Location"
              onChange={() => {}}
              type="text"
            />
          </Fieldset>
          <Fieldset name="Website" style="default" legend="default">
            <Input
              value={""}
              placeholder="Website"
              onChange={() => {}}
              type="text"
            />
          </Fieldset>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.objectOf({
    id: PropTypes.number,
    username: PropTypes.string,
    userFullName: PropTypes.string,
    bio: PropTypes.string,
    userImage: PropTypes.url,
    userBackground: PropTypes.url,
    bioLink: PropTypes.url,
  }),
};
