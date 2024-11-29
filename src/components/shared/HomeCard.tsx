import { plaza } from "@/constants";
import YoutubeEmbed from "./YoutubeEmbed";

type HomeCardProps = {
  post: {
    id: number;
    name?: boolean | undefined;
    description?: boolean | undefined;
    address?: boolean | undefined;
    video?: boolean | undefined;
  };
};

const map = (
  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.099430268789!2d-118.0034451901412!3d33.80974707313764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd292354d93851%3A0x7f6d8c8eb66dd223!2s7522%20W%20Cerritos%20Ave%2C%20Stanton%2C%20CA%2090680!5e0!3m2!1sen!2sus!4v1732422626161!5m2!1sen!2sus"
      width="600"
      height="450"
      loading="lazy"
      className="w-full  p-2 rounded-2xl"
    ></iframe>
  </section>
);

const HomeCard = ({ post }: HomeCardProps) => {
  return (
    <div className="post-card">
      {post.description ? (
        <p className="p-3 text-center">{plaza.description}</p>
      ) : null}
      {post.name ? (
        <div className=" p-3 text-center">
          {plaza.leasing ? (
            <div className="flex flex-col gap-3 text-center">
              <p className="">Available for lease</p>
              <p>{plaza.leasingDetail}</p>
              <div>
                <p>
                  Please contact <br />
                  Loan (Jennifer) : {plaza.phone1} <br />
                  An (John) : {plaza.phone2} <br />
                  Robert : rdao2893@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 text-center">
              <p className="">No available spaces for lease</p>
              <div className="">
                <p>
                  Please contact <br />
                  Loan (Jennifer) : {plaza.phone1} <br />
                  An (John) : {plaza.phone2} <br />
                  Robert : rdao2893@gmail.com
                </p>
              </div>
              <p>
                And we will update you on availabilities in the future or for
                other locations
              </p>
            </div>
          )}
        </div>
      ) : null}
      {post.address ? (
        <>
          <p className="text-center text-xl">{post.address}</p>
          {map}
        </>
      ) : null}
      {post.video ? <YoutubeEmbed /> : null}
    </div>
  );
};

export default HomeCard;
