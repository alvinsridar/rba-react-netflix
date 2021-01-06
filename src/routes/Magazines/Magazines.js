import MagazineList from '../../component/MagazineList/MagazineList.js';
import withNameLogger from '../../component/withNameLogger/withNameLogger.js';

const MagazineListWithNameLoggger = withNameLogger(MagazineList);

export default function Magazines() {
    return (
        <MagazineListWithNameLoggger />
    );
}