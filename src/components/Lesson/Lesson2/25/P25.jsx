import '../../../../css/PageControl.css';
import Back from '../../../../componentsprompt/Back';
import Start from '../../../../componentsprompt/Start';
import Label1 from '../../../../componentsprompt/Label1';
import './P25.css';
import eye from "../../../../assets2/Icon/eye.png";

const P25 = () => {
  return (
    <div className='content'>
      {/* <Start page='26' /> */}
      <Label1 title='ร่างกายของเรา' hat='บทที่ 2' img={eye}/>

      {/* <Back page='25' /> */}
    </div>
  );
};

export default P25;
