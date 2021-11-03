import React, { useContext, useState } from 'react';
import BackgroundColor from 'src/components/edit_tools/BackgroundColor';
import { TempEditContext } from 'src/pages/template';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const tempEditVar: TempEditVar = useContext(TempEditContext);
  const [display, setDisplay] = useState('hidden');
  const hundleDisplayBackgroundColor = (e) => {
    if (display == 'hidden') {
      setDisplay('block');
    } else {
      setDisplay('hidden');
    }
  };
  return (
    <div
      className={`${tempEditVar.display} ${styles.editToolBox} w-[100px] h-[100px] bg-[#990000]`}
      onClick={hundleDisplayBackgroundColor}
    >
      <BackgroundColor display={display} />
    </div>
  );
};

export default EditToolBox;
