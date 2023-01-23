
import "./DropDownInterest.css";
import Select from 'react-select'


const myOptions2 = [
  { value: "Rock", label: "Rock" },
  { value: "Hip-pop", label: "Hip-pop" },
  { value: "Jazz", label: "Jazz" },
  { value: "Swing", label: "Swing" },
  { value: "Funk", label: "Funk" },
  { value: "Pop", label: "Pop" },
  { value: "Blues", label: "Blues" },
  { value: "Soul", label: "Soul" },
  { value: "Classical", label: "Classical" },
  { value: "Disco", label: "Disco" },
  { value: "Raggae", label: "Raggae" },
];
const DropDownInterest = () => {
 
  return (
    <div>
      <Select 
      isMulti 
      closeMenuOnSelect={false}
      options={myOptions2} 
      placeholder="select your music interests" />
    </div>
  );
}

export default DropDownInterest