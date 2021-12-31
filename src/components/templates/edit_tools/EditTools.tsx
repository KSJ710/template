/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLayoutPart, editToolsDisplayState } from 'src/states/atoms/tamplate_atoms';
import ChangeBackgroundColor from 'src/components/templates/edit_tools/ChangeBackgroundColor';
import ChangeFontFamily from 'src/components/templates/edit_tools/ChangeFontFamily';
import ChangeHeadPart from 'src/components/templates/edit_tools/ChangeHeadPart';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const [editToolDisplay, setEditToolDisplay] = useRecoilState(editToolsDisplayState);
  const [bgColorDisplay, setBgColorDisplay] = useState<classDisplay>('none');
  const [fontFamilyDisplay, setFontFamilyDisplay] = useState<classDisplay>('none');
  const [headPartDisplay, setHeadPartDisplay] = useState<classDisplay>('none');
  const curtLayPart = useRecoilValue(currentLayoutPart);

  const handleHiddenEditTools = (e) => {
    e.stopPropagation();
    setBgColorDisplay('none');
    setEditToolDisplay('none');
  };

  const handleShowBgColor = (e) => {
    e.stopPropagation();
    setBgColorDisplay('flex');
    setEditToolDisplay('none');
  };

  const handleShowFontFamily = (e) => {
    e.stopPropagation();
    setFontFamilyDisplay('flex');
    setEditToolDisplay('none');
  };

  // 動的に変数名が決定されれる
  const handleShowHeadPart = (e) => {
    e.stopPropagation();
    setHeadPartDisplay('flex');
    setEditToolDisplay('none');
  };

  // 動的に変数名が決定されれる
  const handleShowFootPart = (e) => {
    e.stopPropagation();
    setHeadPartDisplay('flex');
    setEditToolDisplay('none');
  };

  return (
    <>
      <div
        style={{ display: editToolDisplay }}
        className={styles.base}
        onClick={handleHiddenEditTools}
      >
        <div>
          <p>変更したい項目を選んで下さい</p>
          <ul>
            <li onClick={handleShowBgColor}>背景カラー</li>
            <li onClick={handleShowFontFamily}>文字フォントを変える</li>
            <li onClick={eval(`handleShow${curtLayPart}Part`)}>コンポーネント変更する</li>
            <li onClick={handleShowBgColor}>テキストテキスト</li>
          </ul>
        </div>
      </div>
      {/* editToolで選択した項目に対して表示がされる */}
      <ChangeBackgroundColor display={bgColorDisplay} setDisplay={setBgColorDisplay} />
      <ChangeFontFamily display={fontFamilyDisplay} setDisplay={setFontFamilyDisplay} />
      <ChangeHeadPart display={headPartDisplay} setDisplay={setHeadPartDisplay} />
    </>
  );
};

export default EditToolBox;
