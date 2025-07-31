import '../../pages/PageControl.css';
import Label2 from '../../components/Label2';
import Label3 from '../../components/Label3';
import ImgBox1 from '../../components/ImgBox1';
import './P26.css';

const gamer = {
    src: require('../../../Assets/Misc/gamer.png'),
    width: '80%',
    height: '70%'
};

const a = {
    src: require('../../../Assets/Misc/a.png')
}

const b = {
    src: require('../../../Assets/Misc/b.png')
}

const L1Label = () => {
    return (
        <a href='/page/27' id='p26_l1'>
            <img src={a.src} style={{
                position: 'absolute',
                display: 'block',
                width: 250,
                left: -150
            }}/>
            <p>สุนัข</p>
        </a>
    );
};

const L2Label = () => {
    return (
        <a href='/page/27' id='p26_l2'>
            <img src={b.src} style={{
                position: 'absolute',
                display: 'block',
                width: 250,
                left: -150
            }}/>
            <p>คนเล่นเกม</p>
        </a>
    );
};

const P26 = () => {
    return (
        <div className='content'>
            <Label2 text="จากภาพเห็นอะไรก่อน?"/>
            <Label3 text="คำถามชวนคิด" />
            <L1Label />
            <L2Label />
            <ImgBox1 img={gamer} x={'50%'} y={'30%'} width={'40%'} height={'50%'} />
        </div>
    );
};

export default P26;