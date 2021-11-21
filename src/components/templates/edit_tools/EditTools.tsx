/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { editToolsDisplayState } from 'src/states/atoms/tamplate_atoms';
import ChangeBackgroundColor from 'src/components/templates/edit_tools/ChangeBackgroundColor';
import ChangeHeadPart from 'src/components/templates/edit_tools/ChangeHeadPart';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const [editToolDisplay, setEditToolDisplay] = useRecoilState(editToolsDisplayState);
  const [bgColorDisplay, setBgColorDisplay] = useState<classDisplay>('none');
  const [headPartDisplay, setHeadPartDisplay] = useState<classDisplay>('none');

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

  const handleShowHeadPart = (e) => {
    e.stopPropagation();
    setHeadPartDisplay('flex');
    setEditToolDisplay('none');
  };

  return (
    <>
      <div
        style={{ display: editToolDisplay }}
        className="modal_bg"
        onClick={handleHiddenEditTools}
      >
        <div className="p-3 w-4/5 bg-[#006e54] text-[#e6b422] trbl_center">
          <p className="mb-4 text-2xl">変更したい項目を選んで下さい</p>
          <ul className="flex flex-col gap-3 pl-3 font-thin leading-4">
            <li className="cursor-pointer" onClick={handleShowBgColor}>
              背景カラー
            </li>
            <li className="cursor-pointer" onClick={handleShowBgColor}>
              文字フォントを変える
            </li>
            <li className="cursor-pointer" onClick={handleShowHeadPart}>
              コンポーネント変更する
            </li>
            <li className="cursor-pointer" onClick={handleShowBgColor}>
              テキストテキスト
            </li>
          </ul>
        </div>
      </div>
      <ChangeHeadPart display={headPartDisplay} setDisplay={setHeadPartDisplay} />
      <ChangeBackgroundColor display={bgColorDisplay} setDisplay={setBgColorDisplay} />
    </>
  );
};

export default EditToolBox;
