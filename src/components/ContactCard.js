import { TactCard } from "./styles";

const ContactCard = ({ holder }) => {
  return (
    <TactCard>
      <div className="icon"> {holder.icon } </div>
      <div className="tt">   <h5> {holder.heading} </h5> </div>
      <div className="px">
        <h5> {holder.content} </h5>
        <h5> {holder.contentOne} </h5>
      </div>
    </TactCard>
  );
};
export default ContactCard;
