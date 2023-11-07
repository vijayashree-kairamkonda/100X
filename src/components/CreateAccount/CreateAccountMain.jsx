import { useContext } from "react";
import { days31, monthOptions, years } from "../../constants/Constants";
import { SelectInput } from "../shared/SelectInput";
import { CreateAccountContext } from "../../context/createAccount/CreateAccountContext";
import { Fieldset } from "../shared/Fieldset";
import { Input } from "../shared/Input";

export const CreateAccountMain = () => {
  const { steps, userDetails, setUserDetails } =
    useContext(CreateAccountContext);

  return (
    <>
      {steps === "2" ? (
        <>
          <div className="font-bold text-base">Create your account</div>
          <Fieldset name="Name" style="selected" legend="selected">
            <Input
              readOnly
              value={userDetails?.name}
              placeholder="Name"
              type="text"
              verified
            />
          </Fieldset>
          <Fieldset name="Email" style="selected" legend="selected">
            <Input
              readOnly
              value={userDetails?.email}
              placeholder="Email"
              type="email"
              verified
            />
          </Fieldset>

          <Fieldset name="Name" style="selected" legend="selected">
            <Input
              readOnly
              value={` ${userDetails?.birthDay} / ${userDetails?.birthMonth} / ${userDetails?.birthYear}`}
              placeholder="Date of birth"
              type="text"
              verified
            />
          </Fieldset>
        </>
      ) : steps === "3" ? (
        <>
          <div className="font-bold text-base">We sent you a code</div>
          <div className="text-neutral-500 font-normal">
            Enter it below to verify vijayashree@gmail.com
          </div>
          <div className=" flex flex-col">
            <Fieldset name="Verification code" style="default" legend="default">
              <Input
                value={""}
                placeholder="Verification code"
                onChange={() => {}}
                type="number"
              />
            </Fieldset>
            <div className="text-twitter-default font-normal flex justify-end">
              Didn&apos;t receive a code?
            </div>
          </div>
        </>
      ) : steps === "4" ? (
        <>
          <div className="flex flex-col space-y-2">
            <div className="font-bold text-base">
              You&apos;ll need a password
            </div>
            <div className="text-neutral-500 font-normal">
              Make sure it&apos;s 8 characters or more
            </div>
            <Fieldset name="Password" style="default" legend="default">
              <Input
                value={userDetails?.password}
                placeholder="Password"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, password: e.target.value });
                }}
                type="password"
              />
            </Fieldset>
          </div>
        </>
      ) : (
        <>
          <div className="font-bold text-base">Create your account</div>
          <div className="flex flex-col space-y-4">
            <Fieldset name="Name" style="default" legend="default">
              <Input
                value={userDetails?.name}
                placeholder="Name"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
                type="text"
              />
            </Fieldset>

            <Fieldset name="Email" style="default" legend="default">
              <Input
                value={userDetails?.email}
                placeholder="Email"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                type="email"
              />
            </Fieldset>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="font-bold text-base">Date of birth</span>
            <span className="font-normal text-neutral-500">
              This will not be shown publicly.Confirm your own age, even if this
              account is for a business, a pet, or something else.
            </span>
          </div>

          <div className="flex space-x-2 py-2">
            <div className="w-full">
              <Fieldset name="Month" style="default" legend="default">
                <SelectInput
                  value={userDetails?.birthMonth}
                  defaultVal={monthOptions?.[0]?.value}
                  options={monthOptions}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      birthMonth: e.target.value,
                    });
                  }}
                />
              </Fieldset>
            </div>
            <div className="w-full">
              <Fieldset name="Day" style="default" legend="default">
                <SelectInput
                  value={userDetails?.birthDay}
                  defaultVal={days31?.[0]?.value}
                  options={days31}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      birthDay: e.target.value,
                    });
                  }}
                />
              </Fieldset>
            </div>
            <div className="w-full">
              <Fieldset name="Year" style="default" legend="default">
                <SelectInput
                  value={userDetails?.birthYear}
                  options={years}
                  defaultVal={years?.[0]?.value}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      birthYear: e.target.value,
                    });
                  }}
                />
              </Fieldset>
            </div>
          </div>
        </>
      )}
    </>
  );
};
