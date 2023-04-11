const ContactItem = (props) => {
  const {contactDetails} = props;
  const {name,number} = contactDetails;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{number}</td>
      </tr>
    </>
  );
};

export default ContactItem;
