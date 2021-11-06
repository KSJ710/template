/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import BackgroundColor from 'src/components/edit_tools/BackgroundColor';
import { TempEditContext } from 'src/pages/template';
import styles from './EditToolBox.module.scss';

const EditToolBox = (): JSX.Element => {
  const tempEditVar: TempEditVar = useContext(TempEditContext);
  const [display, setDisplay] = useState('none');

  const hundleHiddenEditToolBox = () => {
    setDisplay('none');
    tempEditVar.setDisplay('none');
  };
  const hundleShowBgColor = (e) => {
    e.stopPropagation();
    setDisplay('flex');
    tempEditVar.setDisplay('none');
  };
  return (
    <>
      <div
        style={{ display: tempEditVar.display }}
        className="modal_bg"
        onClick={hundleHiddenEditToolBox}
      >
        <div className="w-full bg-[#38b48b] trbl_center">
          <p>変更したい項目を選んで下さい</p>
          <ul>
            <li onClick={hundleShowBgColor}>背景カラー</li>
            <li>文字サイズ</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <BackgroundColor display={display} setDisplay={setDisplay} />
    </>
  );
};

export default EditToolBox;
