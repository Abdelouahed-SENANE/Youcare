import React from "react";
import Shadow from "../shadow/Shadow";
import ShadowWrapper from "../shadow/ShadowWrapper";
import { useAuth } from "../../../hooks/contexts/AuthContext";
import { createApplication } from "../../../data/application/applicationService";
import { MdOutlineEventAvailable } from "react-icons/md";

const Card = ({
    listing: { id, title, description, skills, date, location },
    updateListings,
}) => {
    const { token, user } = useAuth();

    const handleApply = async () => {
        const payload = {
            listing_id: id,
        };

        try {
            const response = await createApplication(payload);
            console.log(response);
            updateListings();
        } catch (error) {
            console.log("Error creating application:", error);
        }
    };

    return (
        <ShadowWrapper classes="min-w-[300px] border border-primary/60 shadow-slate-300 overflow-hidden bg-white rounded-lg space-y-4 flex justify-between">
            <div className="h-full w-full bg-white flex flex-col gap-1 p-4">
                <div className="flex items-center justify-center">
                    <MdOutlineEventAvailable className="text-[90px] text-primary/90" />
                </div>
                <div>
                    <p className="text-xl ">{title}</p>
                    <p className="text-sm">{description}</p>
                    <p className="flex flex-wrap gap-2 text-sm">
                        {skills.map((skill) => (
                            <span className="bg-primary text-white px-3 py-0.5 rounded-xl ">
                                {`${skill}`}
                            </span>
                        ))}
                    </p>
                    <p className="my-3">
                        {" "}
                        <span className="text-primary font-black">
                            {date}
                        </span>{" "}
                        at {location}
                    </p>

            {token && user.volunteer && (
                <button
                    style={{ margin: 0 }}
                    onClick={handleApply}
                    className=" w-full bg-primary rounded-full  block py-1"
                >
                    <p
                        className="text-white text-lg  font-black text-center"
                    >
                        Apply
                    </p>
                </button>
            )}
                </div>
                
            </div>

        </ShadowWrapper>
    );
};

export default Card;
